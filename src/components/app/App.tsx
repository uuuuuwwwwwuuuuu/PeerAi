import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../header/Header';
import Main from '../main/Main';
import CalcModal from '../CalcModal/CalcModal';
import Blur from '../CalcModal/Blur';
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';

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
                return <Main setIsVisibleCalcModal={setIsVisibleCalcModal} />;
            case 'login':
                return <LogIn />
            case 'signup':
                return <SignUp />
        }
    };

    return (
        <div className="App" style={{ overflowY: isVisibleCalcModal ? 'hidden' : 'auto' }}>
            <Header setPage={setPage} />
            {renderContent(page)}
            {isVisibleCalcModal && <Blur />}
            {isVisibleCalcModal && <CalcModal setIsVisibleCalcModal={setIsVisibleCalcModal} />}
        </div>
    );
}

export default App;
