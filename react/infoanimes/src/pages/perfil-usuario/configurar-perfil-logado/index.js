import {Container} from "./styled"
import Cabecalho from "../../../components/cabecalho"
import Rodape from "../../../components/rodapé"
import Usuario4 from "../../../components/perfil-usuario/perfil/usuario-4"

export default function Perfil (){
    return (
        <Container>
            <Cabecalho/>
                <Usuario4/>
                
            <Rodape/>
        </Container>

    )
}
