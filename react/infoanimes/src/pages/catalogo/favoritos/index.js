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
                <div className="nick"></div>
                <div className="pontos">...</div>
            </div>

            <div className="animes">
                        <Anime
                            img="/assets/images/Evangelion.png"
                            nome="Comp"
                        />
                <div className="anime"><img src="../../../assets/images/Evangelion.png" alt="Evangelion"/><div className="titulo"><a href="../../CATALOGO/pagina-catalogo/index_evangelion.html" >Neon Genesis...</a></div></div>
            </div>
            </div>
            </div>

       <Rodape />
        </Container>
    )
}