import {useState} from "react";
import './carDataForm.css';
import {saveCar} from "../../services/car.service";

export function CarDataForm({checkSaveR, setDataForEdit}) {

    const [formState, setFormState] = useState({model: '', price: '', year: ''});

    const onChangeInput = ({target: {value, name}}) => {
        if (
            (name === 'model' && value.length <= 20) ||
            (name === 'price' && value >= 0) ||
            (name === 'year' && value >= 0 && value.length <= 4)
        ) {
            setFormState({...formState, [name]: value});
            setDataForEdit({...formState, [name]: value});
        }
    }

    const saveFormData = (event) => {
        event.preventDefault();

        if (formState.year < 1991 || formState.year > 2021) {
            setFormState({...formState, year: 'year should be between 1991 and 2021'});
        } else {

            saveCar(formState).then((json) => {
                console.log(json);

                checkSaveR(json);
            });
        }
    }

    return (
        <div>
            <div className={'form-wrap'}>
                <h2>Car info</h2>
                <form onSubmit={saveFormData} className={'form'}>
                    <div className={'input-wrap'}>
                        <div className={'input'}>
                            <p>Model</p>
                            <input type={'text'} name={'model'} value={formState.model} onChange={onChangeInput}/>
                        </div>

                        <div className={'input'}>
                            <p>Price</p>
                            <input type={'text'} name={'price'} value={formState.price} onChange={onChangeInput}/>
                        </div>

                        <div className={'input'}>
                            <p>Year</p>
                            <input type={'text'} name={'year'} value={formState.year} onChange={onChangeInput}/>
                        </div>
                    </div>

                    <div className={'button'}>
                        <input type="submit" value={'Save car info'}/>
                    </div>
                </form>

            </div>
        </div>
    );
}