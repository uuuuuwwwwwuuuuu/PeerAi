import React, { FC, useEffect, useState } from 'react';
import './App.scss';
import Header from '../header/Header';
import Main from '../main/Main';
import CalcModal from '../CalcModal/CalcModal';
import Blur from '../CalcModal/Blur';
import Login from '../Login/Login';
import { Outlet, Route, Routes } from 'react-router-dom';
import { CSSProperties } from 'styled-components';
import Footer from '../footer/Footer';

export type Pages = 'main' | 'signup' | 'login';

function App() {
    const [isVisibleCalcModal, setIsVisibleCalcModal] = useState(false);
    const [page, setPage] = useState<Pages>('main');
    
    useEffect(() => {
        console.log(page)
    }, [page])

    const renderContent = (page: Pages) => {
        switch (page) {
            case 'main':
                return (
                    <>
                        <Main setIsVisibleCalcModal={setIsVisibleCalcModal} />
                        <Footer />
                    </>
            );
            case 'login':
                return <Login type='login' />
            case 'signup':
                return <Login type='signup' />
        }
    };

    const appStyles: CSSProperties ={
        overflowY: isVisibleCalcModal ? 'hidden' : 'auto',
        height: page === 'main' ? 'max-content' : '100svh'
    }

    return (
        <div className="App" style={appStyles}>
            <Header setPage={setPage} />
            {renderContent(page)}
            {isVisibleCalcModal && <Blur />}
            {isVisibleCalcModal && <CalcModal setIsVisibleCalcModal={setIsVisibleCalcModal} />}
        </div>
    );
}

export default App;
