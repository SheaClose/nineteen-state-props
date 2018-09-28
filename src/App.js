import React, { Component } from "react";
import Child from "./Child";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stateNum: 35,
      person: {
        name: "Shea"
      },
      input: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Child
          handlerFromParent={this.onChange}
          input={this.state.input}
          string="Straight up string value"
          num={this.state.stateNum}
          obj={this.state.person}
        />
        {/* <div>
        <ul>
          <li>"Straight up string value"</li>
        </ul>
      </div> */}
      </div>
    );
  }
}

export default App;
