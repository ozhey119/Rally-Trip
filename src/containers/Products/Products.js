import React, { useState, useEffect } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import MobileDropdown from '../../components/MobileDropdown/MobileDropdown';
import ProductPreview from '../../components/Product/ProductPreview';
import ProductPage from '../../components/Product/ProductPage';
import { Switch, Route, useParams } from 'react-router-dom';
import fireDb from "../../firebase";
// import migrate from '../../migrateFB.json'; Used for migrating from the json to firebase
import './Products.css';

const Products = ({ links }) => {
    const [information, setInformation] = useState([]);
    const [products, setProducts] = useState([]);
    let { category } = useParams();

    // This hook is used to fetch the information from firebase
    useEffect(() => {
        fireDb.child('products').on('value', snapshot => {
            if (snapshot.val() != null) {
                setInformation({ ...snapshot.val() })
            }
        })
    }, [])


    // This hook is used for filtering
    useEffect(() => {
        let productsTemp = Object.keys(information)
        .filter((id) => (!category || category === information[id].category))
        .map(id => <ProductPreview key={id} product={information[id]} />)
        setProducts(productsTemp);
    }, [category])


    return (
        <div className='page-container products-page'>
            <Switch>
                <Route path='/products/:category/:id'>
                    <ProductPage />
                </Route>
                <Route exact path={["/products/:category", "/products"]}>
                    <SideMenu>{links}</SideMenu>
                    <MobileDropdown>{links}</MobileDropdown>
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
        //     let newProduct = fireDb.child('products').push();
        //     newProduct.set(product, (err) => {
        //         if (err)
        //             console.log(err)
        //     })
        // })