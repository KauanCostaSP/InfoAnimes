import { Link } from "react-router-dom"
import { Container } from "./styled"

export default function BoxSaibaMais(props) {
    return (
        <Container>
            <Link className="imagem" to="/catalogo">  <img src={props.img} alt="" />  </Link>
            <Link className="descricao" to="/catalogo">{props.desc}</Link>
        </Container>
    )
}