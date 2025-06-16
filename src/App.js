import './App.css';
import Calculator from './Components/Calculator';
import Stopwatch from './Components/Stopwatch';


function App() {
  return (
    <>
      <div className='container'>
        <div className="tab-btns">
          <button className='cal'>Calculator</button>
          <button className='stopw'>Stopwatch</button>
        </div>
        <div className='app'>
          <Calculator />
          <Stopwatch />
        </div>
      </div>
    </>

  );
}

export default App;
