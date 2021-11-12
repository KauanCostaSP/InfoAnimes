import {Container} from "./styled"
import Cabecalho from "../../../components/cabecalho"
import Rodape from "../../../components/rodapé"
import Usuario2 from "../../../components/perfil-usuario/perfil/usuario-2"

export default function Perfil (){
    return (
        <Container>
            <Cabecalho/>
                <Usuario2/>
                
            <Rodape/>
        </Container>

    )
}
