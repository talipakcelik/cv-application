import React from "react";

export default class App extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
    number: "",
    mail: "",
    description: "",
    position: "",
    company: "",
    city: "",
    university: "",
    degree: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <section>
        <header>Cv Project</header>
        <form>
          <h3>Personal Information</h3>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          ></input>
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          ></input>
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={this.handleChange}
            value={this.state.address}
          ></input>
          <input
            type="text"
            placeholder="Phone number"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
          ></input>
          <input
            type="text"
            placeholder="Email"
            name="mail"
            onChange={this.handleChange}
            value={this.state.mail}
          ></input>
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          ></input>
          <h3>Education</h3>
          <input
            type="text"
            placeholder="University"
            name="university"
            onChange={this.handleChange}
            value={this.state.university}
          ></input>
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            onChange={this.handleChange}
            value={this.state.degree}
          ></input>
          <h3>Experience</h3>
          <input
            type="text"
            placeholder="Position"
            name="position"
            onChange={this.handleChange}
            value={this.state.position}
          ></input>
          <input
            type="text"
            placeholder="Company"
            name="company"
            onChange={this.handleChange}
            value={this.state.company}
          ></input>
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={this.handleChange}
            value={this.state.city}
          ></input>
        </form>
      </section>
    );
  }
}
