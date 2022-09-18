import "./App.scss";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Simulation from "./components/Simulation";

function App() {
  return (
    <div className="App">
      <Nav />
      <Simulation />
      <About />
      <Projects />
    </div>
  );
}

export default App;
