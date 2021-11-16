import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

import { useState, useRef } from "react"
import Cabecalho from "../../../components/cabecalho"
import Rodape from "../../../components/rodapé"
import { Container } from "./styled"
import api from "../../../service/api"
const Api = new api();


export default function Catalogo(props) {
    const [anime] = useState(props.location.state)
    const [comentarios, setComentarios] = useState([]);
    const [idAnime, setIdAnime] = useState(anime.id_anime)
    const [comentario, setComentario] = useState('')

    
    const loading = useRef(null);


    const listarcomentarios = async () => {
        loading.current.continuousStart()
       
        let resp = await Api.listarcoment(idAnime);
        console.log(resp)
        setComentarios(resp)

        loading.current.complete()
    }

    const adicionarcoment = async () => {
        loading.current.continuousStart()

        let resp = await Api.adicionarcoment(comentario, idAnime)
        console.log(idAnime)

        loading.current.complete();

        listarcomentarios();
    }

    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#A245FF" ref={loading} />
            <Cabecalho />
            <div className="catalogo" >
            <div className="adi_fav"><img src="/assets/images/icon (1).svg" alt="adicionar a favoritos" /></div>

            <div className="info_basica" style={{backgroundImage: anime.ds_capa}}>

                <div className="info_b">

                    <div className="ano"> {anime.dt_ano} |</div>
                        <div className="classificacao">Classificação {anime.ds_classificacao}</div>
                    <div className="temporada"> | {anime.ds_temporadas} temporadas</div>

                  
                </div>

            </div>

            <div className="info_gerais">
                <div className="gen_est">
                    <div className="genero">
                        <div className="tit_gen">Genêros</div>
                        <div className="text_gen">{anime.ds_genero}</div>
                    </div>

                    <div className="estrelando">
                        <div className="tit_est">Estrelando</div>
                        <div className="atores">
                           <div className="est">
                                {anime.ds_estrelando}
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="sinopse">
                    <div className="tit_s"><div className="linha_red"></div>Sinopse</div>
                        <div className="text_s">{anime.ds_sinopse}</div>
                </div>

                <div className="sobre">
                    <div className="tit_s"> <div className="linha_red"></div>Sobre</div>
                        <div className="text_s">{anime.ds_sobre}</div>
                </div>

                <div className="enredo">                  
                    <div className="tit_s"> <div className="linha_red"></div>Enredo</div>
                    <div className="text_s">{anime.ds_enredo}</div>
                </div>
            </div>

            <div className="videos">
                <div className="titulo_v">Vídeos | <span className="nome_anime_v">{anime.nm_anime}</span></div>
                
                <div className="trailers">
                    <div className="trailer"><div className="titulo_video"><div className="linha_red"></div>Kakegurui xx (Trailer)</div>
                    <video  width="320" height="240" controls> 
                        <source src="../../../assets/videos/trailer_kakegurui_1.mp4" type="video/mp4"/>
                    </video></div>

                    <div className="trailer"><div className="titulo_video"><div className="linha_red"></div>Kakegurui (Trailer)</div>
                    <video  width="320" height="240" controls> 
                        <source src="../../../assets/videos/trailer_kakegurui_2.mp4" type="video/mp4"/>
                    </video></div>
                </div>
            </div>

            <div className="comentarios">
                <div className="coment">Comentários 31</div>
                <div className="frase">Lembre-se de manter o respeito nos comentários e seguir nossas diretrizes da comunidade</div>

                    
                    <div><button onClick={listarcomentarios}>Carregar comentarios</button></div>

                <div className="novo_coment">
                    <div className="perfil"><img src="../../../assets/images/perfil_ket_otaku.png" height="49" width="57" alt="Perfil usuario" /></div>
                    <div className="adicionar"> <textarea name="adi" id="adi" cols="30" rows="10" placeholder="Adicionar um comentário público..." value={comentario} onChange={e => setComentario(e.target.value)} ></textarea><hr /></div>
                    <div> <button onClick={adicionarcoment}> enviar</button> </div>    
                </div>

                <div className="coment_postado">

                    <div className="usuario_postado">
                        <img src="../../../assets/images/perfil_sas4.png" alt="Perfil usuario"/>
                        <div className="usu_dat">
                            <div className="nick_postado">$as4Midori</div>
                            <div className="data_postado">2 dias atrás</div>
                        </div>
                        
                    </div>

                        {comentarios.map((i) => 
                            <div className="comentario">{i.ds_comentario}</div>
                    )}

                </div>
            </div>
        </div>
            <Rodape />
        </Container>
    )
}