import { Catalogo } from "./styled"

export default function CardCatalogo(props) {
    return (
        <Catalogo>
            
                <div className="capa"><img src={props.img} alt="" /></div>  
                <div className="desc">{props.desc}</div>
            
        </Catalogo>
    )
}