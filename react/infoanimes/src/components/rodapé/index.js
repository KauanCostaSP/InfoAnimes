import { Container } from "./styled";

export default function Index() {
    return (
        <Container>
            <div class="copyright"> © Copyright Info Animes 2021 - Todos os direitos reservados </div>
            <div class="box-itens">
                <div class="item"> Home </div>
                <div class="item"> Sobre </div>
                <div class="item"> Central de Ajuda </div>
                <div class="item"> Política de Privacidade </div>
                <div class="item"> Contato </div>
                <div class="item"> Termos de Uso </div>
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