import React from 'react';
import Products from './containers/Products/Products';
import Home from './containers/Home/Home';
import Admin from './containers/Admin/Admin';
import NavGuide from './containers/NavGuide/NavGuide';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import { Switch, Route } from 'react-router-dom';

const App = () => {

    return (
        <main className='main'>
            <NavBar />
            <ErrorBoundary>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path={["/products/:category/:subcategory/:id", "/products/:category/:subcategory", "/products/:category", "/products"]}>
                        <Products />
                    </Route>
                    <Route path="/rally-abroad">
                        <div className='page-container'>rally-abroad</div>
                    </Route>
                    <Route path="/nav-guide">
                        <NavGuide />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="*">
                        <div className='page-container'>הדף לא נמצא</div>
                    </Route>
                </Switch>
            </ErrorBoundary>
            <Footer />
        </main>
    );
}

export default App;
