import React from "react";

export default class Education extends React.Component {
  state = {
    university: "",
    degree: "",
  };

  handle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form>
        <h3>Education</h3>
        <input
          type="text"
          placeholder="University"
          name="university"
          onChange={this.handle}
          value={this.state.university}
        ></input>
        <input
          type="text"
          placeholder="Degree"
          name="degree"
          onChange={this.handle}
          value={this.state.degree}
        ></input>
      </form>
    );
  }
}
