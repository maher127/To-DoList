import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handelchange, handelSubmit } = this.props;
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-primary text-white"
                id="basic-addon1"
              >
                <i className="fas fa-book"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add to do items"
              value={item}
              onChange={handelchange}
            />
          </div>
          <button
            onClick={handelSubmit}
            type="submit"
            className="btn btn-block btn-primary"
          >
            Add item
          </button>
        </form>
      </div>
    );
  }
}
