import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponentes } from "./EventosComponentes";

function App() {

  const ficha_med = {
    altura : "187 cm",
    grupo : "H+",
    estado : "Bueno",
    alergias : "Ninguna"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              {/*cargar primer componente*/}
          <MiComponente />
          <SegundoComponente/>
          <TercerComponente
          nombre="Miguel"
          apellido="Miranda"
          ficha= {ficha_med}
          />
          <EventosComponentes/>
      </header>


    </div>
  );
}

export default App;