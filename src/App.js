import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet'
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ErrorBoundary from './components/ErrorBoundary';
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
            <Helmet>
                <meta name="title" content="Rally Trip ראלי טריפ" />
                <meta name="description" content="ראלי טריפ עוסקת במכירת מוצרים הקשורים לעולם הראלי רייד (ספרי דרך, סיפורי דרך, גרמין, גופרו, מדי מרחק), בהדרכות ניווט ובהוצאת קבוצות למרוצים בחול" />
                <title>Rally Trip ראלי טריפ</title>
            </Helmet>
            <NavBar />
            <ErrorBoundary>
                <Suspense fallback={''}>
                    <Switch>
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
                    </Switch>
                </Suspense>
            </ErrorBoundary>
            <Footer />
        </main>
    );
}

export default App;
