import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inicial from './pages/Inicial';
import Comunidades from './pages/comunidade/exp-comunidades';
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
import PerfilLogado from "./pages/perfil-usuario/pagina-perfil-logado";
import EsqueciSenha from "./pages/perfil-usuario/esqueci-minha-senha";
import PubliCatalogo from "./pages/paginas-adm/pub-catalogo";
import Postagem_comuni from "./pages/paginas-adm/postagem-comunidade";
import PerfilNaoLogado from     "./pages/perfil-usuario/pagina-perfil-nao-logado";
import ConfigPerfilNaoLogado from  "./pages/perfil-usuario/configurar-perfil-nao-logado";
import ConfigPerfilLogado from  "./pages/perfil-usuario/configurar-perfil-logado";
import Contato from "./pages/paginas-rodape/contato";
import BoxMsg from "./components/comunidade1/sala/box-mensagem";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/boxmsg" exact={true} component={BoxMsg} />
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/home" exact={true} component={Inicial} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/esqueci-senha" exact={true} component={EsqueciSenha} />
                <Route path="/comunidades" exact={true} component={Comunidades} />
                <Route path="/sala" exact={true} component={Sala} />
                <Route path="/catalogo" exact={true} component={Catalogo} />
                <Route path="/favoritos" exact={true} component={Favoritos} />
                <Route path="/Catalogos" exact={true} component={Catalogos} />
                <Route path="/politica" exact={true} component={Politica} />
                <Route path="/termos" exact={true} component={Termo} />
                <Route path="/sobre" exact={true} component={Sobre} />
                <Route path="/cadastrar" exact={true} component={Cadastrar} />
                <Route path="/editarsenha" exact={true} component={EditarSenha} />
                <Route path="/perfil-logado" exact={true} component={PerfilLogado} />
                <Route path="/publi_catalogo" exact={true} component={PubliCatalogo} />
                <Route path="/postagem-comunidade" exact={true} component={Postagem_comuni}/>
                <Route path="/perfil-nao-logado" exact={true} component={PerfilNaoLogado}/>
                <Route path="/config-perfil-nao-logado" exact={true} component={ConfigPerfilNaoLogado}/>
                <Route path="/config-perfil-logado" exact={true} component={ConfigPerfilLogado}/>
                <Route path="/contato" exact={true} component={Contato}/>
                
            </Switch>
        </BrowserRouter>
    )
}