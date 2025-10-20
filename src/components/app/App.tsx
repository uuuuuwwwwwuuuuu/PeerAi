import { useEffect, useState } from 'react';
import './App.scss';
import Header from '../header/Header';
import Main from '../main/Main';
import CalcModal from '../CalcModal/CalcModal';
import Blur from '../CalcModal/Blur';
import { CSSProperties } from 'styled-components';
import Footer from '../footer/Footer';
import Login from '../LogIn/LogIn';
import { Route, Routes, useLocation } from 'react-router-dom';

export type Pages = 'main' | 'signup' | 'login';

function App() {
    const location = useLocation()
    const appStyles: CSSProperties = {
        height: location.hash === '/login' || location.hash === '/signup' ? '100svh' : 'max-content',
    };

    return (
        <div className="App" style={appStyles}>
            <Header />

            <Routes>
                <Route
                    index
                    element={
                        <>
                            <Main />
                            <Footer />
                        </>
                    }
                />
                <Route path="/login" element={<Login type="login" />} />
                <Route path="/signup" element={<Login type="signup" />} />
                <Route
                    path="/calculator"
                    element={
                        <>
                            <Blur />
                            <CalcModal/>
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
