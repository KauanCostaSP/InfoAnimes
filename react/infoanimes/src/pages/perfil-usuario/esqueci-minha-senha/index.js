import { Container } from "./styled"
import { Link } from "react-router-dom"

export default function Registrar() {
    return (
        <Container>
    <div className="Container">  
        <Link className="voltar-home" to="/cadastrar"> <img className="img-voltar" src="../../../assets/images/seta-esquerda (1).png" alt="" /> </Link> 
        <div className="conteudo-login">   
        <div id="retangulo">
                <div className="campo-email"><input type="email" id="email" maxlength={32} placeholder="Email" size="40" /></div>
                <div className="campo-senha"><input type="password" id="senha" maxlength={32} placeholder="Senha" size="40" /></div>
                <div className="entrar"><button>Entrar</button></div>
                <div className="esqueci-senha"> Esqueci minha senha </div>
        </div>
        </div>
    </div>
        </Container>
    )
}