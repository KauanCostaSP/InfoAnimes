import Rodape from "../../../components/rodapé"
import Cabecalho from "../../../components/cabecalho"
import Anime from "../../../components/catalogo 1/favoritos"
import { Container } from "./styled"

export default function Favoritos() {
    return (
        <Container>
            <Cabecalho />

            <div className="favoritos"> 
            <div className="back">               
            <div className="user"> 
                <span className="perfil"><a href="../../PERFIL-USUARIO/perfil/index.html"><img src="../../../assets/images/perfil_ket_otaku.png" alt="perfil"/></a></span>
                <div className="nick">Ketellyn_Otaku_</div>
                <div className="pontos">...</div>
            </div>

            <div className="animes">
                        <Anime
                            img="/assets/images/Evangelion.png"
                            nome="Comp"
                        />
                <div className="anime"><img src="../../../assets/images/Evangelion.png" alt="Evangelion"/><div className="titulo"><a href="../../CATALOGO/pagina-catalogo/index_evangelion.html" >Neon Genesis...</a></div></div>
                <div className="anime"><img src="../../../assets/images/Nanatsu.png" alt="Nanatsu"/><div className="titulo">Nanatsu no Taizai</div></div>
                <div className="anime"><img src="../../../assets/images/Kakegurui.png" alt="Kakegurui"/><div className="titulo"><a href="../../CATALOGO/pagina-catalogo/index_kakegurui.html" >Kakegurui</a></div></div>
                <div className="anime"><img src="../../../assets/images/Speed.png" alt="Speed"/><div className="titulo">Speed Racer</div></div>
                <div className="anime"><img src="../../../assets/images/Dragon Ball.png" alt="Dragon Ball"/><div className="titulo">Dragon Ball Z</div></div>
                <div className="anime"><img src="../../../assets/images/He man.png" alt="He man"/><div className="titulo">He man</div></div>
                <div className="anime"><img src="../../../assets/images/Thundercats.png" alt="Thundercats"/><div className="titulo">Thundercats</div></div>
                <div className="anime"><img src="../../../assets/images/Violet.png" alt="Violet"/><div className="titulo">Violet Evergarden</div></div>
                <div className="anime"><img src="../../../assets/images/Sawamu.png" alt="Sawamu"/><div className="titulo">Sawamu, o ...</div></div>
            </div>
            </div>
            </div>

       <Rodape />
        </Container>
    )
}