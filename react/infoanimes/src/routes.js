import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Inicial from './pages/Inicial'
import Comunidades from './pages/comunidade/exp-comunidades'
import Contato from './pages/paginas-rodape/contato'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/comunidades" exact={true} component={Comunidades} />
       
                <Route path="/contato" exact={true} component={Contato} />
            </Switch>
        </BrowserRouter>
    )
}