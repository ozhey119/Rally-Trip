import React from 'react';
import Books from './containers/Books/Books';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import logo from './logo.png';
import './App.css';

const App = () => {
    return (
        <main className='main'>
            <img src={logo} alt='Rally Trip' id='logo' />
            <ErrorBoundary>
                <Books />
            </ErrorBoundary>
            <Footer />
        </main>
    );
}

export default App;
