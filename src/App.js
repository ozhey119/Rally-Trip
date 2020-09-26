import React from 'react';
import Products from './containers/Products/Products';
import Home from './containers/Home/Home'
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';

const App = () => {

    const subLinks =
        <>
            <li><NavLink to={`/products/roadbooks`} activeClassName='active' className='subitem'>סיפורי דרך</NavLink></li>
            <li><NavLink to={`/products/roadbook-holders`} activeClassName='active' className='subitem'>ספרי דרך</NavLink></li>
            <li><NavLink to={`/products/icos`} activeClassName='active' className='subitem'>מדי מרחק</NavLink></li>
            <li><NavLink to={`/products/garmin`} activeClassName='active' className='subitem'>גרמין</NavLink></li>
            <li><NavLink to={`/products/gopro`} activeClassName='active' className='subitem'>מצלמות גו פרו</NavLink></li>
        </>


    return (
        <main className='main'>
            <NavBar subLinks={subLinks} />
            <ErrorBoundary>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path={["/products/:category", "/products"]}>
                        <Products links={subLinks} />
                    </Route>
                    <Route path="/rally-abroad">
                        <div className='page-container'>rally-abroad</div>
                    </Route>
                    <Route path="/nav-guide">
                        <div className='page-container'>nav-guide</div>
                    </Route>
                </Switch>
            </ErrorBoundary>
            <Footer />
        </main>
    );
}

export default App;
