import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.scss';
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <Router>

      <div>
        <div>

        <NavBar></NavBar>
      

        <Routes>

        <Route exact path="/"></Route>

        </Routes>

      </div>
          </div>

    </Router>
  );
}

export default App;
