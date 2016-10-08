import React from 'react';

import { resetValues } from '../actions';

const LeaderBoard = ({ scores, dispatch }) => {
    const { player, oponent } = scores;

    return (
        <div>
            <h2>Your score: {player}</h2>
            <h2>Oponent score: {oponent}</h2>
            <button type="button" onClick={() => dispatch(resetValues())}>Reset Scores</button>
        </div>
    );
};

export { LeaderBoard };
