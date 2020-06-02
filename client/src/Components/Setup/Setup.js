import React, { useState } from 'react';

// routing
import { withRouter } from 'react-router-dom'

// sweet alert
import Swal from 'sweetalert2';

const Setup = ({ history }) => {

    // STATES
    const [setupGame, setSetupGame] = useState({
        player: '',
        difficulty: 1,
        rows: 5,
        cols: 5
    });

    // HANDLES
    const handleSetupGame = (e) => {

        setSetupGame({
            ...setupGame,
            [e.target.name]: e.target.value
        })
    }

    // SUBMIT METHOD
    const startNewGame = (e) => {
        e.preventDefault();

        if (parseInt(setupGame.rows) !== parseInt(setupGame.cols)) {
            Swal.fire({
                icon: 'warning',
                title: 'Please..',
                text: `Enter equal rows and columns`,
                allowOutsideClick: false
            });
            return;
        }

        history.push('./game', { setupgame: setupGame });
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-5 text-center">New Game</h1>

                <hr className="my-4" />

                <form onSubmit={startNewGame}>

                    <div className="form-row justify-content-center">
                        <div className="form-group col-md-12">
                            <label htmlFor="playerInput">Player</label>
                            <input type="text"
                                className="form-control"
                                id="playerInput"
                                name="player"
                                placeholder="enter your player name"
                                defaultValue={setupGame.player}
                                required
                                onChange={(e) => handleSetupGame(e)} />
                        </div>
                    </div>


                    <div className="form-row justify-content-center">

                        <div className="form-group col-md-4">
                            <label htmlFor="difficultySelected">Difficulty</label>
                            <select className="form-control" name="difficulty"
                                id="difficultySelected"
                                value={setupGame.difficulty}
                                onChange={(e) => handleSetupGame(e)}>
                                <option value={1}>Easy</option>
                                <option value={2}>Medium</option>
                                <option value={3}>Hard</option>
                            </select>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="rowInput">Rows</label>
                            <input type="number"
                                className="form-control"
                                id="rowInput"
                                name="rows"
                                placeholder="number of rows"
                                defaultValue={setupGame.rows}
                                min={5}
                                max={15}
                                onChange={(e) => handleSetupGame(e)} />
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="colsInput">Columns</label>
                            <input type="number"
                                className="form-control"
                                id="colsInput"
                                name="cols"
                                placeholder="number of columns"
                                defaultValue={setupGame.cols}
                                min={5}
                                max={15}
                                onChange={(e) => handleSetupGame(e)} />
                        </div>

                    </div>

                    <hr className="my-4" />

                    <div className="row justify-content-center mt-2">
                        <button className="btn btn-danger btn-lg col-4"
                            type="submit"
                            title="start new game">
                            Start!
                    </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default withRouter(Setup);