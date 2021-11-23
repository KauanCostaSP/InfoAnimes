import { Catalogo } from "./styled"
import { Link } from 'react-router-dom';

export default function CardCatalogo(props) {
    return (
        <Catalogo>
            
                <Link className="capa" to={{pathname: '/catalogo', state: props.info}}><img src={props.info.ds_imagem} alt="" /></Link>  
                <Link className="desc" to={{pathname: '/catalogo', state: props.info}}>{props.info.nm_anime}</Link>
            
        </Catalogo>
    )
}