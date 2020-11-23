import React, { Suspense } from 'react';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader/Loader';
import './App.css';
import { Switch, Route } from 'react-router-dom';

const Admin = React.lazy(() => import('./containers/Admin/Admin'));
const Products = React.lazy(() => import('./containers/Products/Products'));
const NavGuide = React.lazy(() => import('./containers/NavGuide/NavGuide'));
const Abroad = React.lazy(() => import('./containers/Abroad/Abroad'));
const Home = React.lazy(() => import('./containers/Home/Home'));


const App = () => {

    return (
        <main className='main'>
            <NavBar />
            <ErrorBoundary>
                <Switch>
                    <Suspense fallback={''}>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path={["/products/:category/:subcategory/:id", "/products/:category/:subcategory", "/products/:category", "/products"]}>
                            <Products />
                        </Route>
                        <Route path="/rally-abroad">
                            <Abroad />
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
                    </Suspense>
                </Switch>
            </ErrorBoundary>
            <Footer />
        </main>
    );
}

export default App;
