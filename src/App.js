import './App.css';
import FruitsMaster from "./components/FruitsMaster";
import react, { useState } from "react";

function App() {

  const [displayList, setDisplayList] = useState(false);
  //par défaut displayList a la valeur false
  //donc on cache la liste

  function onClick() {
    setDisplayList(displayList ? false : true);
    //condition ternaire
  }

  return (
    <div className="App">
      <button onClick={()=>onClick()}>Afficher / Masquer</button>
      
      {/* {displayList && <FruitsMaster />}
      {!displayList && <p>Pas de fruit</p>} */}

      {displayList ? <FruitsMaster/> : <p>Pas de fruit</p> }

    </div>
  );
}

export default App;
