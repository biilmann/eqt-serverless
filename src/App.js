import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const [quote, setQuote] = useState(null)

  const clickHandler = async () => {
    const response = await fetch("/api/quote")
    const data = await response.json()
    setQuote(data.message)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {quote || "Click to get a quote"}
        </p>
        <a
          className="App-link"
          onClick={clickHandler}
        >
          Click for a quote
        </a>
      </header>
    </div>
  );
}

export default App;
