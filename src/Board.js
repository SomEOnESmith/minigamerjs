import React, { Component } from "react";
import RowLine from "./RowLine.js";

import empty from "./connectEmpty.png";
import red from "./connectRed.png";
import yellow from "./connectYellow.png";
import { reset } from "ansi-colors";

// return <img src={red} alt="" height="50px" />;

// let newcolor = "";
// if (this.props.player) newcolor = "red";
// else newcolor = "yellow";

class Board extends Component {
  state = {
    elements: Array.from({ length: 42 }, (_, idx) => {
      return { id: idx, emptycell: true, color: "" };
    }),
    win: false
  };

  winner = () => {
    if (this.state.win) {
      if (this.props.player) {
        return (
          <>
            <h1>The winner is Player 1</h1>
            <button
              className="btn btn-warning mb-3"
              onClick={() => this.reset()}
            >
              Play again
            </button>
          </>
        );
      }
      return (
        <>
          <h1>The winner is Player 2</h1>
          <button className="btn btn-warning mb-3" onClick={() => this.reset()}>
            Play again
          </button>
        </>
      );
    }
  };

  reset = () => {
    const resetElements = Array.from({ length: 42 }, (_, idx) => {
      return { id: idx, emptycell: true, color: "" };
    });
    this.setState({ elements: resetElements, win: false });
  };

  winCondetion = cell => {
    let index = parseInt(cell.id / 7);
    index = index * 7;
    let counter = 0;
    let count = 0;
    while (count < 7) {
      if (cell.color === this.state.elements[index + count].color) {
        counter++;
        if (counter === 4) {
          this.setState({
            win: true
          });
          return cell.color;
        }
      } else {
        counter = 0;
      }
      count++;
    }
    count = 0;
    index = cell.id - parseInt(cell.id / 7) * 7 + 35;
    counter = 0;
    while (count < 6) {
      if (cell.color === this.state.elements[index - 7 * count].color) {
        counter++;
        if (counter === 4) {
          this.setState({
            win: true
          });
          break;
        }
      } else {
        counter = 0;
      }
      count++;
    }
  };

  changeState = cell => {
    let row = 6;
    let offset = cell.id + (row - 1) * 7;
    while (true) {
      if (this.state.elements[offset].emptycell) {
        let temp = this.state.elements.find(elem => elem.id === offset);
        temp.emptycell = !temp.emptycell;
        if (this.props.player) temp.color = "red";
        else temp.color = "yellow";

        this.setState({ elements: [...this.state.elements] });
        // console.log(this.state.elements[offset]);
        // console.log(this.winCondetion(this.state.elements[offset]));
        this.winCondetion(this.state.elements[offset]);
        break;
      }
      row = --row;
      offset = cell.id + (row - 1) * 7;
    }
  };

  changeCell = cell => {
    if (cell.color === "yellow")
      return <img src={yellow} alt="" height="50px" />;
    else if (cell.color === "red")
      return <img src={red} alt="" height="50px" />;
    else return <img src={empty} alt="" height="50px" />;
  };

  render() {
    // coloredCell={coloredCell}
    // changeColor={changeColor}
    let comp = [
      this.state.elements.slice(0, 7),
      this.state.elements.slice(7, 14),
      this.state.elements.slice(14, 21),
      this.state.elements.slice(21, 28),
      this.state.elements.slice(28, 35),
      this.state.elements.slice(35, 42)
    ];

    let oneRow = comp.map(row => {
      return (
        <tr>
          <td>
            <RowLine
              row={row}
              changeCell={this.changeCell}
              changeState={this.changeState}
              winCondetion={this.winCondetion}
            />
          </td>
        </tr>
      );
    });

    return (
      <div className="container">
        <table className="my-5 mx-5">
          <tbody>{oneRow}</tbody>
        </table>
        <div>{this.winner()}</div>
      </div>
    );
  }
}

export default Board;
