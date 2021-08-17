import {deleteCar, editCar} from "../../services/car.service";
import './Car.css';

export function Car({item, checkSaveR, dataForEdit}) {

    function onClickCarEdit() {
        editCar({id: item.id,...dataForEdit})
            .then((json) => {
                console.log(json);

                checkSaveR(item);
            });
    }

    function onClickCarDelete(event) {
        event.target.disabled = true;

        deleteCar(item.id).then(value => {
            console.error(value);

            setTimeout(
                () => checkSaveR(item),
                1000
            )
        });
    }

    return (
        <div className={'car'}>
            <h3>Car id: {item.id}</h3>
            <p>Model: {item.model}</p>
            <p>Price: {item.price}</p>
            <p>Year: {item.year}</p>
            <button onClick={onClickCarEdit}>Edit car info</button>
            <button onClick={onClickCarDelete} >Delete car info</button>
        </div>
    )
}