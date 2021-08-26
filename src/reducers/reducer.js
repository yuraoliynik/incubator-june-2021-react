export const initState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case '+' :
            return {count: (state.count + action.playload)};

        case '-' :
            return {count: (state.count - action.playload)};

        default :
            return {...state};
    }
}

export default reducer;