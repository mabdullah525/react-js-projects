import { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import Stopwatch from './Components/Stopwatch';
import Accordian from './Components/Accordian';

function App() {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <div className='container'>
      <div className="tab-btns">
        <button
          className={`${activeTab === 'calculator' ? 'active' : ''}`}
          onClick={() => setActiveTab('calculator')}
        >
          Calculator
        </button>
        <button
          className={`${activeTab === 'stopwatch' ? 'active' : ''}`}
          onClick={() => setActiveTab('stopwatch')}
        >
          Stopwatch
        </button>
        <button className={`${activeTab === 'accordian' ? 'active' : ''}`} onClick={() => setActiveTab('accordian')}>Accordian</button>
      </div>

      <div className='app'>
        {activeTab === 'calculator' && <Calculator />}
        {activeTab === 'stopwatch' && <Stopwatch />}
        {activeTab === 'accordian' && <Accordian />}
      </div>
    </div>
  );
}

export default App;
