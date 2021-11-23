import cookie from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import UserOn from '../../../components/comunidade1/sala/box-users-on/user-on';
import BoxMsg from "../../../components/comunidade1/sala/box-mensagem"
import Mensagem from '../../../components/comunidade1/sala/box-mensagem/mensagem';
import { Container } from "./styled"
import UsersOn from "../../../components/comunidade1/sala/box-users-on"
import { useRef, useState, useEffect } from "react"
import api from "../../../service/api"
const Api = new api();


export default function Salas(props) {
    let logado = cookie.get('perfil-logado')
    let usuariologado = JSON.parse(logado)

    const [comunidade, setComunidade] = useState(props.location.state)
    const [iduser, setIduser] = useState(usuariologado.id_usuario)
    const [comunidades, setComunidades] = useState([])
    const [idComun, setIdComun] = useState(comunidade.id_comunidade)
    const [mensagem, setMensagem] = useState('')

    console.log(idComun)

    const listar = async () => {
        let r = await Api.listarmensagens(idComun)
        setComunidades(r)
    }


    const inserirmsg = async () => {
        let inserir = await Api.adicionarmensagem(idComun, iduser, mensagem)
        console.log(inserir)

        listar();
    }

    useEffect(() => { listar();})
    


   
    return (
        <Container>
            <ToastContainer />
           
        <div className="cabecalho-chat">
            <div className="seta-sair" > <img src="../../../assets/images/Arrow 1.svg" alt="" /></div>
            <div className="itens-direita">
                <div className="buscar"><input type="text" placeholder="Buscar..." /> </div>
                <div className="menu">...</div>
                <div className="pessoas" ><img src="../../../assets/images/pessoas-img.PNG" alt=""/></div>
            </div>
        </div>


        <div className="conteudo">
                <UserOn
                    imagem="/assets/images/imagem akali.jpg"
                    nome="@comp sala"
                />
           
           <div className="boxmsg">
                <div className="mensagens">
                    <div className="mensagem">
                        
                    {comunidades.map(x =>
                       <Mensagem
                            user={usuariologado.nm_usuario}
                            msg={comunidade.ds_mensagem}
                   />
                       )}
                    
                    
                    </div> 
                </div>
                
                    <div className="digite-mensagem"><input type="text" placeholder=" Digite uma mensagem" value={mensagem} onChange={e => setMensagem(e.target.value)} />  </div>
                    <div><button onClick={inserirmsg}> enviar </button></div>
            </div>
            
        </div>
    </Container>
    )
}