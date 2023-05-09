import { useEffect, useState } from "react";
// import fruits from '../data/fruits';
import { v4 as uuid } from "uuid";
import FruitPreview from "./FruitPreview";
import Fruit from "../models/Fruit";

import "./FruitsMaster.css";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fruits.shrp.dev",
  timeout: 3000,
  headers: {},
});

function FruitsMaster() {
  const [fruits, setFruits] = useState([]); //par défaut la liste de fruits est vide
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [needToReload, setNeedToReload] = useState(false);

  function onLoadData() {
    setNeedToReload(needToReload ? false : true); //déclenche l'exécution de useEffect
  }

  useEffect(() => {
    async function fetchFruitsFromAPI() {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/items/fruits");
        const collectionOfFruitItems = response.data.data.map(
          (jsonItem) => new Fruit(jsonItem.name, jsonItem.color, jsonItem.image)
        );
        setFruits(collectionOfFruitItems);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }

    fetchFruitsFromAPI();
  }, [needToReload]);
  //on indique que useEffect a une dépendance à needToReload
  //-> si needToReload évolue, useEffect doit être appelé

  return (
    <div className="FruitsMaster">
      <button onClick={() => onLoadData()}>Recharger les données</button>
      {loading === true && <p>Chargement...</p>}
      {error === true && <p>Une erreur s'est produite</p>}
      <div className="FruitsContainer">
        {fruits.map((fruit) => (
          <FruitPreview key={uuid()} fruit={fruit} />
        ))}
      </div>
    </div>
  );
}

export default FruitsMaster;
