import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/Reposlist";


function App() {
  const[formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  const [nomeUsuario, setNomeUsario] = useState('')

  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsario(e.target.value)} />
    
    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

    {/* {formularioEstaVisivel && (
      <Formulario />
    )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle form</button> */}
    </>
  )
}

export default App