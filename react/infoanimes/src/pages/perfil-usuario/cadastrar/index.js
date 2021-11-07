
import { Container } from "./styled"
import { Link } from "react-router-dom"
import SetaVoltar from '../../../components/seta-voltar'
import { useState, useRef } from "react"
import { useHistory } from "react-router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import cookie from 'js-cookie'
import api from "../../../service/api"
const Api = new api();



export default function Registrar() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const navig = useHistory();
    const loading = useRef(null);

    const cadastrar = async () => {
        loading.current.continuousStart();

        let resp = await Api.cadastrar(nome, email, senha);
         
        if(resp.erro) {
            toast.error(`${resp.erro}`);
            loading.current.complete();
        }else {
            cookie.set('perfil-cadastrado', JSON.stringify(resp));
            navig.push('/perfil-cadastrado')
        }
    }
    
    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="red" ref={loading} />
        <div className="Container">
        <SetaVoltar/>
        <div className="box-left">
            <div className="titulo-left"> Bem vindo !</div>
            <div className="sub-titulo-left"> Ja possui uma conta registrada? <br/> por favor faça o login com suas <br/> informações pessoais</div>
            <Link className="botao-login" to="/login"> <button> Log in </button> </Link>
        </div>

        <div className="box-right">
            <div className="titulo-right"> Crie uma conta </div>
            <div className="sub-titulo-right"> use seu email para registrar </div>
            <div className="campo-usuario"><input type="text" id="usuario" size="40" placeholder="Nome" value={nome} onChange={e =>setNome(e.target.value)}/></div>
            <div className="campo-email"><input type="email" id="email" maxlength={32} placeholder="Email" size="40" value={email} onChange={e => setEmail(e.target.value)} /></div>
            <div className="campo-senha"><input type="password" id="password" maxlength={32} placeholder="Senha" size="40" value={senha} onChange={e => setSenha(e.target.value)} /></div>
            <div className="campo-senha-repetida"><input type="password" id="password" maxlength={32} placeholder="Confirmar senha" size="40" /></div>
            <div className="botao-criar-conta"> <button onClick={cadastrar}> Criar Conta </button></div>
        </div>
    </div>
        </Container>
    )
}