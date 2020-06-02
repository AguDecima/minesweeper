import React, { Component } from 'react';

import Board from './Board';

class Game extends Component {

    setMines() {
        const { location } = this.props;
        let setupgame = location.state.setupgame;

        let mines = 0

        if(parseInt(setupgame.difficulty) === 1) {
            mines = 5;
        }
        if(parseInt(setupgame.difficulty) === 2) {
            mines = 10;
        }
        if(parseInt(setupgame.difficulty) === 3) {
            mines = 15;
        }

        console.log(setupgame, mines);

        return <Board   height={setupgame.rows} 
                        width={setupgame.cols} 
                        mines={mines} 
                        difficulty={setupgame.difficulty}
                        player={setupgame.player}
                        />

    }

    render(){
        return (
            <div className="container justify-content-center">
                <div className="game">
                    {this.setMines()}
                </div>
            </div>
    
        );
    }

    
}

export default Game;