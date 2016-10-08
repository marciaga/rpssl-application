import React from 'react';

import { playerSelection } from '../actions';
/**
 * component that returns game tokens
 * @param name - string of token name
 * @param dispatch - to dispatch actions
 */
const GameToken = ({ name, dispatch }) => {
    return (
        <div onClick={() => dispatch(playerSelection(name))}>
            <h2>{name}</h2>
        </div>
    );
};

export { GameToken };
