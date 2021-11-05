import { Container } from "./styled"
import Rodape from "../../../components/rodapé"

export default function Cadastrar() {
    return (
        <Container>
            <div classNameName="cadastrar">
                <div className="form_preenchimento">
                    <div className="nome"><input type="text" placeholder="Nome"/></div>
                    <div className="sobrenome"><input type="text" placeholder="Sobrenome"/></div>
                    <div className="email"><input type="email" id="email" pattern=".+@globex\.com" size="30" placeholder="Email"/></div>
                    <div className="conf_email"><input type="email" id="email" pattern=".+@globex\.com" size="30" placeholder="Confirmação de Email"/></div>
                    <div className="senha"><input type="password" id="ssn" maxlength={32} placeholder="Senha"/></div>
                    <div className="conf_senha"><input type="password" id="ssn" maxlength={32} placeholder="Confirmação de Senha"/></div>
                </div>

            <div className="botao_cadastrar"><button>Cadastrar-se</button></div>
            </div>
            
            <Rodape />
    </Container>
    )
}