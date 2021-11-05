

import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <Container>
            <div class="copyright"> © Copyright Info Animes 2021 - Todos os direitos reservados </div>
            <div class="box-itens">
                <Link class="item" to="/"> Home </Link>
                <Link class="item" to="/sobre"> Sobre </Link>
                <div class="item"> Central de Ajuda </div>
                <Link class="item" to="/politica"> Política de Privacidade </Link>
                <Link class="item" to="/contato"> Contato </Link>
                <Link class="item" to="/termos"> Termos de Uso </Link>
            </div>

            <div class="redes-sociais">
                <div class="facebook"> <img src="/assets/images/Facebook.png" alt="" /> </div>
                <div class="Instagram"> <img src="/assets/images/instagram.png" alt="" /> </div>
                <div class="Twitter"> <img src="/assets/images/Twitter.png" alt="" /> </div>
            </div>
            <div class="retangulo-1"></div>
            <div class="retangulo-2"></div>
        </Container>
    )
}
