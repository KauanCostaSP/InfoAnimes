import { Container } from "./styled"
import Rodape from "../../../components/rodapé"

export default function Cadastrar() {
    return (
        <Container>
            <div className="cadastrar">
                <div class="form_preenchimento">
                    <div class="nome"><input type="text" placeholder="Nome"/></div>
                    <div class="sobrenome"><input type="text" placeholder="Sobrenome"/></div>
                    <div class="email"><input type="email" id="email" pattern=".+@globex\.com" size="30" placeholder="Email"/></div>
                    <div class="conf_email"><input type="email" id="email" pattern=".+@globex\.com" size="30" placeholder="Confirmação de Email"/></div>
                    <div class="senha"><input type="password" id="ssn" maxlength={32} placeholder="Senha"/></div>
                    <div class="conf_senha"><input type="password" id="ssn" maxlength={32} placeholder="Confirmação de Senha"/></div>
                </div>

            <div class="botao_cadastrar"><button>Cadastrar-se</button></div>
            </div>
            
            <Rodape />
    </Container>
    )
}