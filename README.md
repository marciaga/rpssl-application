# Rock, Paper, Scissors, Spock, Lizard
[![Build Status](https://semaphoreci.com/api/v1/marciaga/rpssl-application/branches/master/badge.svg)](https://semaphoreci.com/marciaga/rpssl-application)

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

The deploy process: for CI we use Semaphore. All merges to the master branch trigger the build and deploy process. The build server runs the tests, then if the tests pass, the application is deployed to an AWS S3 bucket.

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
