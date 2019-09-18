import React, { Component } from "react";
import ToDoItems from "./ToDoItems";

export default class ToDoList extends Component {
  render() {
    const { items, clearList, handelDelet } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-center text-capitalize">to do list</h3>
        {items.map(item => {
          return (
            <ToDoItems
              key={item.id}
              title={item.title}
              handelDelet={() => handelDelet(item.id)}
            />
          );
        })}
        <button
          className="text-capitalize btn btn-danger mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
