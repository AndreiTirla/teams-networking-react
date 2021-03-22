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
    console.warn("mount");
    setTimeout(() => {
      console.warn("loaded");
      this.setState({
        persons: [
          {
            id: "a123",
            firstName: "Tirla",
            lastName: "Andrei",
            gitHub: "AndreiTirla",
          },
          {
            id: "b654",
            firstName: "Nicolae",
            lastName: "Matei",
            gitHub: "nmatei",
          },
        ],
      });
    }, 2000);
  }

  render() {
    console.debug(this.state.persons);
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <PersonsTable persons={this.state.persons} border={1} />
      </div>
    );
  }
}

export default App;
