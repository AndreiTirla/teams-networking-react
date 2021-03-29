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
          person.id = r.id;
          this.props.dispatch({
            type: "TEAM_ADDED",
            person,
          });
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

const mapStateToProps = (state) => ({
  teams: state.teams,
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
