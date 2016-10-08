import test from 'ava';

import { meta } from '../src/js/reducers/metaReducer';
import { selections } from '../src/js/reducers/selectionsReducer';
import { outcomes } from '../src/js/reducers/outcomesReducer';

import { tokenNames, rulesTable } from '../src/js/setup';

const opponentChoice = () => {
    const num = getRandomInt(0, 4);
    return tokenNames[num];
};
// Generates a "random" number inclusive of range specified in arguments
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const outcomeGenerator = (player, opponent) => {
    const playerLosingSelections = rulesTable[opponent];
    return playerLosingSelections.indexOf(player) > -1 ? 'opponent' : 'player';
};

test('Should return a number within a range', t => {
    const randomNumber = getRandomInt(1, 10);
    t.true(randomNumber > 0 && randomNumber < 11);
});

test('Should return a name from specified list', t => {
    const choice = opponentChoice();
    t.true(tokenNames.indexOf(choice) !== -1);
});

test('Outcome generator should return winner', t => {
    const player = 'lizard';
    const opponent = 'rock';
    const outcome = outcomeGenerator(player, opponent);

    t.is(outcome, 'opponent');
});

test('Meta reducer should return initial state', t => {
    const newState = meta(undefined, {});

    t.deepEqual(newState, { gameOver: false });
});

test('Meta reducer should return Current Winner', t => {
    const type = 'CURRENT_WINNER';
    const data = {
        currentWinner: 'player'
    };

    const newState = meta(undefined, {
        type: type,
        data: data
    });

    t.deepEqual(newState, { gameOver: false, currentWinner: 'player' });
});

test('Selections reducer should return player selection', t => {
    const type = 'SELECTION';
    const data = {
        player: 'lizard',
        opponent: 'spock'
    };

    const newState = selections(undefined, {
        type: type,
        data: data
    });

    t.deepEqual(newState, { player: 'lizard', opponent: 'spock' });
});

test('Selections reducer should return initial state when reset', t => {
    const type = 'RESET_SELECTIONS';
    const newState = selections(undefined, { type: type });

    t.deepEqual(newState, {});
});

test('Outcomes reducer should return the initial state when reset', t => {
    const type = 'RESET_COUNTER';
    const newState = outcomes(undefined, { type: type });

    t.deepEqual(newState, {
        player: 0,
        opponent: 0
    });
});

test('Outcomes reducer should update the win count', t => {
    const type = 'UPDATE_WIN_COUNT';
    const data = { winner: 'player' };
    const newState = outcomes(undefined, {
        type: type,
        data: data
    });

    t.deepEqual(newState, {
        player: 1,
        opponent: 0
    });
});
