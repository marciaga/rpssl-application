import React from 'react';

const GameOutcome = ({ winner, selections }) => {
    const { player, opponent } = selections;

    const renderOutcomeText = (winner) => {
        if (winner === 'tie') {
            return (
                <h3 className="outcome">It's a <span>{winner}</span></h3>
            );
        }
        return (
            <h3 className="outcome"><span>{winner}</span> won!</h3>
        );
    };

    return (
        <div className="mdl-grid">
            <h3 className="outcome mdl-cell mdl-cell--4-col mdl-cell--2-offset-desktop">Player Chose: <span>{player}</span></h3>
            <h3 className="outcome mdl-cell mdl-cell--4-col">Opponent Chose: <span>{opponent}</span></h3>
            <div className="outcome-statement mdl-cell mdl-cell--12-col">
                {renderOutcomeText(winner)}
            </div>
        </div>
    );
};

export { GameOutcome };
