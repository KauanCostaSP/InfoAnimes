import Rodape from "../../../components/rodapé"
import Cabecalho from "../../../components/cabecalho"
import Anime from "../../../components/catalogo 1/favoritos"
import { Container } from "./styled"

export default function Favoritos() {
    return (
        <Container>
            <Cabecalho />

            <div class="favoritos"> 
            <div class="back">               
            <div class="user"> 
                <span class="perfil"><a href="../../PERFIL-USUARIO/perfil/index.html"><img src="../../../assets/images/perfil_ket_otaku.png" alt="perfil"/></a></span>
                <div class="nick">Ketellyn_Otaku_</div>
                <div class="pontos">...</div>
            </div>

            <div class="animes">
                        <Anime
                            img="/assets/images/Evangelion.png"
                            nome="Comp"
                        />
                <div class="anime"><img src="../../../assets/images/Evangelion.png" alt="Evangelion"/><div class="titulo"><a href="../../CATALOGO/pagina-catalogo/index_evangelion.html" >Neon Genesis...</a></div></div>
                <div class="anime"><img src="../../../assets/images/Nanatsu.png" alt="Nanatsu"/><div class="titulo">Nanatsu no Taizai</div></div>
                <div class="anime"><img src="../../../assets/images/Kakegurui.png" alt="Kakegurui"/><div class="titulo"><a href="../../CATALOGO/pagina-catalogo/index_kakegurui.html" >Kakegurui</a></div></div>
                <div class="anime"><img src="../../../assets/images/Speed.png" alt="Speed"/><div class="titulo">Speed Racer</div></div>
                <div class="anime"><img src="../../../assets/images/Dragon Ball.png" alt="Dragon Ball"/><div class="titulo">Dragon Ball Z</div></div>
                <div class="anime"><img src="../../../assets/images/He man.png" alt="He man"/><div class="titulo">He man</div></div>
                <div class="anime"><img src="../../../assets/images/Thundercats.png" alt="Thundercats"/><div class="titulo">Thundercats</div></div>
                <div class="anime"><img src="../../../assets/images/Violet.png" alt="Violet"/><div class="titulo">Violet Evergarden</div></div>
                <div class="anime"><img src="../../../assets/images/Sawamu.png" alt="Sawamu"/><div class="titulo">Sawamu, o ...</div></div>
            </div>
            </div>
        </div>

       <Rodape />
        </Container>
    )
}