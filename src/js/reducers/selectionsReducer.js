const initialState = {};

export function selections (state = initialState, action) {
    switch (action.type) {
        case 'SELECTION':
            return Object.assign({}, state, {
                player: action.data.player,
                oponent: action.data.oponent
            });
        case 'RESET_SELECTIONS':
            return initialState;
        default:
            return state;
    }
}
