import { Container } from "./styled"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <Container>
        <div className="Container">
        <Link className="voltar-home" to="/home"> <img className="img-voltar" src="../../../assets/images/seta-esquerda (1).png" alt="" /> </Link>
        <div className="box-left">
            <div className="titulo-left"> Bem vindo !</div>
            <div className="sub-titulo-left"> Ja possui uma conta registrada? <br/> por favor faça o login com suas <br/> informações pessoais</div>
            <Link className="botao-login"> <button> Log in </button> </Link>
        </div>

        <div className="box-right">
            <div className="titulo-right"> Crie uma conta </div>
            <div className="sub-titulo-right"> use seu email para registrar </div>
            <div className="campo-usuario"><input type="text" id="usuario" size="40" placeholder="Nome"/></div>
            <div className="campo-email"><input type="email" id="email" maxlength={32} placeholder="Email" size="40" /></div>
            <div className="campo-senha"><input type="password" id="senha" maxlength={32} placeholder="Senha" size="40" /></div>
            <div className="campo-senha-repetida"><input type="password" maxlength={32} placeholder="Confirmar senha" size="40" /></div>
            <div className="botao-criar-conta"> <button> Criar Conta </button></div>
        </div>
    </div>
        </Container>
    )
}