import React from 'react';
import Books from './containers/Books/Books';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const App = () => {
    return (
        <main className='main'>
            <NavBar />
            <ErrorBoundary>
                <Books />
            </ErrorBoundary>
            <Footer />
        </main>
    );
}

export default App;
