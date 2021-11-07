import { Container } from "./styled"
import { Link, useHistory } from "react-router-dom"
import { useState, useRef } from "react"

import api from "../../../service/api"
const Api = new api();

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navig = useHistory();
    const loading = useRef(null);

    const logar = async () => {
        loading.current.continuousStart();

        let resp = await Api.login(email, senha);
        if(resp.erro) {
            toast.error(`${resp.erro}`);
            loading.current.complete();
        }else {
            Cookies.set('perfil-logado', JSON.stringify(resp));
            navig.push('/perfil-logado')
        }
    }
}

export default function Registrar() {
    return (
        <Container>
            <ToastContainer/>
    <div className="Container">
        <Link className="voltar-home" to="/cadastrar"> <img className="img-voltar" src="../../../assets/images/seta-esquerda (1).png" alt="" /> </Link> 
        <div className="conteudo-login">
        <div id="retangulo">
        <div className="texto-esqueci-senha"> Insira suas informações abaixo! </div>
                <div className="campo-email"><input type="email" id="email" maxlength={32} placeholder="Email" size="40" /></div>
                <div className="campo-senha"><input type="password" id="senha" maxlength={32} placeholder="Senha" size="40" /></div>
                <div className="entrar"><button>Entrar</button></div>
                <Link className="esqueci-senha" to="/esqueci-senha"> <div ClassName="esqueci-botao">  Esqueci minha senha </div> </Link>
        </div>
        </div>
    </div>
        </Container>
    )
}