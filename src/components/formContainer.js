import React, { Component } from "react";

class FormContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form-container" onSubmit={e => e.preventDefault()}>
        <div>
          <input
            className="input-field"
            placeholder={"Task Description"}
            value={this.props.currentInput}
            onChange={e => {
              this.props.dispatch({
                type: "ADD_CURRENT_INPUT",
                data: e.target.value
              })
            }}
          />
        </div>
        <div>
          <button
            className="add-task-btn"
            onClick={() => {
              this.props.dispatch({
                type: "ADD_CURRENT_INPUT_TO_LIST",
                data: this.props.currentInput
              })
            }}
          >
            {"Add Task"}
          </button>
        </div>
      </form>
    );
  }
}

export default FormContainer;
