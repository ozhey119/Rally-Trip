import React, { useState, useEffect } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import ProductPreview from '../../components/Product/ProductPreview';
import ProductPage from '../../components/Product/ProductPage';
import { Switch, Route, useParams } from 'react-router-dom';
import { fireDb } from "../../firebase";
// import migrate from '../../migrateFB.json'; Used for migrating from the json to firebase
import './Products.css';

const Products = () => {
    const [information, setInformation] = useState([]);
    const [products, setProducts] = useState([]);
    let { category, subcategory, id } = useParams();

    // This hook is used to fetch the information from firebase
    useEffect(() => {
        fireDb.ref().child('products').on('value', snapshot => {
            if (snapshot.val() != null) {
                setInformation({ ...snapshot.val() })
            }
        })
    }, [])


    // This hook is used for filtering
    useEffect(() => {
        let productsTemp = Object.keys(information)
            .filter((id) => (!category ||
                (category === information[id].category && !subcategory) ||
                subcategory === information[id].subcategory))
            .map(id => <ProductPreview key={id} product={information[id]} id={id} />)
        setProducts(productsTemp);
    }, [category, subcategory, information])


    return (
        <div className='page-container products-page'>
            <Switch>
                <Route path='/products/:category/:subcategory/:id'>
                    <ProductPage product={information[id]} id={id} />
                </Route>
                <Route exact path={["/products/:category/:subcategory", "/products/:category", "/products"]}>
                    <SideMenu />
                    <MobileMenu />
                    <div className='products-container'>
                        {products}
                    </div>
                </Route>
            </Switch>

        </div>
    );
}

export default Products;


        // @@ this code is used to migrate from the json file @@
        // migrate.forEach(product => {
        //     let newProduct = fireDb.ref().child('products').push();
        //     newProduct.set(product, (err) => {
        //         if (err)
        //             console.log(err)
        //     })
        // })