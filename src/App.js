import { Component } from "react";
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

  load() {
    fetch("http://localhost:3000/teams-json")
      .then((r) => r.json())
      .then((persons) => {
        this.setState({
          persons: persons,
        });
      });
  }

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
    console.debug(this.state.persons);
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <PersonsTable
          persons={this.state.persons}
          border={1}
          onSubmit={(person) => {
            this.add(person);
          }}
        />
      </div>
    );
  }
}

export default App;
