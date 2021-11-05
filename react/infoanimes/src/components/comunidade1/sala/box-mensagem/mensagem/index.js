import { Container } from "./styled"

export default function Mensagem(props) {
    return (
        <Container>
            <div className="usuario-mensagem">{props.usuMsg}</div>
            <div className="texto-mensagem">{props.Msg}</div>
        </Container>
    )
}