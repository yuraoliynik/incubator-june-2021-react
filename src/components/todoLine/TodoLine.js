import {useDispatch, useSelector} from "react-redux";
import {actionDeleteTODO, actionUpdateTODO} from "../../redux/actions";

import './TodoLine.css';


export function TodoLine({todo, index}) {
    const todoStr = useSelector(({stateReducer: {todoStr}}) => todoStr);
    const dispatch = useDispatch();

    const clickDeleteButton = () => {
        dispatch(actionDeleteTODO(index));
    };

    const clickUpdateButton = () => {
        dispatch(actionUpdateTODO(index, todoStr));
    };

    return (
        <div className={'todoLine'}>
            <div>
                <p>{index} : {todo}</p>
            </div>

            <div className={'buttons'}>
                <button onClick={clickDeleteButton}>Delete</button>
                <button onClick={clickUpdateButton}>Update</button>
            </div>
        </div>
    );
}