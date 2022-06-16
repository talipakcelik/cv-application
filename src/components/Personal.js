import React from "react";

export default class Personal extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
    number: "",
    mail: "",
    description: "",
  };

  handle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <form>
        <h3>Personal Information</h3>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={this.handle}
          value={this.state.firstName}
        ></input>
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={this.handle}
          value={this.state.lastName}
        ></input>
        <input
          type="text"
          placeholder="Address"
          name="address"
          onChange={this.handle}
          value={this.state.address}
        ></input>
        <input
          type="text"
          placeholder="Phone number"
          name="number"
          onChange={this.handle}
          value={this.state.number}
        ></input>
        <input
          type="text"
          placeholder="Email"
          name="mail"
          onChange={this.handle}
          value={this.statemail}
        ></input>
        <input
          type="text"
          placeholder="Description"
          name="description"
          onChange={this.handle}
          value={this.state.description}
        ></input>
      </form>
    );
  }
}
