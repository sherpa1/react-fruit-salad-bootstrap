import react, { useEffect, useState } from 'react';
// import fruits from '../data/fruits';
import { v4 as uuid } from 'uuid';
import FruitPreview from './FruitPreview';
import Fruit from  '../models/Fruit';

import axios from "axios";

const axiosIntance = axios.create({
  baseURL: 'https://fruits.shrp.dev',
  timeout: 1000,
  headers: {}
});

function FruitsMaster() {

    const [fruits, setFruits] = useState([]);//par défaut la liste de fruits est vide
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchFruitsFromAPI() {
            try {
                setLoading(true);
                const response = await axiosIntance.get("/items/fruits");
                const collectionOfFruitItems = response.data.data.map(jsonItem => new Fruit(jsonItem.name,jsonItem.color,jsonItem.image));
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
    }, []);

    return (
        <div className="FruitsMaster">
            <div>
                {loading && <p>Chargement...</p>}
                {error && <p>Une erreur s'est produite :(</p>}
                {fruits.map(fruit => <FruitPreview key={uuid()} fruit={fruit}/>)}
            </div>
        </div>
    );
}

export default FruitsMaster;