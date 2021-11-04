import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Inicial from './pages/Inicial'
import Comunidades from './pages/comunidade/exp-comunidades'
import Contato from './pages/paginas-rodape/contato'
import Sala from "./pages/comunidade/salas";
import ComunPost from "./pages/comunidade/comunidade-posts"
import Catalogo from "./pages/catalogo/catalogo";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/comunidades" exact={true} component={Comunidades} />
                <Route path="/contato" exact={true} component={Contato} />
                <Route path="/sala" exact={true} component={Sala} />
                <Route path="/comunidade" exact={true} component={ComunPost} />
                <Route path="/catalogo" exact={true} component={Catalogo} />
            </Switch>
        </BrowserRouter>
    )
}