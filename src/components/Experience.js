import React from "react";

export default class Experience extends React.Component {
  render() {
    return (
      <form>
        <h3>Experience</h3>
        <input
          type="text"
          placeholder="Position"
          name="position"
          onChange={this.props.handle}
          value={this.props.state.position}
        ></input>
        <input
          type="text"
          placeholder="Company"
          name="company"
          onChange={this.props.handle}
          value={this.props.state.company}
        ></input>
        <input
          type="text"
          placeholder="City"
          name="city"
          onChange={this.props.handle}
          value={this.props.state.city}
        ></input>
      </form>
    );
  }
}
