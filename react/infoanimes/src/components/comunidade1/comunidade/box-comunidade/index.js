import { Comunidade } from "./styled"
import {Link} from 'react-router-dom'

export default function BoxComunidade(props) {
    return (
        <Comunidade>
            <div class="titulo">{props.titulo}</div>
            <div class="descricao">
                <a href="#" class="bt">{props.dtq1}</a>
                <a href="#" class="bt">{props.dtq2}</a>
                <a href="#" class="bt">{props.dtq3}</a>
                <a href="#" class="bt">{props.dtq4}</a>
            </div>
            <Link class="imagem" to="/comunidade"><img src={props.img} /></Link>
            <div class="acao">
                <div class="like"><img src="/assets/images/heart.ico" /></div>
                <div class="compartilhar"><img src="/assets/images/paper_plane.ico" /></div>
                <Link class="chat" to="/sala"><img src="/assets/images/chat.ico" /></Link>
            </div>
        </Comunidade>
    )
}