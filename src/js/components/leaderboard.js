import React from 'react';

import { resetValues } from '../actions';

const LeaderBoard = ({ scores, dispatch }) => {
    const { player, opponent } = scores;

    return (
        <div>
            <div className="mdl-grid">
                <h2 className="score mdl-cell mdl-cell--4-col mdl-cell--2-offset-desktop mdl-cell--4-col-phone">Your score: {player}</h2>
                <h2 className="score mdl-cell mdl-cell--4-col mdl-cell--4-col-phone">Opponent score: {opponent}</h2>
            </div>
            <div className="mdl-grid">
                <button id="reset-button"
                        className="mdl-cell mdl-cell--2-col mdl-cell--12-col-phone mdl-cell--5-offset-desktop mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                        type="button"
                        onClick={() => dispatch(resetValues())}
                >
                    Reset Scores
                </button>
            </div>
        </div>
    );
};

export { LeaderBoard };
