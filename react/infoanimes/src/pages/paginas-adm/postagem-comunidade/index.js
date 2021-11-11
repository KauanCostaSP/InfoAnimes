import { useState, useRef } from "react"

import { Container } from "./styled"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import api from "../../../service/api"
const Api = new api();

export default function Postagem_comuni() {
    const [capa, setCapa] = useState('')
    const [nome, setNome] =useState('')
    const [idusu, ] = useState(0)
    const [descricao, setDescricao] = useState('')
 
    
    const loading = useRef(null);

    const AdcComun = async () =>  {
        loading.current.continuousStart();

        let resp = await Api.adicionarcomunidade(capa, nome, idusu, descricao)

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
            <div className="adi_capa">Capa<input type="text" id="capa" size="30" placeholder="Capa" value={capa} onChange={e => setCapa(e.target.value)}/></div>
            <div className="comunidade_nome">Comunidade<input type="text" id="comuni" size="30" placeholder="Nome da comunidade" value={nome} onChange={e => setNome(e.target.value)}/></div>
            <div className="descricao">Descrição<input type="text" id="descricao" size="30" placeholder="Descrição da comunidade" max="1000" value={descricao} onChange={e => setDescricao(e.target.value)}/></div>
            <div className="botao"><button onClick={AdcComun}> Criar </button></div>
        </Container>
    )
}