import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Manga from './Manga/Manga';
import Mangas from './Mangas/Mangas';

class App extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Mangas} />
                    <Route exact path="/mangas/:slug" component={Manga} />
                    <Route exact path="/" component={Mangas} />
                </Switch>
            </div>
        )
    }
}

export default App;