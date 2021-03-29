import { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { PersonsTable } from "./PersonsTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
    console.warn("props", props);
  }

  componentDidMount() {
    this.load();
  }

  load() {}

  add(person) {
    console.warn("team", person);

    fetch("http://localhost:3000/teams-json/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    })
      .then((res) => res.json())
      .then((r) => {
        console.warn(r);
        if (r.success) {
          this.load();
        }
      });
  }

  render() {
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <PersonsTable
          persons={this.props.teams}
          border={1}
          onSubmit={(person) => {
            this.add(person);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
  };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
