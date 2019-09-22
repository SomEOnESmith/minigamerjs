import React, { Component } from "react";

class Cell extends Component {
  // hiddenCell = () => {
  //   // this.setState({});
  //   return this.props.hiddenCell ? (
  //     <img src={red} alt="" height="50px" />
  //   ) : (
  //     <img src={yellow} alt="" height="50px" />
  //   );
  // };

  render() {
    return (
      <td>
        <button onClick={() => this.props.changeState(this.props.cell)}>
          {this.props.changeCell(this.props.cell)}
        </button>
      </td>
    );
  }
}
export default Cell;
