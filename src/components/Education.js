import React from "react";

export default class Education extends React.Component {
  render() {
    return (
      <form>
        <h3>Education</h3>
        <input
          type="text"
          placeholder="University"
          name="university"
          onChange={this.props.handle}
          value={this.props.state.university}
        ></input>
        <input
          type="text"
          placeholder="Degree"
          name="degree"
          onChange={this.props.handle}
          value={this.props.state.degree}
        ></input>
      </form>
    );
  }
}
