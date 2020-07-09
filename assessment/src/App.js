import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ExPropsChildren from "./ExPropsChildren";
import { ControlledComponentWithHooks } from "./ControlledComponentWithHooks";
import ColorChanges from "./LifeCycle";
import ParentWithEvent from "./ShouldComponentUpdateEX_withEvent";
import ExampleOfMemo from "./ShouldComponentUpdate_withoutEvent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ width: "100px", height: "100px" }}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <ExPropsChildren>
        <span>Display: Inline</span>
      </ExPropsChildren>
      <ControlledComponentWithHooks />
      <ColorChanges favcol="Yellow" /> */}
      {/* <ParentWithEvent /> */}
      <ExampleOfMemo />
    </div>
  );
}

export default App;
