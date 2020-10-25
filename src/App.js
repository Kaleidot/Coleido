import React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Routing from "./utils/Routing";
import Pages from "./pages";


class App extends React.Component {

    render() {
        return (
                <Router>
                    <Switch>
                        <Route exact path={Routing.path()} component={Pages.Home} />
                        <Route exact path={Routing.path(Routing.COLEIDOMV)}
                               component={Pages.Music} />
                        <Route exact path={Routing.path(Routing.ERROR)}
                               component={Pages.Error} />
                    </Switch>
                </Router>
        )
    }
}

export default App;
