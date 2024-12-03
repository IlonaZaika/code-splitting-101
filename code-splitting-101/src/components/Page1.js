import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../logo.svg";

const Page1 = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to React App</p>
      </header>
      <button className="disabled">Page1</button>
      <button onClick={() => navigate("/page2")}>Page2</button>
      <button onClick={() => navigate("/page3")}>Page3</button>
    </div>
  );
};

export default Page1;
