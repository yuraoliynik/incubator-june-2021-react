import './Car.css';

export function Car({item}) {
    return (
        <div className={'car'}>
            <h3>Car id: {item.id}</h3>
            <p>Model: {item.model}</p>
            <p>Price: {item.price}</p>
            <p>Year: {item.year}</p>
        </div>
    )
}