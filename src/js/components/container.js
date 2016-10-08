import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GameToken } from './token';
import { LeaderBoard } from './leaderboard';
import { GameOutcome } from './outcome';
import { tokenNames } from '../setup';

const mapStateToProps = (state) => {
    return {
        meta: state.meta,
        outcomes: state.outcomes,
        selections: state.selections
    };
};

class Container extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.renderOutcome = this.renderOutcome.bind(this);
    }

    renderOutcome({ gameOver, currentWinner}, selections) {
        if (gameOver) {
            return <GameOutcome winner={currentWinner} selections={selections} />;
        }
    }

    render() {
        const { meta, outcomes, selections, dispatch } = this.props;

        return (
            <div>
                <header>
                    <h1 className="">Rock, Paper, Scissors, Spock, Lizard</h1>
                </header>
                <LeaderBoard scores={outcomes} dispatch={dispatch} />
                <div className="mdl-grid">
                    {tokenNames.map((v, i) => {
                        return <GameToken name={v} key={i} index={i} dispatch={dispatch} />;
                    })}
                </div>
                {this.renderOutcome(meta, selections)}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Container);
