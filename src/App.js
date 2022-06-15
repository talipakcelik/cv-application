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
    console.log(this.state);
    return (
      <section>
        <header>Cv Project</header>
        <main>
          <h3></h3>
          <input
            type="text"
            placeholder="firstName"
            name="firstName"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="lastName"
            name="lastName"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="address"
            name="address"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="number"
            name="number"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="mail"
            name="mail"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="position"
            name="position"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="company"
            name="company"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="city"
            name="city"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="university"
            name="university"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="degree"
            name="degree"
            onChange={this.handleChange}
          ></input>
        </main>
      </section>
    );
  }
}
