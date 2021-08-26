export const initState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            state.push(action.playloud);
            return [...state];

        case 'delete':
            return state.filter((item, index) => index !== action.playloud);

        default:
            return [...state];
    }
};

export default reducer;