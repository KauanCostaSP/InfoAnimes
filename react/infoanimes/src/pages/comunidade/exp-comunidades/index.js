import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import { Container } from './styled'
import BoxComunidade from '../../../components/comunidade1/comunidade/box-comunidade';
import Cabecalho from '../../../components/cabecalho'
import Rodape from '../../../components/rodapé'
import { Link } from 'react-router-dom';
import api from '../../../service/api'
import { useState, useRef, useEffect } from 'react'
const Api = new api();




export default function Index() {
   const [comunidades, setComunidades] = useState([])
   
    const loading = useRef(null);
    
    const ListComun = async () => {
        loading.current.continuousStart()
        
        let resp = await Api.listarcomunidades()
        setComunidades(resp)

        loading.current.complete();
    }


    useEffect (()=>{ListComun()},[])


    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#A245FF" ref={loading} />
            <Cabecalho />


             <div className="conteudo">

                <div className="COMUNIDADES">

                <Link className="atalho_adm" to="/postagem-comunidade"> Provisório mas vai né </Link>

                    {comunidades.map((i) => 
                                <BoxComunidade comun={i}/>
                    )}

                    
                    
              
                </div>
                  
             </div>
             
            

             <Rodape />
    </Container>
    )
}