import {useState} from "react";


export function Form({dispatch}) {
    const [newLine, setNewLine] = useState('');

    return (
        <div>
            <form>
                <input
                    type={'text'}
                    name={'newLine'}
                    value={newLine}
                    onChange={({target: {value}}) => setNewLine(value)}
                />

                <input
                    type={'button'}
                    value={'Add to check list'}
                    onClick={() => {
                        dispatch({type: 'add', playloud: newLine});
                        setNewLine('');
                    }}
                />
            </form>
        </div>
    );
}