import { Container } from "./styled"
import { Link } from "react-router-dom"
import Rodape from "../../../components/rodapé"

export default function Login() {
    return (
        <Container>
            <div className="login">
                <div className="em_sen"><input type="email" id="email"  pattern=".+@globex.com" size="30" placeholder="Email" required /></div>
                <div className="em_sen"><input type="password" id="ssn" maxlength={32} placeholder="Senha" /></div>
               
            
                <div className="botoes">
                    <Link className="botao_login" to="/home"><button>Log in</button></Link>
                    <Link className="cadastrar" to="/cadastrar"><button> Cadastrar-se </button></Link>
                </div>

                
                <Link className="esqueceu_senha" to="/editarsenha">esqueci minha senha</Link>
            </div>

            <Rodape />
        </Container>
    )
}