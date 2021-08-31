import {TodoLine} from "../todoLine/TodoLine";
import {useSelector} from "react-redux";

import './TodoList.css';


export function TodoList() {
    const todoList = useSelector(({todoReducer: {todoList}}) => todoList);

    return (
        <div className={'todoList'}>
            {
                todoList.map((item, index) => <TodoLine todo={item} key={index} index={index}/>)
            }
        </div>
    );
}