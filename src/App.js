import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Legendary Andy";
  function customStyle() {}
  function greating(name) {
    if (name) {
      return <h1 style={customStyle()}>Hello {name}</h1>;
    } else {
      return <h1 style={customStyle()}>Hello stranger</h1>;
    }
  }
  return (
    <div className="App">
      <header className="App-header">{greating(name)}</header>
    </div>
  );
}

export default App;
