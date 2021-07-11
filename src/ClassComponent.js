import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickedButton() {
    this.setState({ count: this.state.count + 1 });
    console.log("Clicked!");
  }
  render() {
    return (
      <div>
        <p>Number of times clicked: {this.state.count}</p>
        <button
          className="btn btn-primary"
          onClick={() => this.clickedButton()}
        >
          Click me!
        </button>
      </div>
    );
  }
}
