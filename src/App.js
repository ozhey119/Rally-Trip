import React, { useState } from 'react';
import Products from './containers/Products/Products';
import Home from './containers/Home/Home'
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';

const App = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    let backdrop;

    if (sideDrawerOpen) {
        backdrop = <BackDrop setWindowOpen={setSideDrawerOpen} />
    }

    const subLinks =
        <>
            <li><NavLink exact to={`/products`} activeClassName='active' className = 'subitem'>כל המוצרים</NavLink></li>
            <li><NavLink to={`/products/roadbooks`} activeClassName='active' className='subitem'>סיפורי דרך</NavLink></li>
            <li><NavLink to={`/products/readers`} activeClassName='active' className = 'subitem'>ספרי דרך</NavLink></li>
            <li><NavLink to={`/products/gopro`} activeClassName='active' className = 'subitem'>מצלמות גו פרו</NavLink></li>
            <li><NavLink to={`/products/gps`} activeClassName='active' className = 'subitem'>מכשירי GPS</NavLink></li>
            <li><NavLink to={`/products/odometers`} activeClassName='active' className = 'subitem'>מדי מרחק</NavLink></li>
        </>

    return (
        <main className='main'>
            <NavBar setSideDrawerOpen={setSideDrawerOpen} subLinks={subLinks} />
            <SideDrawer sideDrawerOpen={sideDrawerOpen} subLinks={subLinks} />
            {backdrop}
            <ErrorBoundary>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path={["/products/:category","/products"]}>
                        <Products links={subLinks} />
                    </Route>
                    <Route path="/rally-abroad">
                        <div className = 'page-container'>rally-abroad</div>
                    </Route>
                    <Route path="/nav-guide">
                        <div className = 'page-container'>nav-guide</div>
                    </Route>
                </Switch>
            </ErrorBoundary>
            <Footer />
        </main>
    );
}

export default App;
