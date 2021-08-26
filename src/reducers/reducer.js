export const initState = {a: 0, b: 0, c: 0};

const reduser = (state, action) => {
    switch (action.type) {
        case '+':
            return {...state, [action.property]: state[action.property] + action.playloud};

        case '-':
            return {...state, [action.property]: state[action.property] - action.playloud};

        default:
            return {...state};
    }
};

export default reduser;