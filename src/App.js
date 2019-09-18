import React, { Component } from "react";
import "./App.css";
import ToDoInput from "./Components/ToDoInput";
import ToDoList from "./Components/ToDoList";
import "bootstrap/dist/css/bootstrap.css";
import uuid from "uuid";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handelchange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      item: "",
      id: uuid(),
      chcked: false
    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  chcked = () => {
    this.setState({
      chcked: true
    });
  };
  handelDelet = id => {
    const filtreItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filtreItems
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">to do input</h3>
            <ToDoInput
              item={this.state.item}
              handelchange={this.handelchange}
              handelSubmit={this.handelSubmit}
            />
            <ToDoList
              items={this.state.items}
              clearList={this.clearList}
              handelDelet={this.handelDelet}
            />
          </div>
        </div>
      </div>
    );
  }
}
