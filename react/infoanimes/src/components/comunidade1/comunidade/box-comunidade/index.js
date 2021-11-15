import { Comunidade } from "./styled"
import {Link} from 'react-router-dom'

export default function BoxComunidade(props) {
    return (
        <Comunidade>
            <div className="comunidade">
                <div className="titulo">{props.comun.nm_comunidade}</div>
                    <div className="imagem"><img src={props.comun.ds_capa} alt=""/></div>
                    <Link className="entrar" to={{pathname: '/sala', state: props.comun}}><button>Entrar</button></Link>
                    </div>
        </Comunidade>
    )
}