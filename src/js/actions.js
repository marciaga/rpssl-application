import { oponentChoice, outcomeGenerator } from './utils';

const playerSelection = (name) => {
    const oponent = oponentChoice();
    const outcome = oponent === name ? 'tie' : outcomeGenerator(name, oponent);

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
                oponent: oponent
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
