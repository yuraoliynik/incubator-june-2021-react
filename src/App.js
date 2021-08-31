import {Form} from "./components/form/Form";
import {TodoList} from "./components/todoList/TodoList";

import './App.css';


export default function App() {
    return (
        <div>
            <Form/>

            <TodoList/>
        </div>
    );
}