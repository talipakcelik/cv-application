import React from "react";

export default class Experience extends React.Component {
  state = {
    position: "",
    company: "",
    city: "",
    from: "",
    to: "",
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
            <input
              type="text"
              placeholder="From"
              name="from"
              onChange={this.handle}
              value={this.state.from}
            ></input>{" "}
            <input
              type="text"
              placeholder="To"
              name="to"
              onChange={this.handle}
              value={this.state.to}
            ></input>
          </form>
        ) : (
          <div className="preview-container">
            <h3>Experience</h3>
            <p>{this.state.position}</p>
            <p>{this.state.company}</p>
            <p>{this.state.city}</p>
            <p>
              {this.state.from}
              {this.state.to}
            </p>
          </div>
        )}
      </div>
    );
  }
}
