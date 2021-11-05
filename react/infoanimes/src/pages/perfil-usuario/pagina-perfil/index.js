import {Container} from "./styled"
import Cabecalho from "../../../components/cabecalho"
import Rodape from "../../../components/rodapé"
import Usuario from "../../../components/perfil-usuario/perfil/usuario"
import Box2 from "../../../components/perfil-usuario/perfil/BOX 2 por tempo"

export default function Perfil (){
    return (
        <Container>
            <Cabecalho/>
                <Usuario/>
                    <Box2/>
            <Rodape/>
        </Container>

    )
}
