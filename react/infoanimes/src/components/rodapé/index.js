

import { Container } from "./styled";
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <Container>
            <div className="copyright"> © Copyright Info Animes 2021 - Todos os direitos reservados </div>
            <div className="box-itens">
                <Link className="item" to="/"> Home </Link>
                <Link className="item" to="/sobre"> Sobre </Link>
                <div className="item"> Central de Ajuda </div>
                <Link className="item" to="/politica"> Política de Privacidade </Link>
                <Link className="item" to="/contato"> Contato </Link>
                <Link className="item" to="/termos"> Termos de Uso </Link>
            </div>

            <div className="redes-sociais">
                <div className="facebook"> <img src="/assets/images/Facebook.png" alt="" /> </div>
                <div className="Instagram"> <img src="/assets/images/instagram.png" alt="" /> </div>
                <div className="Twitter"> <img src="/assets/images/Twitter.png" alt="" /> </div>
            </div>
            <div className="retangulo-1"></div>
            <div className="retangulo-2"></div>
        </Container>
    )
}
