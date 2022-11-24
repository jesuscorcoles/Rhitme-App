import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.scss';
import NavBar from "./Components/NavBar/NavBar";
import CompraEfectuada from "./Pages/Entradas/CompraEfectuada/CompraEfectuada";
import ComprarEntrada1 from "./Pages/Entradas/ComprarEntrada1/ComprarEntrada1";
import ComprarEntrada2 from "./Pages/Entradas/ComprarEntrada2/ComprarEntrada2";
import EventoSeleccionado from "./Pages/Entradas/EventoSeleccionado/EventoSeleccionado";
import MenuEntradaPage from "./Pages/Entradas/MenuEntradaPage/MenuEntradaPage";
import TicketDetail from "./Pages/Entradas/TicketDetail/TicketDetail";
import HomePage from './Pages/HomePage/HomePage';
import A4 from './Pages/Conciertos/A4/A4';
import ArtistasVinculados from './Pages/Conciertos/ArtistasVinculados/ArtistasVinculados';
import Bienvenido from "./Pages/Conciertos/Bienvenido/Bienvenido";
import MensajesAmigos from "./Pages/Conciertos/MensajesAmigos/MensajesAmigos";
import NotificacionOk from "./Pages/Conciertos/NotificacionOk/NotificacionOk";
import OnBoarding from "./Pages/Conciertos/OnBoarding/OnBoarding";
import OnBoarding2 from "./Pages/Conciertos/OnBoarding2/OnBoarding2";
import OnBoarding3 from "./Pages/Conciertos/OnBoarding3/OnBoarding3";
import Personalizacion from "./Pages/Conciertos/Personalizacion/Personalizacion";
import ProcesoSincronizacion from "./Pages/Conciertos/ProcesoSincronizacion/ProcesoSincronizacion";
import ProcesoSincronizacion2 from "./Pages/Conciertos/ProcesoSincronizacion2/ProcesoSincronizacion2";
import RegistroFanClub1 from "./Pages/Conciertos/RegistroFanClub1/RegistroFanClub1";
import RegistroFanClub2 from "./Pages/Conciertos/RegistroFanClub2/RegistroFanClub2";
import SincronizarStreaming from "./Pages/Conciertos/SincronizarStreaming/SincronizarStreaming";
import TourTickets from "./Pages/Conciertos/TourTickets/TourTickets";
import Conciertos from "./Pages/Entradas/Conciertos/Conciertos";

function App() {
  return (
    <Router>

      <div className='general'>
        <NavBar></NavBar>
       
        <Routes>
        
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/conciertos" element={<Conciertos></Conciertos>}></Route>
          <Route path="/entradas" element={<MenuEntradaPage></MenuEntradaPage>}></Route>
          <Route path="/eventoseleccionado" element={<EventoSeleccionado></EventoSeleccionado>}></Route>
          <Route path="/compraentrada1" element={<ComprarEntrada1></ComprarEntrada1>}></Route>
          <Route path="/compraentrada2" element={<ComprarEntrada2></ComprarEntrada2>}></Route>
          <Route path="/compraefectuada" element={<CompraEfectuada></CompraEfectuada>}></Route>
          <Route path="/ticketdetail" element={<TicketDetail></TicketDetail>}></Route>
          <Route path="/a4" element={<A4></A4>}></Route>
          <Route path="/artistasvinculados" element={<ArtistasVinculados></ArtistasVinculados>}></Route>
          <Route path="/bienvenido" element={<Bienvenido></Bienvenido>}></Route>
          <Route path="/mensajesamigos" element={<MensajesAmigos></MensajesAmigos>}></Route>
          <Route path="/notificacionOk" element={<NotificacionOk></NotificacionOk>}></Route>
          <Route path="/onboarding" element={<OnBoarding></OnBoarding>}></Route>
          <Route path="/onboarding2" element={<OnBoarding2></OnBoarding2>}></Route>
          <Route path="/onboarding3" element={<OnBoarding3></OnBoarding3>}></Route>
          <Route path="/personalizacion" element={<Personalizacion></Personalizacion>}></Route>
          <Route path="/procesosincronizacion" element={<ProcesoSincronizacion></ProcesoSincronizacion>}></Route>
          <Route path="/procesosincronizacion2" element={<ProcesoSincronizacion2></ProcesoSincronizacion2>}></Route>
          <Route path="/registrofanclub1" element={<RegistroFanClub1></RegistroFanClub1>}></Route>
          <Route path="/registrofanclub2" element={<RegistroFanClub2></RegistroFanClub2>}></Route>
          <Route path="/sincronizacionstreaming" element={<SincronizarStreaming></SincronizarStreaming>}></Route>
          <Route path="/tourtickets" element={<TourTickets></TourTickets>}></Route>

        </Routes>

          </div>

    </Router>

  );
}

export default App;