import React from 'react';
import './App.css';
import MyHeader from './components/Message';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <MyHeader name={"Ivan"}/>
      </header>
    </div>
  );
}

export default App;
