import {useEffect, useState} from "react";
import {updateCar} from "../../services/car.service";


export function CarUpdateForm({carForUpdate, setKeyUpdateData}) {
    const [formState, setFormState] = useState({id: '', model: '', price: '', year: ''});

    useEffect(() => {
        setFormState(carForUpdate);
    }, [carForUpdate]);

    function onChangeFormState({target: {name, value}}) {
         if (
             formState.id !== '' &&
             formState.id !== 'Choose car info for update'
         ) {

            if (name === 'model' && value !== '') {
                value = value.substring(0, 20)
                    .match(/[A-Za-zА-Яа-я]+/g) || '';
            }

            if (name === 'price' && value !== '') {
                value = value.substring(0, 9)
                    .match(/[0-9]+/g) || '';
            }

            if (name === 'year' && value !== '') {
                value = value.substring(0, 4)
                    .match(/[0-9]+/g) || '';
            }

            if (Array.isArray(value) === true) {
                value = value.reduce((sum, item) => sum += item);
            }

            setFormState({...formState, [name]: value});
        }
    }

    function saveFormData(event) {
        event.preventDefault();

        if (
            formState.id === '' ||
            formState.id === 'Choose car info for update'
        ) {
            setFormState({...formState, id: 'Choose car info for update'});
            return;
        }

        let {model, price, year} = formState;

        if (
            model === '' ||
            model.substring(0,13) === 'Inputcarmodel'
        ) {
            model = 'Input car model';
        }

        if (price === '') {
            price = 'Input car price';
        }

        if (
            year === '' ||
            year === 'Input car year' ||
            year === 'Car year must be between 1991 and 2021'
        ) {
            year = 'Input car year';
        } else {
            if (year < '1991' || year > '2021') {
                year = 'Car year must be between 1991 and 2021';
            }
        }

        if (
            formState.model === model &&
            formState.price === price &&
            formState.year === year &&

            formState.model !== 'Input car model' &&
            formState.price !== 'Input car price' &&
            formState.year !== 'Input car year' &&
            formState.year !== 'Car year must be between 1991 and 2021' &&

            (
                formState.model !== carForUpdate.model ||
                formState.price !== carForUpdate.price ||
                formState.year !== carForUpdate.year
            )
        ) {
            updateCar(formState).then(({data}) => {
                console.log('Update car info', data);
                setKeyUpdateData(data);
            });
        } else {
            setFormState({...formState, model, price, year});
        }
    }

    return (
        <div className={'form-wrap'}>
            <form>
                <div className={'inputs'}>
                    <div>
                        <p>Id</p>
                        <input type={'text'} name={'id'} value={formState.id}/>
                    </div>

                    <div>
                        <p>Model</p>
                        <input type={'text'} name={'model'} value={formState.model} onChange={onChangeFormState}/>
                    </div>

                    <div>
                        <p>Price</p>
                        <input type={'text'} name={'price'} value={formState.price} onChange={onChangeFormState}/>
                    </div>

                    <div>
                        <p>Year</p>
                        <input type={'text'} name={'year'} value={formState.year} onChange={onChangeFormState}/>
                    </div>
                </div>

                <div className={'button'}>
                    <input type={'button'} value={'Update car info'} onClick={saveFormData}/>
                </div>
            </form>
        </div>
    );
}