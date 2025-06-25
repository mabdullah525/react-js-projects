import { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import Stopwatch from './Components/Stopwatch';
import Accordion from './Components/Accordion/Accordion';
import Greeting from './Components/Greeting';
import Todos from './Components/Todos';

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
        <button className={`${activeTab === 'accordion' ? 'active' : ''}`} onClick={() => setActiveTab('accordion')}>Accordion</button>
        <button className={`${activeTab === 'greeting' ? 'active' : ''}`} onClick={() => setActiveTab('greeting')}>Greeting</button>
        <button className={`${activeTab === 'todos' ? 'active' : ''}`} onClick={() => setActiveTab('todos')}>Todos</button>
      </div>

      <div className='app'>
        {activeTab === 'calculator' && <Calculator />}
        {activeTab === 'stopwatch' && <Stopwatch />}
        {activeTab === 'accordion' && <Accordion />}
        {activeTab === 'greeting' && <Greeting />}
        {activeTab === 'todos' && <Todos />}
      </div>
    </div>
  );
}

export default App;
