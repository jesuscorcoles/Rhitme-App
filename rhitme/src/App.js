import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.scss';
import NavBar from "./Components/NavBar/NavBar";
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <Router>

      <div className='general'>
        <div>

        <NavBar></NavBar>
        <HomePage></HomePage>

        <Routes>

        <Route exact path="/"></Route>

        </Routes>

      </div>
          </div>

    </Router>

  );
}

export default App;