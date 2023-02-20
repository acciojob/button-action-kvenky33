import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [isClicked, setIsClicked] = useState(false);
  const addpara = () => {
    setIsClicked(true);
  };
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      {isClicked && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
      <button id="click" onClick={addpara}>
        click here
      </button>
    </div>
  );
}

export default App;
