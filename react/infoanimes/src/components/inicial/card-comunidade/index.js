import { Container } from "./styled";
import { Link } from "react-router-dom";


export default function CardComunidade(props) {
   

    return (
        <Container>
            <div className="card">
            <img className="img-card" src={props.comun.ds_capa} alt="" />
            <div className="informacoes">
                <h1>{props.comun.nm_comunidade}</h1>
                <p> {props.comun.ds_descricao} </p>
                <Link className="btn" to={{pathname: '/sala', state: props.comun}}>Entrar</Link>
            </div>
            </div>
        </Container>
    )
}