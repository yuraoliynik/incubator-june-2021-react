import './Line.css';

export function Line({line, index, dispatch}) {
    return (
        <div className={'line'}>
            <p>{index} : {line}</p>
            <button onClick={() => dispatch({type: 'delete', playloud: index})}>Delete line</button>
        </div>
    );
}