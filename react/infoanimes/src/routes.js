import { BrowserRouter, Switch, Route } from "react-router-dom";

import InfoAnimes from './pages/InfoAnimes'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={InfoAnimes} />
            </Switch>
        </BrowserRouter>
    )
}