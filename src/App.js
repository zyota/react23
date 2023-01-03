import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
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
      <Header />
      <div className="App-header">{greating(name)}</div>
      <Footer />
    </div>
  );
}

export default App;
