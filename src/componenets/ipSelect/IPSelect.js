import myAxios from "../../services/myAxios";

import './IPSelect.css';


export function IPSelect({setIP}) {
    const chooseIp = ({target: {value}}) => {
        setIP(value.match(/\d.+/g)[0]);

        myAxios.defaults.baseURL = `http://${value.match(/\d.+/g)[0]}/api/v1/cars`;
    };

    return (
        <div className={'ip-select'}>
            <p>IP address for API</p>

            <select name={'ipSelect'} onChange={chooseIp}>
                <option>91.201.233.14</option>
                <option>Home: 195.72.146.25</option>
                <option>Office: 192.168.1.253</option>
            </select>
        </div>
    );
}