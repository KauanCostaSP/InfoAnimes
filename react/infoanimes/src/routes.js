import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inicial from './pages/Inicial';
import Comunidades from './pages/comunidade/exp-comunidades';
import Contato from './pages/paginas-rodape/contato';
import Sala from "./pages/comunidade/salas";
import Catalogo from "./pages/catalogo/catalogo";
import Catalogos from "./pages/catalogo/saiba mais";
import Favoritos from "./pages/catalogo/favoritos";
import Politica from "./pages/paginas-rodape/politica";
import Termo from "./pages/paginas-rodape/termos";
import Sobre from "./pages/sobre";
import Login from "./pages/perfil-usuario/login";
import Cadastrar from "./pages/perfil-usuario/cadastrar";
import EditarSenha from "./pages/perfil-usuario/editar-senha";
import Perfil from "./pages/perfil-usuario/pagina-perfil";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/home" exact={true} component={Inicial} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/comunidades" exact={true} component={Comunidades} />
                <Route path="/contato" exact={true} component={Contato} />
                <Route path="/sala" exact={true} component={Sala} />
                <Route path="/catalogo" exact={true} component={Catalogo} />
                <Route path="/favoritos" exact={true} component={Favoritos} />
                <Route path="/Catalogos" exact={true} component={Catalogos} />
                <Route path="/politica" exact={true} component={Politica} />
                <Route path="/termos" exact={true} component={Termo} />
                <Route path="/sobre" exact={true} component={Sobre} />
                <Route path="/cadastrar" exact={true} component={Cadastrar} />
                <Route path="/editarsenha" exact={true} component={EditarSenha} />
                <Route path="/perfil" exact={true} component={Perfil} />
            </Switch>
        </BrowserRouter>
    )
}