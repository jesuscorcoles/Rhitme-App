import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.scss';
// import NavBar from "./Components/NavBar/NavBar";
import CompraEfectuada from "./Pages/Entradas/CompraEfectuada/CompraEfectuada";
import ComprarEntrada1 from "./Pages/Entradas/ComprarEntrada1/ComprarEntrada1";
import ComprarEntrada2 from "./Pages/Entradas/ComprarEntrada2/ComprarEntrada2";
import EventoSeleccionado from "./Pages/Entradas/EventoSeleccionado/EventoSeleccionado";
import MenuEntradaPage from "./Pages/Entradas/MenuEntradaPage/MenuEntradaPage";
import TicketDetail from "./Pages/Entradas/TicketDetail/TicketDetail";
import HomePage from './Pages/HomePage/HomePage';

import Bienvenido from "./Pages/Conciertos/Bienvenido/Bienvenido";
import Conciertos from "./Pages/Entradas/Conciertos/Conciertos";
import SearchPage from "./Pages/SearchPage/SearchPage";
import MyConcertsPage from "./Pages/MyConcertsPage/MyConcertsPage";
import ConfigurationPage from "./Pages/ConfigurationPage/ConfigurationPage";

//hecho durante register/login
import LoginPage from "./Pages/LoginPage/LoginPage";
import { JwtContext } from './shared/contexts/JwtContext';
import React, { useState } from 'react';
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import AuthButton from "./shared/components/AuthButton/AuthButton";
// import RequireAuth from "./shared/components/RequireAuth/RequireAuth";



function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <Router>

        <div className='general'>
          {/* <NavBar></NavBar> */}


          <AuthButton/>
            {/* recordar poner requireauthn en paginas necesario logueo */}
            <Routes>
              <Route path="/registerpage" element={<RegisterPage></RegisterPage>}></Route>
              <Route path="/loginpage" element={<LoginPage></LoginPage>}></Route>

              {/* <Route path="/profile" element={<RequireAuth><HomePage/></RequireAuth>}/> EJEMPLO AUTH */}

              {/* <Route path="/" element={<RequireAuth><HomePage/></RequireAuth>}></Route> */}
              
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/myconcerts" element={<MyConcertsPage></MyConcertsPage>}></Route>
              <Route path="/configuration" element={<ConfigurationPage></ConfigurationPage>}></Route>
              <Route path="/conciertos" element={<Conciertos></Conciertos>}></Route>
              
              <Route path="/entradas" element={<MenuEntradaPage></MenuEntradaPage>}></Route>
              <Route path="/entradas/:id" element={<EventoSeleccionado></EventoSeleccionado>}></Route>
              <Route path="/comprarentradas1/:id" element={<ComprarEntrada1></ComprarEntrada1>}></Route>

              <Route path="/comprarentrada2" element={<ComprarEntrada2></ComprarEntrada2>}></Route>
              <Route path="/compraefectuada" element={<CompraEfectuada></CompraEfectuada>}></Route>
              <Route path="/ticketdetail" element={<TicketDetail></TicketDetail>}></Route>


              <Route path="/bienvenido" element={<Bienvenido></Bienvenido>}></Route>



             

            </Routes>

            </div>

      </Router>
    </JwtContext.Provider>
  );
}

export default App;