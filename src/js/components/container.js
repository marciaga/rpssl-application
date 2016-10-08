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
                <h1>This Game</h1>
                <LeaderBoard scores={outcomes} dispatch={dispatch} />

                {tokenNames.map((v, i) => {
                    return <GameToken name={v} key={i} dispatch={dispatch} />;
                })}

                {this.renderOutcome(meta, selections)}

            </div>
        );
    }
}

export default connect(mapStateToProps)(Container);
