import { Comunidade } from "./styled"
import {Link} from 'react-router-dom'

export default function BoxComunidade(props) {
    return (
        <Comunidade>
            <div className="titulo">{props.titulo}</div>
            <div className="descricao">
                <a href="/home" className="bt">{props.dtq1}</a>
                <a href="/home" className="bt">{props.dtq2}</a>
                <a href="/home" className="bt">{props.dtq3}</a>
                <a href="/home" className="bt">{props.dtq4}</a>
            </div>
            <Link className="imagem" to="/comunidade"><img src={props.img} alt=""/></Link>
            <div className="acao">
                <div className="like"><img src="/assets/images/heart.ico" alt=""/></div>
                <div className="compartilhar"><img src="/assets/images/paper_plane.ico" alt=""/></div>
                <Link className="chat" to="/sala"><img src="/assets/images/chat.ico" alt=""/></Link>
            </div>
        </Comunidade>
    )
}