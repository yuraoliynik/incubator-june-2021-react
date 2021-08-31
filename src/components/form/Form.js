import {useDispatch, useSelector} from "react-redux";
import {actionAddTODO, actionChangeInput} from "../../redux/actions";

import './Form.css';


export function Form() {
    const stateForm = useSelector(({stateReducer}) => stateReducer);
    const dispatch = useDispatch();

    const changeInput = ({target: {value}}) => {
        dispatch(actionChangeInput(value));
    };

    const clickAddButton = (event) => {
        event.preventDefault();
        dispatch(actionAddTODO(stateForm.todoStr));
    };


    return (
        <form className={'form'}>
            <div>
                <input type={'text'} name={'todoStr'} value={stateForm.todoStr} onChange={changeInput}/>
                <button onClick={clickAddButton}>Add new todo</button>
            </div>
        </form>
    );
}