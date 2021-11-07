import { Catalogo } from "./styled"
import { Link } from 'react-router-dom';

export default function CardCatalogo(props) {
    return (
        <Catalogo>
            
                <Link className="capa" to="/catalogo"><img src={props.img} alt="" /></Link>  
                <Link className="desc" to="/catalogo">{props.desc}</Link>
            
        </Catalogo>
    )
}