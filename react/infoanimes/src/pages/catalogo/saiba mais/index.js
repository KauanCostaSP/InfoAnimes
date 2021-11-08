import { ToastContainer, toast } from 'react-toastify';
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
    const [img, setImg] = useState('');
    const [titulo, setTitulo] = useState('');
    
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
                      <BoxSaibaMais img={i.ds_capa} desc={i.nm_anime} />
                    )}

                    <BoxSaibaMais img="/assets/images/Kakegurui.png" desc="kakegurui"/>


                    <BoxSaibaMais img="/assets/images/Pokemon.jpg" desc="comp"/>


                    <BoxSaibaMais img="/assets/images/Pokemon.jpg" desc="comp" />
                    

                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/SailorMoon.jpg"  alt="" />  </div>
                    <div className="descricao">Sailor Moon</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Thundercats.jpg " alt="" />  </div>
                    <div className="descricao">Thundercats</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/SpeedRacer.jpg"  alt="" />  </div>
                    <div className="descricao">SpeedRacer</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Outlaw Star.png" alt="" />  </div>
                    <div className="descricao">Outlaw Star</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/OnePeace.jpeg" alt=""/>  </div>
                    <div className="descricao">One Piece</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/CowboyBebop.jpg"  alt=""/>  </div>
                    <div className="descricao">Cowboy Bebop</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Berserk.png" alt="" />  </div>
                    <div className="descricao">Bersek</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Gundam 08TH.png" alt="" />  </div>
                    <div className="descricao">Gundam 08TH</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Akira.png" alt="" />  </div>
                    <div className="descricao">Akira</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/YuYu.jpg"  alt=""/>  </div>
                    <div className="descricao">Yu Yu Hakusho</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Capeto.png" alt="" />  </div>
                    <div className="descricao">Tenchi Muyo</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Hokuto no Ken.jpg"  alt=""/>  </div>
                    <div className="descricao">Hokuto no Ken</div>
                </div>
            </div>
            </div>
            </div>
            <Rodape />
        </Container>
    )
}