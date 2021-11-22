import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

import { Container } from "./styled"
import { Link, useHistory } from "react-router-dom"
import { useState, useRef } from "react"
import cookie from 'js-cookie'
import api from "../../../service/api"
const Api = new api();



export default function Postagem_comuni() {
   let logado = cookie.get('perfil-logado')
   
    const [capa, setCapa] = useState('')
    const [nome, setNome] =useState('')
    const [idusu, ] = useState(logado.id_usuario)
    const [descricao, setDescricao] = useState('')
 
    
    const loading = useRef(null);

    const AdcComun = async () =>  {
        loading.current.continuousStart();

        let resp = await Api.adicionarcomunidade(capa, nome, Number(idusu), descricao)

        console.log(resp)
        if(resp.erro) {
            toast.error(`${resp.erro}`)
            loading.current.complete();
        } else {
            loading.current.complete();
            toast.dark('Comunidade criada')
        }
    }
    
    
    
    
    
    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#A245FF" ref={loading} />
    <div className="Container">
        
        <Link className="voltar-home" to="/comunidades"> <img className="img-voltar" src="../../../assets/images/seta-esquerda (1).png" alt="" /> </Link> 
             <div className="conteudo-login">
                  <div id="retangulo">
                  <div className="add-capa"><input type="text" id="capa" size="40" placeholder="Capa (url)" value={capa} onChange={e => setCapa(e.target.value)} /></div>
                  <div className="comunidade_nome"><input type="text" id="comuni" size="40" placeholder="Nome da comunidade" value={nome} onChange={e => setNome(e.target.value)} /></div>
                  <div className="descricao"><input type="text" id="descricao" size="40" placeholder="Descrição da comunidade" max="1000" value={descricao} onChange={e => setDescricao(e.target.value)} /></div>
                  <div className="botao"><button onClick={AdcComun}>Criar</button></div>
                  </div>
             </div>

    </div>
        </Container>
    )
}