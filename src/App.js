import {useEffect, useState} from "react";
import {User} from "./components/user/User";

export default function App() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setUsers(json)
            })
    }, [])

    const inc = () => setCounter(counter + 1)
    const inc2 = () => setCounter2(counter2 + 1)
  return (
    <div>
        <h1>Counter js {counter}</h1>
        <h1>Counter1: {counter}</h1>
        <h1>Counter2: {counter2}</h1>
        <button onClick={inc}>increment</button>
        <button onClick={inc2}>increment2</button>
        {users.map(value => <User key={value.id} user={value}/>)}
      {/*<Users/>*/}
    </div>
  );
}