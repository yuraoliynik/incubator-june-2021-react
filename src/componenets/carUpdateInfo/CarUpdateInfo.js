import {useState} from "react";

import {CarSelect} from "../carSelect/CarSelect";
import {CarUpdateForm} from "../carUpdateForm/CarUpdateForm";

import './CarUpdateInfo.css';


export function CarUpdateInfo({ip}) {
    const [carForUpdate, setCarForUpdate] = useState({id: '', model: '', price: '', year: ''});
    const [keyUpdateData, setKeyUpdateData] = useState({});

    return (
        <div className={'car-update-info'}>
            <CarSelect ip={ip} setCarForUpdate={setCarForUpdate} keyUpdateData={keyUpdateData}/>

            <CarUpdateForm carForUpdate={carForUpdate} setKeyUpdateData={setKeyUpdateData}/>
        </div>
    );
}