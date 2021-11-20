import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

import { Container } from "./styled"
import { Link, useHistory } from "react-router-dom"
import { useState, useRef } from "react"
import cookie from 'js-cookie'
import api from "../../../service/api"
const Api = new api();



export default function Login() {
    
   
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
    
        const navig = useHistory();
    
        const loading = useRef(null);
    
        const logar = async () => {
            loading.current.continuousStart();
            
            let r = await Api.logar(email, senha);
            console.log(r)
            

           
            if(r.erro) {
                toast.error(`${r.erro}`);
                loading.current.complete();
            } else {

                if (email === "" || senha === "") {
                    toast.error("Tem que preencher tudo, bakaaaaaa")
                }
                    cookie.set('perfil-logado', JSON.stringify(r));
                    navig.push('/perfil-logado')
                }
            }
    
    
    
    
    
    
    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#A245FF" ref={loading} />
    <div className="Container">
        <Link className="voltar-home" to="/cadastrar"> <img className="img-voltar" src="../../../assets/images/seta-esquerda (1).png" alt="" /> </Link> 
        <div className="conteudo-login">
        <div id="retangulo">
                <div className="campo-email"><input type="email" id="email" maxlength={32} placeholder="Email" size="40" value={email} onChange={ e => setEmail(e.target.value)} /></div>
                <div className="campo-senha"><input type="password" id="senha" maxlength={32} placeholder="Senha" size="40" value={senha} onChange={e => setSenha(e.target.value)} /></div>
                <div className="entrar"><button onClick={logar}>Entrar</button></div>

                
                <Link className="esqueci-senha" to="/esqueci-senha"> <div ClassName="esqueci-botao">  Esqueci minha senha </div> </Link>

        
        </div>
        </div>
    </div>
        </Container>
    )
}