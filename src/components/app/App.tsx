import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../header/Header';
import Main from '../main/Main';
import CalcModal from '../CalcModal/CalcModal';
import Blur from '../CalcModal/Blur';

function App() {
  const [isVisibleCalcModal, setIsVisibleCalcModal] = useState(true);

  useEffect(() => {
    
  }, [isVisibleCalcModal])

  return (
    <div className="App" style={{overflowY: isVisibleCalcModal ? 'hidden' : 'auto'}}>
      <Header />
      <Main setIsVisibleCalcModal={setIsVisibleCalcModal} />
      {isVisibleCalcModal && <Blur />}
      {isVisibleCalcModal && <CalcModal setIsVisibleCalcModal={setIsVisibleCalcModal} />}
    </div>
  );
}

export default App;
