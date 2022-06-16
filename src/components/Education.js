import React from "react";

export default class Education extends React.Component {
  state = {
    university: "",
    degree: "",
    from: "",
    to: "",
  };

  handle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        {this.props.state.selectedTab === "edit" ? (
          <form>
            <h3>Education</h3>
            <input
              type="text"
              placeholder="University"
              name="university"
              onChange={this.handle}
              value={this.state.university}
            ></input>
            <input
              type="text"
              placeholder="Degree"
              name="degree"
              onChange={this.handle}
              value={this.state.degree}
            ></input>{" "}
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
            <h3>Education</h3>
            <p>{this.state.university}</p>
            <p>{this.state.degree}</p>
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
