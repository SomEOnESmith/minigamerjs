import React, { Component } from "react";
import "./App.css";
import Board from "./Board";

class App extends Component {
  state = {
    player: false
  };

  changePlayer = () => {
    const newplayer = !this.state.player;
    this.setState({
      player: newplayer
    });
  };

  render() {
    return (
      <button onClick={() => this.changePlayer()}>
        <Board player={this.state.player} />
      </button>
    );
  }
}
export default App;
