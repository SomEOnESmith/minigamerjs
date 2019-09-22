import React, { Component } from "react";

import Cell from "./Cell.js";

class RowLine extends Component {
  render() {
    let cells = this.props.row.map(cell => {
      return (
        <Cell
          key={cell.id}
          cell={cell}
          changeCell={this.props.changeCell}
          changeState={this.props.changeState}
        />
      );
    });
    return (
      <div>
        <table>
          <tbody>
            <tr>{cells}</tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default RowLine;
