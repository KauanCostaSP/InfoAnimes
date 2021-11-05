import {Cabecalho} from "./styled";
import { Link } from 'react-router-dom';

export default function Index () {
    return(

        <Cabecalho>

        <div className="box-1"> 
            <div className="cabecalho_box-1">
                <Link className="criar"> <img src="../../../assets/images/adicionar.png" alt="" /></Link>
                <Link className="perfil"> <img src="../../../assets/images/Usuario.png" alt="" /></Link>
                <Link className="menu_box-1"> <img src="../../../assets/images/menu.jpg" alt="" /></Link>
            </div>

            <div className="usuario_box-1">
                <div className="perfil_box-1"><img src="../../../assets/images/perf_ket.png" alt="Foto de Perfil"/></div>
                <div className="nick_box-1">Ketellyn_Otako_</div>
                <div className="info_1">TikTok: Kety_Narutoo</div>
                <div className="info_2">Insta: KetyReal_</div>
            </div>

            <div className="botoes_box-1">
                <Link className="botao_editar"><a href="../../PERFIL-USUARIO/config-editar-perfil/index.html"><button>Editar Perfil</button></a></Link>
                <Link className="botao_chat"><button> <img src="../../../assets/images/chat_icon.png" alt="Icon Chat"/>Chat</button></Link>
            </div>
        </div>

        </Cabecalho>

    )

}