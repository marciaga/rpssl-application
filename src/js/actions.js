import { opponentChoice, outcomeGenerator } from './utils';

const playerSelection = (name) => {
    const opponent = opponentChoice();
    const outcome = opponent === name ? 'tie' : outcomeGenerator(name, opponent);

    return (dispatch, getState) =>  {
        if (outcome !== 'tie') {
            dispatch({
                type: 'UPDATE_WIN_COUNT',
                data: {
                    winner: outcome
                }
            });
        }

        dispatch({
            type: 'GAME_STATUS',
            data: {
                gameOver: true
            }
        });

        dispatch({
            type: 'CURRENT_WINNER',
            data: {
                currentWinner: outcome
            }
        });


        dispatch({
            type: 'SELECTION',
            data: {
                player: name,
                opponent: opponent
            }
        });
    };
};

const resetValues = () => {
    return (dispatch) => {
        dispatch({
            type: 'RESET_COUNTER'
        });

        dispatch({
            type: 'RESET_SELECTIONS'
        });

        dispatch({
            type: 'RESET_CURRENT_WINNER'
        });
    };
};

export { playerSelection, resetValues };
