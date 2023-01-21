import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header';
import Light from './components/light/Light';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        <Light />
        <Footer />
    </>
);