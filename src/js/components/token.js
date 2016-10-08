import React from 'react';

import { playerSelection } from '../actions';
import { colorMapping } from '../setup';
/**
 * component that returns game tokens
 * @param name - string of token name
 * @param dispatch - to dispatch actions
 */
const GameToken = ({ name, dispatch, index }) => {
    const column = index === 0 ? 'mdl-cell--1-offset' : '';

    return (
        <div className={`game-token mdl-cell mdl-cell--2-col ${column}`}
             onClick={() => dispatch(playerSelection(name))}
             style={{backgroundColor: colorMapping[index]}}
        >
            <h2>{name}</h2>
        </div>
    );
};

export { GameToken };
