import { useState, useRef } from "react"
import Mensagem from "./mensagem"
import { Container } from "./styled"
import api from '../../../../service/api'
const Api = new api();


export default function BoxMsg(props) {
    const [comunidade, setComunidade] = useState(props.location.state)
    const [comunidades, setComunidades] = useState([])
    const [idComun, setIdComun] = useState(comunidade.id_comunidade)

    

    const listar = async () => {
        let r = await Api.listarmensagens(idComun)
    }
    
    return (
        <Container>
                <div className="mensagens">
                    <div className="mensagem">
                        
                    {comunidades.map(x =>
                       <Mensagem
                       usuMsg={comunidade.id_usuario}
                       Msg={comunidade.ds_mensagem}
                   />
                       )}
                    
                    
                    </div> 
                </div>
                
                <div className="digite-mensagem"><input type="text" placeholder=" Digite uma mensagem" />  </div>
        </Container>
    )
}