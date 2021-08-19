import './Car.css';

export function Car({item: {id, model, price, year}}) {
    return(
        <div className={'car'}>
            <div className={'car-property'}>Id: <p>{id}</p></div>
            <div className={'car-property'}>model: <p>{model}</p></div>
            <div className={'car-property'}>price: <p>{price}</p></div>
            <div className={'car-property'}>year: <p>{year}</p></div>
        </div>
    );
}