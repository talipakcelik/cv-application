import React from "react";

export default class Personal extends React.Component {
  render() {
    console.log(this.props);
    return (
      <form>
        <h3>Personal Information</h3>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={this.props.handle}
          value={this.props.state.firstName}
        ></input>
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={this.props.handle}
          value={this.props.state.lastName}
        ></input>
        <input
          type="text"
          placeholder="Address"
          name="address"
          onChange={this.props.handle}
          value={this.props.state.address}
        ></input>
        <input
          type="text"
          placeholder="Phone number"
          name="number"
          onChange={this.props.handle}
          value={this.props.state.number}
        ></input>
        <input
          type="text"
          placeholder="Email"
          name="mail"
          onChange={this.props.handle}
          value={this.props.state.mail}
        ></input>
        <input
          type="text"
          placeholder="Description"
          name="description"
          onChange={this.props.handle}
          value={this.props.state.description}
        ></input>
      </form>
    );
  }
}
