import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import Cabecalho from '../../../components/cabecalho/index'
import BoxSaibaMais from '../../../components/catalogo 1/saiba-mais/box-anime'
import Rodape from '../../../components/rodapé'
import { Container } from './styled'
import { Link } from 'react-router-dom';
import api from '../../../service/api'
import { useState, useRef } from 'react'
const Api = new api();


export default function SaibaMais() {
    const [animes, setAnimes] = useState([]);
    
    const loading = useRef(null);

    
    const listar = async () => {
        loading.current.continuousStart();

        let resp = await Api.listaranimes()
        console.log(resp)
        setAnimes(resp)




        loading.current.complete();
    }


   
   
   
    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#A245FF" ref={loading} />
            <Cabecalho />
            <div className="corpo" >
            <div className="back">
            <div className="cabecalho-corpo">
                <div className="barrinha"></div>
                <div className="titulo" onClick={listar}> Clássicos </div>
                <Link className="icone" to="/publi_catalogo"><button ><img src="../../../assets/images/Menu.ico" alt="" /></button> </Link>
            </div>

            <div className="conteudo">
                
                  {animes.map((i) => 
                      <BoxSaibaMais info={i}/>
                    )}
            </div>
            </div>
            </div>
            <Rodape />
        </Container>
    )
}