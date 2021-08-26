import {Line} from "../line/Line";

export function List({list, dispatch}) {
    return (
        <div>
            {
                list && list.map((item, index) => <Line
                    line={item}
                    index={index}
                    key={index}
                    dispatch={dispatch}
                />)
            }
        </div>
    );
}