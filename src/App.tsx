
import React from 'react';
import './App.css';
import Paymentform from './components/Paymentform';
import PopupModal from './components/PayWallModal';

function App() {
  return (
    <div className="App">
  {/* <Paymentform/> */}
  <PopupModal open={true} onClose={function (): void {
        throw new Error('Function not implemented.');
      } }/>
    </div>
  );
}

export default App;
