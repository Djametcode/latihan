import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Forms from "./components/main";
import './app.css';

function App() {
  const askName = () => {
    const nama = prompt('siapa namamu?');
    return (
      alert('hallo' + nama)
      )
  }
  const clickMe = () => {
    console.log('clicked');
  }
  return (
    <>
      <div className="container-css">
        <div className="flex-top">
          <Header />
          <Nav className="nav-css" />
        </div>
        <button onClick={() => {clickMe('Tofik')}}>Tekan saya</button>
        <button onClick={askName}>Tekan saya selanjutnya</button>
      </div>
        <Forms />
    </>
  )
}

export default App;