import {Container} from "./styled"
import Cabecalho from "../../../components/cabecalho"
import Rodape from "../../../components/rodapé"
import Usuario from "../../../components/perfil-usuario/perfil/usuario"

export default function Perfil (){
    return (
        <Container>
            <Cabecalho/>
                <Usuario/>
                
            <Rodape/>
        </Container>

    )
}
