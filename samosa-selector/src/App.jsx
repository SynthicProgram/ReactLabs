import './App.css';
import { useState } from 'react';
import Upgrade from './components/Upgrade.jsx';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);
  const upgradeFunct = (upgradeCost, upgradeMult) => {
    if (count >= upgradeCost) {
      setCount(count - upgradeCost);
      setMultiplier(multiplier * upgradeMult);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <h3>Multiplier: {multiplier}x</h3>
        <img onClick={updateCount} className="samosa" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F257-2577640_samosa.png&f=1&nofb=1&ipt=0d4a69e7e501cf934ba5c26ec655d09896dde0eeec0f58dc1cfeb577cf510c39&ipo=images" />

      </div>
      <div className="container">
        <Upgrade 
          upgradeName="Double Stuffed" 
          upgradeCost={10} 
          upgradeMult={2} 
          upgradeFunct={() => upgradeFunct(10, 2)}
        />
        <Upgrade 
          upgradeName="Party Pack" 
          upgradeCost={100} 
          upgradeMult={5} 
          upgradeFunct={() => upgradeFunct(100, 5)}
        />
        <Upgrade 
          upgradeName="Full Feast" 
          upgradeCost={1000} 
          upgradeMult={10} 
          upgradeFunct={() => upgradeFunct(100, 10)}
        />
        <Upgrade 
          upgradeName="Ultimate Samosa" 
          upgradeCost={100000} 
          upgradeMult={50} 
          upgradeFunct={() => upgradeFunct(100000, 50)}
        />
      </div>
    </div>
  )
}

export default App