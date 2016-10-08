import React from 'react';

const GameOutcome = ({ winner, selections }) => {
    const { player, oponent } = selections;
    return (
        <div>
            <h2>Player Chose {player}</h2>
            <h2>Oponent Chose {oponent}</h2>
            <h2>The winner is: {winner}</h2>
        </div>
    );
};

export { GameOutcome };
