import { Catalogo } from "./styled"

export default function CardCatalogo(props) {
    return (
        <Catalogo>
            
                <div class="capa"><img src={props.img} alt="" /></div>  
                <div class="desc">{props.desc}</div>
            
        </Catalogo>
    )
}