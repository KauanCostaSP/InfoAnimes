import { Container } from "./styled"
import { Link } from "react-router-dom"

export default function Registrar() {
    return (
        <Container>
    <div className="Container">  
        <Link className="voltar-home" to="/login"> <img className="img-voltar" src="../../../assets/images/seta-esquerda (1).png" alt="" /> </Link> 
        <div className="conteudo-esqueci-senha">   
        <div id="retangulo">
                <div className="texto-esqueci-senha"> Para a recuperação da sua senha é necessario que insira o seu email</div>
                <div className="campo-email"><input type="email" id="email" maxlength={32} placeholder="Email" size="40" /></div>
                <div className="enviar"><button>Enviar</button></div>
                
        </div>
        </div>
    </div>
        </Container>
    )
}