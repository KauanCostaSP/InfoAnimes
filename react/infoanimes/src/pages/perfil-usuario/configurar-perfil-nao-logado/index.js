import {Container} from "./styled"
import Cabecalho from "../../../components/cabecalho"
import Rodape from "../../../components/rodapé"
import Usuario3 from "../../../components/perfil-usuario/perfil/usuario-3"

export default function Perfil (){
    return (
        <Container>
            <Cabecalho/>
                <Usuario3/>
                
            <Rodape/>
        </Container>

    )
}
