import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import {Car} from "../car/Car";

export function Cars({myKey}) {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(({data}) => {
            switch (myKey) {
                case 'odd':
                    setCars(
                        data.filter(item => item.model.length % 2 !== 0)
                    );
                    break;

                case 'even':
                    setCars(
                        data.filter(item => item.model.length % 2 === 0)
                    );
                    break;

                default:
                    setCars(data);
            }
        });
    }, []);

    return (
        <div>
            {
                cars && cars.map(item =>
                    <div>
                        <Car item={item} key={item.id}/>
                    </div>
                )
            }
        </div>
    );
}