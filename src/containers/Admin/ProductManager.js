import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form"
import ReactQuill from 'react-quill';
import { links } from '../../links';
import { fireDb, fireStorage } from "../../firebase";
import { modules, formats } from './quillConfig'
import 'react-quill/dist/quill.snow.css';
import './Admin.css';

const categoriesOptions = links.map(link => <option key={link.path} value={link.path.slice(link.path.lastIndexOf('/') + 1)}>{link.name}</option>)

const ProductManager = () => {
    const { register, handleSubmit, errors, watch, reset } = useForm();
    const { register: register2, watch: watch2 } = useForm({ defaultValues: { todo: "add" } });
    const [editorValue, setEditorValue] = useState('');
    const [productsOptions, setProductsOptions] = useState({})
    const [productsInfo, setProductsInfo] = useState({})
    const [subCatOptions, setSubCatOptions] = useState([]);
    const [subCatOptSelectedProd, setSubCatOptSelectedProd] = useState([]);
    const [currentProductId, setCurrentProductId] = useState();
    const category = watch2("category");
    const subcategory = watch2("subcategory")
    const todo = watch2("todo");
    const selectedProductId = watch2("product-id")
    const categorySelectedProd = watch("category")

    const onSubmit = async (data) => {
        let { image, ...product } = data;
        let productKey = currentProductId;
        console.log("Upload proccess begun")
        if (!product.subcategory) { //if there is no sub category, the default will be 'sc' just to organize the data
            product.subcategory = 'sc';
        }
        if (!productKey) { // if we are adding a new product and not editing, a new key will be generated.
            productKey = fireDb.ref().child('test').push().key; // create a new product reference
        }
        // if an image was chosen, we will upload it. if an image already exists, we will delete it first.
        if (image[0]) {
            //First, if there's already an image, we will delete it 
            if (productsInfo[currentProductId] && productsInfo[currentProductId].image) {
                console.log("Old image URL: " + productsInfo[currentProductId].image)
                let imageRef = fireStorage.refFromURL(productsInfo[currentProductId].image);
                if (imageRef) {
                    imageRef.delete().then(() => {
                        console.log("Image deleted successfully")
                    }).catch((error) => {
                        console.log(error)
                    });
                }
            }
            // Now, we can upload the image and get the download url
            let downloadUrl = await uploadTaskPromise(productKey, image[0]);
            product.image = downloadUrl; // Add the downloadUrl to the new product's information
        }

        // Write the new products's data simultaneously in the products list and the quill list.
        var updates = {};
        updates['/test/' + productKey] = product;
        updates['/quill/' + productKey] = editorValue;
        fireDb.ref().update(updates, (error) => {
            if (error) {
                alert("erorr :" + error);
            } else {
                alert("העלאה בוצעה בהצלחה")
                setCurrentProductId();
            }
        });
    }

    const deleteProduct = () => {
        if (window.confirm('אתה בטוח שאתה רוצה למחוק את המוצר?')) {
            //First, if there's already an image, we will delete it 
            if (productsInfo[selectedProductId] && productsInfo[selectedProductId].image) {
                console.log("Old image URL: " + productsInfo[selectedProductId].image)
                let imageRef = fireStorage.refFromURL(productsInfo[selectedProductId].image);
                if (imageRef) {
                    imageRef.delete().then(() => {
                        console.log("Image deleted successfully")
                    }).catch((error) => {
                        console.log(error)
                    });
                }
            }
            var updates = {};
            updates['/test/' + selectedProductId] = null;
            updates['/quill/' + selectedProductId] = null;
            fireDb.ref().update(updates, (error) => {
                if (error) {
                    alert("error :" + error);
                } else {
                    alert("המוצר נמחק בהצלחה")
                }
            });
        }
    }
    // After the current product id changes, we will change the fields accordingly
    useEffect(() => {
        if (currentProductId) {
            const { title = '', description = '', price = 0, stock = 0, category = '', subcategory = '' } = productsInfo[currentProductId]
            reset({ title, description, price, stock, category, subcategory }) // insert product's values to the form fields
            fireDb.ref(`quill/${currentProductId}`).once('value', snapshot => {
                if (snapshot.val() != null) {
                    setEditorValue(snapshot.val())
                }
            })
        } else {
            reset({});
            setEditorValue('');
        }
    }, [currentProductId, productsInfo, reset])


    // This hook is used to fetch the information from firebase
    useEffect(() => {
        // make sure to only fetch the data from firebase if the user wants to update or delete AND it wasn't already fetched before
        if (todo === "update-delete" && Object.keys(productsInfo).length === 0 && productsInfo.constructor === Object) {
            fireDb.ref().child('test').on('value', snapshot => {
                if (snapshot.val() != null) {
                    setProductsInfo({ ...snapshot.val() })
                }
            })
        }
        if (todo === "add") {
            setCurrentProductId(); // reset the current product id
        }
    }, [todo, productsInfo, reset])

    // This hook is used for filtering
    useEffect(() => {
        let productsTemp = Object.keys(productsInfo)
            .filter((id) => (!category ||
                (category === productsInfo[id].category && !subcategory) ||
                subcategory === productsInfo[id].subcategory))
            .map(id => <option key={id} value={id}>{productsInfo[id].title}</option>)
        setProductsOptions(<>
            <label>שם מוצר: </label>
            <select name="product-id" ref={register2({ required: true })}>
                {productsTemp}
            </select>
        </>);
    }, [category, subcategory, productsInfo, register2])

    // This hook is used to build the sub categories list
    useEffect(() => {
        links.forEach((link) => {
            if (link.path.includes(category)) {
                if (link.routes.length) {
                    setSubCatOptions(<>
                        <label>תת קטגוריה: </label>
                        <select name="subcategory" ref={register2({ required: true })}>
                            {link.routes.map(subLink => <option key={subLink.path} value={subLink.path.slice(subLink.path.lastIndexOf('/') + 1)}>{subLink.name}</option>)}
                        </select>
                    </>
                    )
                } else {
                    setSubCatOptions([]);
                }
            }
        })
    }, [category, register2])

    // This hook is used to build the sub categories list in the selected product
    useEffect(() => {
        links.forEach((link) => {
            if (link.path.includes(categorySelectedProd)) {
                if (link.routes.length) {
                    setSubCatOptSelectedProd(<>
                        <label> תת קטגוריה:  </label>
                        <select name="subcategory" ref={register({ required: true })}>
                            {link.routes.map(subLink => <option key={subLink.path} value={subLink.path.slice(subLink.path.lastIndexOf('/') + 1)}>{subLink.name}</option>)}
                        </select>
                    </>
                    )
                } else {
                    setSubCatOptSelectedProd([]);
                }
            }
        })
    }, [categorySelectedProd, register])

    return (
        <article>
            <form className="todo">
                <input name="todo" type="radio" value="add" ref={register2} />
                <label>מוצר חדש</label>
                <input name="todo" type="radio" value="update-delete" ref={register2} />
                <label>עריכת מוצר</label>
                {todo === "update-delete" ?
                    <>
                        <h3>בחירת מוצר לעריכה/מחיקה</h3>
                        <label>קטגוריה: </label>
                        <select name="category" ref={register2({ required: true })}>
                            {categoriesOptions}
                        </select>
                        {subCatOptions}
                        {productsOptions}
                        <div>
                            <button className='button green' type='button' onClick={() => setCurrentProductId(selectedProductId)}>ערוך מוצר נבחר</button>
                            <button className='button red' type='button' onClick={deleteProduct}>מחק מוצר נבחר</button>
                        </div>
                    </>
                    : null}
            </form>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <h2 style={{ paddingBottom: '10px' }}>{currentProductId ? `עדכון מוצר "${productsInfo[currentProductId].title}"` : "הוספת מוצר"}</h2>
                <label>כותרת</label>
                <input type="text" name="title" ref={register({ required: true })} placeholder="כותרת" />
                {errors.title && <span className="error">יש להכניס כותרת</span>}
                <label>מחיר</label>
                <input type='number' name="price" ref={register({ required: true })} placeholder="מחיר" />
                {errors.price && <span className="error">יש לציין מחיר. כדי שיופיע "צור קשר לקבלת מחיר", יש לציין מחיר 0</span>}
                <label>תיאור</label>
                <textarea name="description" ref={register} placeholder="תיאור" />
                <label>קטגוריה</label>
                <select name="category" ref={register({ required: true })}>
                    {categoriesOptions}
                </select>
                {subCatOptSelectedProd}
                <label>מלאי</label>
                <input type='number' name="stock" ref={register({ required: true })} placeholder="מלאי" />
                {errors.stock && <span className="error">יש להכניס מספר מוצרים במלאי</span>}
                <label>תמונה</label>
                <input type="file" name="image" ref={register} />
                <ReactQuill theme="snow" value={editorValue} onChange={setEditorValue} modules={modules} formats={formats} />
                <input type="submit" value={todo === 'add' ? "העלה מוצר" : "עדכן מוצר"} className='button green big' />
            </form>
        </article>
    );
}


async function uploadTaskPromise(productId, file) {
    return new Promise(function (resolve, reject) {
        //Now we will upload the image and return the download url
        let uploadTask = fireStorage.ref().child(`products/${productId}/${file.name}`).put(file); // upload 
        uploadTask.on('state_changed', (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, (error) => {
            console.log(error)
            reject();
        }, () => { //Success
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('Uploaded image available at', downloadURL);
                resolve(downloadURL)
            });
        })
    });
}

export default ProductManager;

// <ReactQuill theme={null} value={retrievedEditorData} readOnly={true} />

    // // This hook is used to fetch the information from firebase
    // useEffect(() => {
    //     fireDb.ref().child('quill').on('value', snapshot => {
    //         let data = snapshot.val();
    //         if (data) {
    //             setRetrievedEditorData(data['-MI_5Ts6RbzREVsLCH9P'])
    //         }
    //     })
    // }, [])