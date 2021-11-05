import BoxMsg from "../../../components/comunidade1/sala/box-mensagem"

import { Container } from "./styled"
import UsersOn from "../../../components/comunidade1/sala/box-users-on"

export default function Salas() {
    return (
        <Container>
        <div class="cabecalho-chat">
            <div class="seta-sair" > <img src="../../../assets/images/Arrow 1.svg" alt="" /></div>
            <div class="itens-direita">
                <div class="buscar"><input type="text" placeholder="Buscar..." /> </div>
                <div class="menu">...</div>
                <div class="pessoas" ><img src="../../../assets/images/pessoas-img.PNG" alt=""/></div>
            </div>
        </div>


        <div class="conteudo">
            <UsersOn />
           
           
                <BoxMsg />
            
        </div>
    </Container>
    )
}