import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  handleTambah = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  handleKurang = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  render() {
    let type = "";
    if (this.state.counter % 2 === 0) {
      type = "Genap";
    } else {
      type = "Ganjil";
    }
    return (
      <div>
        <h1>Hallo</h1>
        <h3>{this.state.counter % 2 === 0 ? "Genap" : "Ganjil"}</h3>
        <h4>{type}</h4>
        <button onClick={this.handleKurang}>-</button>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleTambah}>+</button>
      </div>
    );
  }
}

export default App;
