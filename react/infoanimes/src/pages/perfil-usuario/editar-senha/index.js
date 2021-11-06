import Rodape from "../../../components/rodapé"
import { Container } from "./styled"
export default function EditarSenha() {
    return(
        <Container>
        <div className="container_alterar">
            <div className="alterar_senha">
                <div className="usuario">
                    <span className="perfil"><img src="../../../assets/images/perfil_ket_otaku.png" alt="perfil"/></span>
                    <div className="nick">Ketellyn_Otaku_</div>
                </div>

                <div className="campos">
                    <div className="campo"> <input type="password" id="ssn" maxlength={32} placeholder="Senha"/> </div>
                    <div className="campo"> <input type="password" id="ssn" maxlength={32} placeholder="Nova Senha"/> </div>
                    <div className="campo"> <input type="password" id="ssn" maxlength={32} placeholder="Confirmação"/> </div>
                </div>

                <div className="botao_alt-se"><button>Alterar senha</button></div>
            </div>
            </div>

            <Rodape />
            </Container>

    )
}