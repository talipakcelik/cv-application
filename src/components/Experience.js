import React from "react";

export default class Experience extends React.Component {
  state = {
    position: "",
    company: "",
    city: "",
  };

  handle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.props.state.selectedTab === "edit" ? (
          <form>
            <h3>Experience</h3>
            <input
              type="text"
              placeholder="Position"
              name="position"
              onChange={this.handle}
              value={this.state.position}
            ></input>
            <input
              type="text"
              placeholder="Company"
              name="company"
              onChange={this.handle}
              value={this.state.company}
            ></input>
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={this.handle}
              value={this.state.city}
            ></input>
          </form>
        ) : (
          <div>
            <h3>Experience</h3>
            <p>{this.state.position}</p>
            <p>{this.state.company}</p>
            <p>{this.state.city}</p>
          </div>
        )}
      </div>
    );
  }
}
