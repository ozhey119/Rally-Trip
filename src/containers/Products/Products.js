import React from 'react';
import TopMenu from '../../components/TopMenu/TopMenu';
import MobileDropdown from '../../components/MobileDropdown/MobileDropdown';
import ProductPreview from '../../components/Product/ProductPreview';
import ProductPage from '../../components/Product/ProductPage';
import booksInformation from '../../ProductsInformation.json'
import { Switch, Route, useParams } from 'react-router-dom';
import './Products.css';

const Items = ({ links }) => {
    let { category } = useParams();
    let itemList = booksInformation
        .filter(product => (!category || category === product.category))
        .map((product) => <ProductPreview key={product.id} item={product} />)

    return (
        <div className='page-container'>
            <Switch>
                <Route path='/products/:category/:id'>
                    <ProductPage />
                </Route>
                <Route exact path={["/products/:category", "/products"]}>
                    <TopMenu>{links}</TopMenu>
                    <MobileDropdown>{links}</MobileDropdown>
                    <div className='products-container'>
                        {itemList}
                    </div>
                </Route>
            </Switch>

        </div>
    );
}

export default Items;
