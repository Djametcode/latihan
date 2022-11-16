import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";

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
    <div>
      <Header />
      <Nav />
      <button onClick={() => {clickMe('Tofik')}}>Tekan saya</button>
      <button onClick={askName}>Tekan saya selanjutnya</button>
    </div>
  )
}

export default App;