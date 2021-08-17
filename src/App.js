import {CarDataForm} from "./components/carDataForm/carDataForm";
import {Cars} from "./components/cars/Cars";
import './App.css';
import {useState} from "react";

export default function App() {

    const [checkSave, setCheckSave] = useState({});
    const [dataForEdit, setDataForEdit] = useState({model: '', price: '', year: ''});

    const checkSaveR = (carObj) => {
        setCheckSave({...carObj});
    };

    return (
        <div>
            <CarDataForm checkSaveR={checkSaveR} setDataForEdit={setDataForEdit}/>
            <Cars checkSaveR={checkSaveR} checkSave={checkSave} dataForEdit={dataForEdit}/>
        </div>
    );
}