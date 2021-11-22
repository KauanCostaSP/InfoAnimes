import { Container } from "./styled"

export default function Mensagem(props) {
    return (
        <Container>
            <div className="usuario-mensagem">{props.user}</div>
            <div className="texto-mensagem">{props.ds_msg}</div>
        </Container>
    )
}