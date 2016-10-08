import { tokenNames, rulesTable } from './setup';

const oponentChoice = () => {
    const num = getRandomInt(0, 4);
    return tokenNames[num];
};
// Generates a "random" number inclusive of range specified in arguments
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const outcomeGenerator = (player, oponent) => {
    const playerLosingSelections = rulesTable[oponent];
    return playerLosingSelections.indexOf(player) > -1 ? 'oponent' : 'player';
};

export { oponentChoice, outcomeGenerator };
