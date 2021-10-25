
import Rodape from '../../../components/rodapé'
import Cabecalho from '../../../components/cabecalho'
import { Container } from './styled'


export default function Contato() {
    return (
        <Container>
            <Cabecalho />
         <div className="info-email"> infoanimes@gmail.org.br </div>
        
        <Rodape />  
   </Container>
    )
}