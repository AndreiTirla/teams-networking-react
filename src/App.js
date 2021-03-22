import "./App.css";
import { PersonsTable } from "./PersonsTable";

let persons = [
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
];

function App() {
  return (
    <div>
      <h1>Teams Networking</h1>
      <div>Search</div>
      <PersonsTable persons={persons} border={1} />
    </div>
  );
}

export default App;
