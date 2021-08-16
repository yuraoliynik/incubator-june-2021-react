import {useState} from "react";
import {seveCar} from '../../services/car.service';
import './carAddForm.css';

export function CarAddForm({checkDataSave}) {

    // const [model, setModel] = useState('');
    // const [price, setPrice] = useState('');
    // const [year, setYear] = useState('');
    //
    // const onChangeModel = (event) => {
    //     if (event.target.value.length <= 20) {
    //         setModel(event.target.value);
    //     }
    // }
    //
    // const onChangePrice = (event) => {
    //     if (event.target.value >= 0) {
    //         setPrice(event.target.value);
    //     }
    // }
    //
    // const onChangeYear = (event) => {
    //     if (event.target.value >= 0 && event.target.value.length <= 4) {
    //         setYear(event.target.value);
    //     }
    // }

    const [formState, setFormState] = useState({model: '', price: '', year: ''});

    const onChangeInput = (event) => {
        if (
            (event.target.name === 'model' && event.target.value.length <= 20) ||
            (event.target.name === 'price' && event.target.value >= 0) ||
            (event.target.name === 'year' && event.target.value >= 0 && event.target.value.length <= 4)
        ) {
            setFormState({...formState, [event.target.name]: event.target.value});
        }
    }


    const saveFormData = (event) => {
        event.preventDefault();

        // if (event.target.year.value < 1991 || event.target.year.value > 2021) {
        //     setYear('year should be between 1991 and 2021');
        // } else {
        //     const car = {
        //         model: model,
        //         price: price,
        //         year: year
        //     }
        //
        //     seveCar(car);
        // }

        if (formState.year < 1991 || formState.year > 2021) {
            setFormState({...formState, year: 'year should be between 1991 and 2021'});
        } else {
            seveCar(formState).then((json) => {
                console.log(json);

                checkDataSave(json);
            });

        }
    }

    return (
        <div>
            <div className={'form-wrap'}>
                <h2>New car data</h2>
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
                        <input type="submit"/>
                    </div>
                </form>

            </div>
        </div>
    );
}