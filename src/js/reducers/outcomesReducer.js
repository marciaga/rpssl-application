const initialState = {
    player: 0,
    oponent: 0
};

export function outcomes (state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_WIN_COUNT':
            const winner = action.data.winner;

            return Object.assign({}, state, {
                [winner]: state[winner] + 1
            });
        case 'RESET_COUNTER':
            return initialState;
        default:
            return state;
    }
}
