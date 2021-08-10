import './Geo.css';

export function Geo(props) {
    let {lat, lng} = props.geo;

    return(
        <div className={'geo'}>
            <p>Geo:</p>

            <div className={'value'}>
                <div className={'value-wrap'}>
                    <p>Lat: {lat}</p>
                    <p>Lng: {lng}</p>
                </div>
            </div>
        </div>
    );
}