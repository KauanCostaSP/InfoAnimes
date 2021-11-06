import { Container } from "./styled"

export default function UserOn(props){
    return (
        <Container>
            <div className="foto-usu"><img src={props.imagem} alt="" /></div>
            <div className="dados">
                <div className="nome">{props.nome}</div>
                <div className="adm">Administrador</div>
            </div>
        </Container>
    )
}