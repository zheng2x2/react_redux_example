import React from 'react';
import './App.css';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

class App extends React.Component() {
  render(){
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot/>
        <DisplayNumberRoot/>
      </div>
    );
  }
}

export default App;
