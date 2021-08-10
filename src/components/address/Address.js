import {Geo} from '../geo/Geo.js';
import './Adress.css';

export  function Address(props) {
    let {street, suite, city, zipcode, geo} = props.address;

    return(
        <div className={'address'}>
            <p>Address:</p>

            <div className={'value'}>
                <div className={'value-wrap'}>
                    <p>Street: {street}</p>
                    <p>Suite: {suite}</p>
                    <p>City: {city}</p>
                    <p>Zipcode: {zipcode}</p>
                    <Geo geo={geo}/>
                </div>
            </div>
        </div>
    );
}