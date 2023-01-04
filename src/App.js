import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
function App() {
  const results = [
    {
      title: "component to rerender without calling setState?",
      description:
        "observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
      vote: 2000,
      answers: 32,
    },
    {
      title: "force a React component to rerender without calling setState?",
      description:
        "(to the component), observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
      vote: 100,
      answers: 2,
    },
    {
      title: "rerender without calling setState?",
      description:
        "that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
      vote: 20,
      answers: 3,
    },
  ];
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
