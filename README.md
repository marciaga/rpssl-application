# Rock, Paper, Scissors, Spock, Lizard

To run this application locally:

First, install the dependencies:

`$ npm install`

For development, use

`$ npm run start`

We use Ava as our test runner. Run the tests with:

`$ npm run test`

To ensure code quality, we use ESLint. Run the linter with:

`$ npm run lint`

To build the application for production, use

`$ npm run build`

The build process generates static files in the build directory.

Data Structure:
```
{
    selections: {
        player: <str:name>,    
        opponent: <str:name>
    },
    outcomes: {
        player: <number>,
        opponent: <number>
    },
    meta: {
        gameOver: <bool>
        currentWinner: <str:name>
    }
}
```
