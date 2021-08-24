import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";

import './CarSelect.css';


export function CarSelect({ip, setCarForUpdate, keyUpdateData}) {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        setCars([]);
        setCarForUpdate({id: '', model: '', price: '', year: ''});
        getCars().then(({data}) => setCars([...data.reverse()]));
    }, [ip, keyUpdateData]);

    function chooseCar({target: {value}}) {
        if (value !== 'Choose car info for update') {
            setCarForUpdate(cars[value]);
        } else {
            setCarForUpdate({id: '', model: '', price: '', year: ''});
        }
    }

    return (
        <div className={'car-select'}>
            <div>
                <select name={'carSelect'} onChange={chooseCar}>
                    <option>Choose car info for update</option>
                    {
                        cars && cars.map((item, index) => <option key={index} value={index}>
                            id: {item.id},
                            model: {item.model},
                            price: {item.price},
                            year: {item.year}
                        </option>)
                    }
                </select>
            </div>
        </div>
    );
}