import React, { Component } from "react";

import Cell from "./Cell.js";

class RowLine extends Component {
  elements = [0, 1, 2, 3, 4, 5, 6];

  render() {
    let cells = this.elements.map(i => {
      return (
        <td>
          <Cell
            id={i}
            hiddenCell={this.props.hiddenRow}
            player={this.props.player}
            emptycell={this.props.emptycell}
          />
        </td>
      );
    });
    return (
      <div>
        <table>
          <tr>
            <td>
              <Cell
                id="9"
                hiddenCell={this.props.hiddenRow}
                player={this.props.player}
              />
            </td>
            {cells}
          </tr>
        </table>
      </div>
    );
  }
}

export default RowLine;
