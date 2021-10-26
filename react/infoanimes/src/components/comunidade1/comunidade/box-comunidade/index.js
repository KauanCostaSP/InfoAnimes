import { Comunidade } from "./styled"

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
            <div class="imagem"><img src={props.img} /></div>
            <div class="acao">
                <div class="like"><img src="/assets/images/heart.ico" /></div>
                <div class="compartilhar"><img src="/assets/images/paper_plane.ico" /></div>
                <div class="chat"><img src="/assets/images/chat.ico" /></div>
            </div>
        </Comunidade>
    )
}