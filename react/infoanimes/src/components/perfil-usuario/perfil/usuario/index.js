import {Cabecalho} from "./styled";
import { Link } from 'react-router-dom';
import cookie from "js-cookie";
import { useState } from "react";

export default function Index() {
    let logado = cookie.get('perfil-logado')
    
    let usuariologado = JSON.parse(logado)
   
    const [nome, setNome] = useState(usuariologado.nm_usuario);
    const [biografia, setBiografia] = useState(usuariologado.ds_biografia);

   
    return (

        <Cabecalho>

        <div className="box-1"> 
            <div className="cabecalho_box-1">
                <Link className="menu_box-1"> <img src="../../../assets/images/menu.jpg" alt=""/> </Link>
            </div>

            <div className="usuario_box-1">
                <div className="perfil_box-1"> <img src="../../../assets/images/perf_ket.png" alt="Foto de Perfil"/> </div>
                <div className="nick_box-1"> {nome} </div>
            </div>

            <div className="botoes_box-1">
                <Link className="botao_editar" to="/config-perfil-logado"><a href="../../PERFIL-USUARIO/config-editar-perfil/index.html"><button>Editar Perfil</button></a></Link>
            </div>

            <div className="box-2"> 
            <div className="biografia">
                <div className="titulo-box-2"> 
                    <div className="retangulo-branco"></div>
                    <div className="text-retangulo-branco">Biografia</div> 
                    <div className="info_biografia">
                        <div className="descricao"> {biografia} </div>
                    </div>
                </div>
            </div>

            <div className="comunidades-e-chats">
                <div className="titulo-box-2"> 
                    <div className="retangulo-branco"> </div>
                    <div className="text-retangulo-branco">Minhas comunidades | Chats online</div>
                    
                </div>
                <div className="chats">
                    <div className="img_chats"> <img src="../../../assets/images/perf_2.png" alt="Perfil"/> </div>
                    <div className="img_chats"> <img src="../../../assets/images/perf_3.png" alt="Perfil"/> </div>     
                    <div className="img_chats"> <img src="../../../assets/images/perf_4.png" alt="Perfil"/> </div> 
                    <div className="img_chats"> <img src="../../../assets/images/perf_5.png" alt="Perfil"/> </div>  
                    <div className="img_chats"> <img src="../../../assets/images/perf_6.png" alt="Perfil"/> </div>
                    <div className="img_chats"> <img src="../../../assets/images/perf_7.png" alt="Perfil"/> </div>   
                    <div className="img_chats"> <img src="../../../assets/images/perf_8.png" alt="Perfil"/> </div> 
                </div>
            </div>
        </div>






        </div>





        </Cabecalho>

    )

}