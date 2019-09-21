import React, { Component } from "react";
import RowLine from "./RowLine.js";

class Board extends Component {
  state = {
    row: "", //row id
    // col: "" //cell id
    emptycell: true,
    color: ""
  };
  elements = [0, 1, 2, 3, 4, 5];

  render() {
    let rows = this.elements.map(i => {
      return (
        <tr>
          <td>
            <RowLine
              id={i}
              player={this.props.player}
              emptycell={this.state.emptycell}
            />
          </td>
        </tr>
      );
    });

    // let isEmpty = rows.map(row => {
    //   if (row.RowLine.emptycell) {
    //     this.setState({
    //       emptycell: !this.state.emptycell
    //     });
    //   }
    // });

    return (
      <div>
        <table>
          <tr>
            <td>
              <RowLine hiddenRow player={this.props.player} />
            </td>
          </tr>
          {rows}
        </table>
      </div>
    );
  }
}

export default Board;
