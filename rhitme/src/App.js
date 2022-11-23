import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.scss';
import NavBar from "./Components/NavBar/NavBar";
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <Router>

      <div>
        <div>

        <NavBar></NavBar>
      

        <Routes>

        <Route exact path="/"><HomePage></HomePage></Route>

        </Routes>

      </div>
          </div>

    </Router>

  );
}

export default App;