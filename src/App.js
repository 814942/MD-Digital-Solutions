import { Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Rtwo from "./components/R2/Rtwo";
import Rthree from "./components/R3/Rthree";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route exact path="/R2" component={Rtwo} />
      <Route exact path="/R3" component={Rthree} />
    </div>
  );
}

export default App;
