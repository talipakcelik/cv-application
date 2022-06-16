import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";

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
        <Personal state={this.state} handle={this.handleChange} />
        <Education state={this.state} handle={this.handleChange} />
        <Experience state={this.state} handle={this.handleChange} />
      </section>
    );
  }
}
