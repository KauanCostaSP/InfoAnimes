import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

import Cabecalho from "../../../components/cabecalho"
import Rodape from "../../../components/rodapé"
import { useState, useRef } from "react"
import { Container } from "./styled"
import api from "../../../service/api"
const Api = new api();

export default function PubliCatalogo() {
    const [nome, setAnime] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [temporadas, setTemporadas] = useState('');
    const [genero, setGenero] = useState('')
    const [estrelando, setEstrelando] = useState('')
    const [sinopse, setSinopse] = useState('')
    const [sobre, setSobre] = useState('')
    const [enredo, setEnredo] = useState('')
    const [capa, setCapa] = useState('')
    const [ano, setAno] = useState('')
    const [video1, setVideo1] = useState('')
    const [video2, setVideo2] = useState('')
    const [imagem, setImagem] = useState('')

    const loading = useRef(null);

    const adicionarAnime = async () => {
        loading.current.continuousStart();

        let resp = await Api.adicionarcatalogo(nome, classificacao, temporadas, genero, estrelando, sinopse, sobre, enredo, capa, ano, video1, video2, imagem)
        loading.current.complete();
        toast.dark('catalogo adicionado')
        }
    
    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#A245FF" ref={loading} />
            <Cabecalho />
            <div className="catalogo" >
            <div className="adi_fav"><img src="/assets/images/icon (1).svg" alt="adicionar a favoritos" /></div>

            <div className="info_basica">

                <div className="info_b">

                        <div className="Capa"><input type="image" id="enredo" size="40" placeholder="Capa do anime" value={capa} onChange={e => setCapa(e.target.value)} /></div>
                        <div className="ano"><input type="text" id="ano" name="ano" placeholder="Ano de lançamento" max="2021" value={ano} onChange={e => setAno(e.target.value)} /> </div>
                        <div className="classificacao"> <input type="number" id="classif" name="classificacao" placeholder="Classificação indicativa" value={classificacao} onChange={e => setClassificacao(e.target.value)}/></div>
                        <div className="temporadas"><input type="text" id="temp" name="temporadas" placeholder="Número de temporadas por anime" min="1" value={temporadas} onChange={e => setTemporadas(e.target.value)}/></div>
            
                </div>

            </div>

            <div className="info_gerais">
                <div className="gen_est">
                    <div className="genero">
                        <div className="tit_gen">Genêros</div>
                        <div className="text_gen"><input type="text" id="generos" size="40" placeholder="Gêneros" value={genero} onChange={e => setGenero(e.target.value)}/>
            </div>
                    </div>

                    <div className="estrelando">
                        <div className="tit_est">Estrelando</div>
                        <div className="atores">
                           <div className="est">
                           <input type="text" id="estrelando" size="40" placeholder="Estrelando" value={estrelando} onChange={e => setEstrelando(e.target.value)}/>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="sinopse">
                    <div className="tit_s"><div className="linha_red"></div>Sinopse</div>
                        <div className="text_s"><input type="text" id="sinopse" size="40" placeholder="Sinopse" value={sinopse} onChange={e => setSinopse(e.target.value)}/></div>
                </div>

                <div className="sobre">
                    <div className="tit_s"> <div className="linha_red"></div>Sobre</div>
                        <div className="text_s"><input type="text" id="sobre" size="40" placeholder="Sobre" value={sobre} onChange={e => setSobre(e.target.value)}/></div>
                </div>

                <div className="enredo">                  
                    <div className="tit_s"> <div className="linha_red"></div>Enredo</div>
                    <div className="text_s"><input type="text" id="enredo" size="40" placeholder="Enredo" value={enredo} onChange={e => setEnredo(e.target.value)} /></div>
                </div>
            </div>

            <div className="videos">
                <div className="titulo_v">Vídeos | <span className="nome_anime_v"><div className="nome_anime_trailer">
                    <input type="nome_anime" id="produtora" size="40" placeholder="Nome do Anime" value={nome} onChange={e => setAnime(e.target.value) }/></div></span>
                </div>
                
                <div className="trailers">
                    <div className="trailer"><div className="titulo_video"><div className="linha_red"></div><input type="nome_anime" id="produtora" size="40" placeholder="Nome do Anime" value={nome} onChange={e => setAnime(e.target.value) }/> (Trailer)</div>
                    <video  width="320" height="240" controls> 
                    <input type="image" id="produtora" size="40" placeholder="Trailer do Anime" value={nome} onChange={e => setAnime(e.target.value) }/>
                    </video></div>

                    <div className="trailer"><div className="titulo_video"><div className="linha_red"></div><input type="nome_anime" id="produtora" size="40" placeholder="Nome do Anime" value={nome} onChange={e => setAnime(e.target.value) }/> (Trailer)</div>
                    <video  width="320" height="240" controls> 
                    <input type="image" id="produtora" size="40" placeholder="Trailer do Anime" value={nome} onChange={e => setAnime(e.target.value) }/>
                    </video></div>
                </div>
            </div>

            <div className="Cadastrar"><button onClick={adicionarAnime} > Cadastrar </button></div>
        </div>
            <Rodape />
        </Container>
    )
}