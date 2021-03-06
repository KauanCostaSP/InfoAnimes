import Rodape from "../../../components/rodapé"
import Cabecalho from "../../../components/cabecalho"
import BoxSaibaMais from '../../../components/catalogo 1/saiba-mais/box-anime'
import { Container } from "./styled"

import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Cookies from 'js-cookie';
import Api from "../../../service/api";
const api = new Api();


function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado')
    if (!logado) {
        return false
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}


export default function Favoritos() {

    const navigation = useHistory();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [usu] = useState(usuarioLogado);

    const [favoritos, setFavoritos] = useState([]);

    async function mostrarFavoritos() {
        if (usu.id_usuario) {
            let v = await api.mostrarFavoritos(usu.id_usuario);
            console.log(v)
            setFavoritos(v);
        }
    }

    useEffect(() => {
        mostrarFavoritos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Container>
            <Cabecalho />

            <div className="favoritos"> 
            <div className="back">               
            <div className="user"> 
                <span className="perfil"><a href="../../PERFIL-USUARIO/perfil/index.html"><img src="../../../assets/images/perfil_ket_otaku.png" alt="perfil"/></a></span>
                <div className="nick"> {usu.nm_usuario} </div>
                <div className="pontos">...</div>
            </div>

            <div className="animes">

                    {favoritos.map((i) =>
                        <BoxSaibaMais info={i}/>
                    )}
            </div>
            </div>
            </div>

       <Rodape />
        </Container>
    )
}