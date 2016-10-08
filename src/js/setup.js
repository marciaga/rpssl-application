const tokenNames = [
    'rock',
    'paper',
    'scissors',
    'lizard',
    'spock'
];

/**
 * Winning Implementation:
 * scissor beats paper and lizard
 * Rock beats scissor and lizard
 * Paper beats rock and Spock
 * Spock beats rock and scissors
 * Lizard beats Spock and paper
*/

const rulesTable = {
    scissors: ['paper', 'lizard'],
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    lizard: ['spock', 'paper'],
    spock: ['rock', 'scissors']
};

export { tokenNames, rulesTable };
