
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
    const [confsenha, setConfsenha] = useState('')
    
    const navig = useHistory();
    const loading = useRef(null);

    const cadastrar = async () => {
        loading.current.continuousStart();
       

        let resp = await Api.cadastrar(nome, email, senha);
        console.log(resp)
      
         
        if(resp.error) {
            toast.error(`${resp.error}`);
            loading.current.complete();

        } else {
            if (nome === "" || senha === "" || email === "" || confsenha === "") {
                toast.error("Tem que preencher tudo, abestalhado.")
                loading.current.complete();
            } else {

                if (confsenha !== senha) {
                    toast.error("As senhas tem que ser iguais, burro.")
                    loading.current.complete();
                } else {
                    cookie.set('perfil-cadastrado', JSON.stringify(resp));
                    navig.push('/perfil-cadastrado')
                }
            }
        }
    }

    return (
        <Container>
            <ToastContainer background-color="#000"/>
            <LoadingBar color="#A245FF" ref={loading} />
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
            <div className="campo-senha-repetida"><input type="password" id="password" maxlength={32} placeholder="Confirmar senha" size="40" value={confsenha} onChange={e => setConfsenha(e.target.value)}/></div>
            <Link className="botao-criar-conta" to="/perfil-nao-logado"> <button onClick={cadastrar}> Criar Conta </button></Link>
        </div>
    </div>
        </Container>
    )
}