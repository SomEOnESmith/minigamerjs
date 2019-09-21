import React, { Component } from "react";

import empty from "./connectEmpty.png";
import red from "./connectRed.png";
import yellow from "./connectYellow.png";

class Cell extends Component {
  state = {
    emptycell: true,
    color: ""
  };
  hiddenCell = () => {
    // this.setState({});
    return this.props.hiddenCell ? (
      <img src={red} alt="" height="50px" />
    ) : (
      <img src={yellow} alt="" height="50px" />
    );
  };

  coloredCell = () => {
    if (this.state.color === "red") {
      return <img src={red} alt="" height="50px" />;
    } else if (this.state.color === "yellow") {
      return <img src={yellow} alt="" height="50px" />;
    } else {
      return <img src={empty} alt="" height="50px" />;
    }
  };

  changeColor = () => {
    let newcolor = "";
    if (this.props.player) newcolor = "red";
    else newcolor = "yellow";

    this.setState({
      color: newcolor,
      [this.props.emptycell]: false
    });
    // this.props.changePlayer(this.props.player);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.changeColor()}>
          {this.coloredCell(this.props.color)}
        </button>
      </div>
    );
  }
}
export default Cell;
