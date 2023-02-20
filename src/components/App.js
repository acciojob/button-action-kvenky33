import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [para, setPara] = useState("");
  const addpara = () => {
    setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  };
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <p id="para">{para}</p>
      <button id="click" onClick={addpara}>
        click here
      </button>
    </div>
  );
}

export default App;
