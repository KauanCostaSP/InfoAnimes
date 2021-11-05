import { Container } from "./styled"

export default function Mensagem(props) {
    return (
        <Container>
            <div class="usuario-mensagem">{props.usuMsg}</div>
            <div class="texto-mensagem">{props.Msg}</div>
        </Container>
    )
}