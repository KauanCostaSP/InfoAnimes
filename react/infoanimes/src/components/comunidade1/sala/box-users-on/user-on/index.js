import { Container } from "./styled"

export default function UserOn(props){
    return (
        <Container>
            <div class="foto-usu"><img src={props.imagem} alt="" /></div>
            <div class="dados">
                <div class="nome">{props.nome}</div>
                <div class="adm">Administrador</div>
            </div>
        </Container>
    )
}