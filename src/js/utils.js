import { tokenNames, rulesTable } from './setup';

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

export { opponentChoice, outcomeGenerator };
