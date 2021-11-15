import Cabecalho from "../../../components/cabecalho"
import Rodape from "../../../components/rodapé"
import { Container } from "./styled"
import { Link } from 'react-router-dom'
export default function Termos() {
    return(

         <Container>
             <Cabecalho/>
            
        <div className="conteudo">
            <div className="img-contato"> <img src="/assets/images/core-roxo.png" alt=""/> </div>
            <div ClassName="telefones"> 11-95638567 / 11-97845921 </div>
            <div ClassName="email"> infoanimes@gmail.org.br </div>
        </div>
    <Rodape/>
</Container>
         

    
    )
}