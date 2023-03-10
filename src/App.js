import logo from './logo.svg';
import './App.css';
import Reto3 from './components/Reto3';

  function App()
  {
    return(
      <div className="App">
        <Reto3 
        cimg="comida"
        titulo="Comida Rapida"
        texto="La comida es una manera de compartir"
        imgt="icon-ethereum"
        texto2="0.041 ETH"
        imgt2="icon-clock"
        texto3="5 days left"
        imgp="image-avatar"
        t1="Creation of"
        t2="Tomas v"
      />

      <Reto3 
        cimg="perro"
        titulo="Profesor"
        texto="Doy clases de filosofia"
        imgt="icon-ethereum"
        texto2="0.041 ETH"
        imgt2="icon-clock"
        texto3="10 days left"
        imgp="image-avatar"
        t1="Creation of"
        t2="Daniel R"
      />

      <Reto3 
        cimg="wanda"
        titulo="Diseñadora Grafica"
        texto="Espero entregarte diseños que te hagan feliz"
        imgt="icon-ethereum"
        texto2="0.041 ETH"
        imgt2="icon-clock"
        texto3="10 days left"
        imgp="image-avatar"
        t1="Creation of"
        t2="Ellie c"
      />
    </div> 
    )
  }


export default App;