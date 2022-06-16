import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default class App extends React.Component {
  state = {
    selectedTab: "edit",
  };

  switchTab = () => {
    this.setState({
      selectedTab: this.state.selectedTab === "edit" ? "preview" : "edit",
    });
  };

  render() {
    console.log(this.state);
    return (
      <main>
        <header>
          <button onClick={this.switchTab}>
            {this.state.selectedTab === "edit" ? "Preview Mode" : "Edit Mode"}
          </button>
        </header>
        <div
          className={
            this.state.selectedTab === "edit"
              ? "edit-container"
              : "preview-container"
          }
        >
          <Personal state={this.state} />
          <Education state={this.state} />
          <Experience state={this.state} />
        </div>
      </main>
    );
  }
}
