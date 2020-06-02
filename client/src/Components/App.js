import React, { Fragment } from 'react';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styles SCSS - CSS
import '../Styles/sass/styles.scss'
import '../Styles/css/bootstrap.min.css'

// Components
import Dashboard from './Dashboard/dashboard';
import Header from './Header/Header';
import Game from './Game/Game';
import Setup from './Setup/Setup';

const App = () => {
    return (
        <Router>
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/game' component={Game} />
                    <Route exact path='/setup' component={Setup} />
                </Switch>
            </Fragment>
        </Router>
    );
}

export default App;