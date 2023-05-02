import fruits from '../data/fruits';
import { v4 as uuid } from 'uuid';
import FruitPreview from './FruitPreview';

import axios from "axios";

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

function FruitsMaster() {

    return (
        <div className="FruitsMaster">
            <div>
                {fruits.map(fruit => <FruitPreview key={uuid()} fruit={fruit}/>)}
            </div>
        </div>
    );
}

export default FruitsMaster;