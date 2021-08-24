import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import {Car} from "../car/Car";

import './Cars.css';


export function Cars({ip}) {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        setCars([]);
        getCars().then(({data}) => setCars([...data.reverse()]));
    }, [ip]);

    return (
        <div className={'cars'}>
            {
                cars && cars.map(item => <Car car={item} key={item.id}/>)
            }
        </div>
    );
}