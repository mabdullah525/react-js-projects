import { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import Stopwatch from './Components/Stopwatch';

function App() {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <div className='container'>
      <div className="tab-btns">
        <button
          className={`cal ${activeTab === 'calculator' ? 'active' : ''}`}
          onClick={() => setActiveTab('calculator')}
        >
          Calculator
        </button>
        <button
          className={`stopw ${activeTab === 'stopwatch' ? 'active' : ''}`}
          onClick={() => setActiveTab('stopwatch')}
        >
          Stopwatch
        </button>
      </div>

      <div className='app'>
        {activeTab === 'calculator' && <Calculator />}
        {activeTab === 'stopwatch' && <Stopwatch />}
      </div>
    </div>
  );
}

export default App;
