import { Card } from "./styled"

export default function CardComunidade(props) {
    return (
        <Card>
            <img src={props.img}/>
            <div class="info">
                <div class="bt">{props.dtq1}</div>
                <div class="bt">{props.dtq2}</div>
                <h1>{props.titulo}</h1>
                <p>{props.descricao}</p>
                <div  class="btn">Entrar</div>
            </div>
        </Card>
    )
}