import { Link } from "react-router-dom"
import { Container } from "./styled"

export default function BoxSaibaMais(props) {
    return (
        <Container>
            <Link className="imagem" to={{ pathname: '/catalogo', state: props.info }}>  <img src={props.info.ds_imagem} alt="" />  </Link>
            <Link className="descricao" to={{ pathname: '/catalogo', state: props.info }}>{props.info.nm_anime}</Link>
        </Container>
    )
}