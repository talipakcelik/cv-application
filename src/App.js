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
        <main>
          <h3></h3>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Phone number"
            name="number"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Email"
            name="mail"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Position"
            name="position"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Company"
            name="company"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="University"
            name="university"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            onChange={this.handleChange}
          ></input>
        </main>
      </section>
    );
  }
}
