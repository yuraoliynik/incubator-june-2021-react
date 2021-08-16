import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import {Car} from "../car/Car";
import './Cars.css';

export function Cars({checkSave}) {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars([...value.reverse()]));
    },[checkSave]);

    return (
        <div className={'cars'}>
            <h2>Saved cars</h2>
            {
                cars && cars.map(value => <Car item={value} key={value.id}/>)
            }
        </div>
    );
}