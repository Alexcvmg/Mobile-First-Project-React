import "@fontsource/roboto";
import "./App.css";
import AppBar from './Header/AppBar';
import Banner from './Banner/Banner';
import Descricao from './Descricao/Descricao';
import Importante from './AreaImportante/Importante';
import Conheca from './Conheca/Conheca';
import Formulario from "./Formulario/Formularios";
import Rodape from './Rodape/Rodape';

export default function App() {
  return(
    <main>
      <AppBar/>
      <Banner/>
      <Conheca/>
      <Descricao/>
      <Importante/>
      <Formulario/>
      <Rodape/>
    </main>
  ) 
}
     

