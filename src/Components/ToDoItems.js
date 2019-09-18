import React, { Component } from "react";

export default class ToDoItems extends Component {
  state = {
    done: false
  };
  checked = () => {
    this.setState({ done: !this.state.done });
  };
  render() {
    const { title, handelDelet } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6 className={this.state.done && "line"}>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success spa">
            <i onClick={this.checked} className="fas fa-check chcked"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handelDelet}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
