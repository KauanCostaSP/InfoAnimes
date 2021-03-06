import {Cabecalho} from "./styled";
import { Link } from 'react-router-dom';

export default function Index () {
    return(

        <Cabecalho>

        <div className="box-1"> 
            <div className="cabecalho_box-1">
                <Link className="menu_box-1" to="/editarsenha"> <img src="../../../assets/images/menu.jpg" alt="" /></Link>
            </div>

            <div className="usuario_box-1">
                <div className="perfil_box-1"><img src="../../../assets/images/usuario-nao-logado.png" alt="Foto de Perfil"/></div>
                <div className="entrar"><button>Alterar plano de fundo</button></div>
                <div className="nick_box-1"></div>
                <div className="info_1"></div>
                <div className="info_2"></div>
            </div>

            <div className="botoes_box-1">
                <Link className="botao_editar" to="/config-perfil-nao-logado"> <div className="botao-editar">Editar Perfil</div> </Link>
            </div>

            <div className="box-2"> 
            <div className="biografia">
                <div className="titulo-box-2"> 
                    <div className="retangulo-branco"></div>
                    <div className="text-retangulo-branco">Biografia</div> 
                    <div className="info_biografia">
                        <div className="descricao">Para que possam conhecer um pouco mais sobre você <br/> adicione aqui a sua biográfia, seja livre e criativo . . .</div>
                        <Link className="add-bio" to="/config-perfil-nao-logado"> <div className="add-bio"> Adicionar Biografia </div> </Link>
                    </div>
                </div>
            </div>

            <div className="comunidades-e-chats">
                <div className="titulo-box-2"> 
                    <div className="retangulo-branco"></div>
                    <div className="text-retangulo-branco">Minhas comunidades | Chats online</div>
                </div>

                <div className="chats"> Conecte-se com amigos , faça parte de uma comunidade</div>
                <Link className="ver-comuni" to="/comunidades"> <div className="ver-comuni"> Veja nossas comunidades </div> </Link>
            </div>
        </div>






        </div>





        </Cabecalho>

    )

}