import {Cabecalho} from "./styled";
import { Link } from 'react-router-dom';

export default function Index () {
    return(

        <Cabecalho>

        <div className="box-1"> 
            <div className="cabecalho_box-1">
            </div>

            <div className="usuario_box-1">
                <div className="perfil_box-1"><img src="../../../assets/images/usuario-nao-logado.png" alt="Foto de Perfil"/></div>
                <div className="alterar"><button>Alterar plano fe fundo</button></div>
                <div className="campo-nome"><input type="text" id="usuario" size="40" placeholder="Nome"/></div>
                <div className="campo-usuario"><input type="text" id="usuario" size="40" placeholder="Usuário"/></div>
                <div className="campo-biografia"><input type="text" id="usuario" size="40" placeholder="Biografia..."/></div>
                <div className="campo-email"><input type="text" id="usuario" size="40" placeholder="Email"/></div>
                <div className="campo-telefone"><input type="text" id="usuario" size="40" placeholder="Telefone"/></div>
                <div className="campo-genero"><input type="text" id="usuario" size="40" placeholder="Gênero"/></div>


            </div>

            <div className="botoes_box-1">
                <Link className="botao_voltar" to="/perfil-nao-logado"><a href="../../PERFIL-USUARIO/config-editar-perfil/index.html"><button>Voltar</button></a></Link>
                <Link className="botao_desativar" to="/perfil-nao-logado"><button>Salvar</button></Link>
            </div>

        </div>





        </Cabecalho>

    )

}