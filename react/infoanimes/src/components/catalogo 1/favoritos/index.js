import { Container } from "./styled"
import { Link } from "react-router-dom"

export default function Anime(props) {
    return (
        <Container>
            <div className="anime"><img src={props.img} alt="Naruto" />
            <Link className="titulo" to="/catalogo">{props.nome}</Link></div>
         </Container>
    )
}