import {useState} from "react";
import {CarAddForm} from "./components/carAddForm/carAddForm";
import {Cars} from "./components/cars/Cars";
import './App.css';

export default function App() {

    const [checkSave, setCheckSave] = useState(null);

    const checkDataSave = (json) => {
        setCheckSave(json);
    };

    return (
        <div>
            <CarAddForm checkDataSave={checkDataSave}/>

            <div>
                {
                    checkSave && <Cars checkSave={checkSave}/>
                }
            </div>
        </div>
    );
}