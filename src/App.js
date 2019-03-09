import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/clock/Clock";

class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This page is under construction</p>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/charinda-dissanayake/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
          <Clock date={`${year}-05-08T00:00:00`} />
        </header>
      </div>
    );
  }
}

export default App;
