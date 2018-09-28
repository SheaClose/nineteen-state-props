import React, { Component } from "react";

class Child extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     input: ""
  //   };
  // }
  // renderStuff() {
  //   let someVar = "test";
  //   return <div>Hi from {someVar} renderStuff</div>;
  // }

  render() {
    return (
      <div>
        <input type="text" onChange={this.props.handlerFromParent} />
        {this.props.input}
        {/* {this.state.input} */}
        <ul>
          <li>{this.props.string}</li>
          <li>{this.props.num}</li>
          <li> {this.props.obj.name} </li>
          <li> {this.props.obj.location} </li>
          <li>{JSON.stringify(this.props.obj)}</li>
        </ul>
      </div>
    );
  }
}

export default Child;
