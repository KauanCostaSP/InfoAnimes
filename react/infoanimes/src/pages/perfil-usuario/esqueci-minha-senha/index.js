import { Container } from "./styled"
import { Link } from "react-router-dom"

export default function Registrar() {
    return (
        <Container>
    <div className="Container">  
        <Link className="voltar-home" to="/login"> <img className="img-voltar" src="../../../assets/images/seta-esquerda (1).png" alt="" /> </Link> 
        <div className="conteudo-login">   
        <div id="retangulo">
                <div className="texto-esqueci-senha"> Insira seu email aqui em baixo, para nós recuperarmos <br/>  sua senha, e depois olhe sua caixa de entrada do email inserido! </div>
                <div className="campo-email"><input type="email" id="email" maxlength={32} placeholder="Email" size="40" /></div>
                <div className="enviar"><button>Enviar</button></div>
                
        </div>
        </div>
    </div>
        </Container>
    )
}