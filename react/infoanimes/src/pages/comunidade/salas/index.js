import BoxMsg from "../../../components/comunidade1/sala/box-mensagem"

import { Container } from "./styled"
import UsersOn from "../../../components/comunidade1/sala/box-users-on"

export default function Salas() {
    return (
        <Container>
        <div className="cabecalho-chat">
            <div className="seta-sair" > <img src="../../../assets/images/Arrow 1.svg" alt="" /></div>
            <div className="itens-direita">
                <div className="buscar"><input type="text" placeholder="Buscar..." /> </div>
                <div className="menu">...</div>
                <div className="pessoas" ><img src="../../../assets/images/pessoas-img.PNG" alt=""/></div>
            </div>
        </div>


        <div className="conteudo">
            <UsersOn />
           
           
            <BoxMsg />
            
        </div>
    </Container>
    )
}