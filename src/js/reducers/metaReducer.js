const initialState = {
    gameOver: false
};

export function meta (state = initialState, action) {
    switch(action.type) {
        case 'GAME_STATUS':
            return Object.assign({}, state, {
                gameOver: action.data.gameOver
            });
        case 'CURRENT_WINNER':
            return Object.assign({}, state, {
                currentWinner: action.data.currentWinner
            });
        case 'RESET_CURRENT_WINNER':
            return initialState;
        default:
          return state;
    }
}
