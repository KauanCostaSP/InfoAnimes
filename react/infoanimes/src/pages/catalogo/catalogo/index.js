import { useState } from "react"
import Cabecalho from "../../../components/cabecalho"
import Rodape from "../../../components/rodapé"
import { Container } from "./styled"

export default function Catalogo(props) {
    const [anime, ] = useState(props.location.state)
    
    return (
        <Container>
            <Cabecalho />
            <div className="catalogo" >
            <div className="adi_fav"><img src="/assets/images/icon (1).svg" alt="adicionar a favoritos" /></div>

            <div className="info_basica" style={{backgroundImage: anime.ds_capa}}>
                <div className="situacao">Novo</div>

                <div className="info_b">

                    <div className="ano"> {anime.dt_ano} |</div>
                        <div className="classificacao">Classificação {anime.ds_classificacao}</div>
                    <div className="temporada"> | {anime.ds_temporadas} temporadas |</div>
                    <div className="produtora">{anime.ds_genero} </div>

                  
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
                                <div className="text_est">Saori Hayami</div>
                                <div className="text_est"> Yuki Wakai</div>
                                <div className="text_est"> Yu Serizawa</div>
                                <div className="text_est"> Ayaka Fukuhara</div>
                            </div>
                            <div className="est">
                                <div className="text_est">Tatsuya Tokutake</div>
                                <div className="text_est">Minami Tanaka</div>
                                <div className="text_est"> Karin Nanami</div>
                                <div className="text_est">Tomokazu Sugita</div>
                            </div>
                            <div className="est">
                                <div className="text_est">Miyuki Sawashiro</div>
                                <div className="text_est">Mariya Ise</div>
                                <div className="text_est">Mayu Udono</div>
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
                <div className="titulo_v">Vídeos | <span className="nome_anime_v">Kakegurui</span></div>
                
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

                <div className="novo_coment">
                    <div className="perfil"><img src="../../../assets/images/perfil_ket_otaku.png" height="49" width="57" alt="Perfil usuario" /></div>
                    <div className="adicionar"> <textarea name="adi" id="adi" cols="30" rows="10" placeholder="Adicionar um comentário público..." ></textarea><hr /></div>
                </div>

                <div className="coment_postado">

                    <div className="usuario_postado">
                        <img src="../../../assets/images/perfil_sas4.png" alt="Perfil usuario"/>
                        <div className="usu_dat">
                            <div className="nick_postado">$as4Midori</div>
                            <div className="data_postado">2 dias atrás</div>
                        </div>
                        <div className="responder">Responder</div>
                        
                    </div>

                    <div className="comentario">Eu cheguei agora nesse mundo dos animes e esse foi o segundo que eu vi e simplesmente me apaixonei, cada personagem tem o seu jeito que te deixa preso no anime. A inteligência da Yumeko é ótima e as apostas vão ficando cada vez mais surpreendentes,nunca sabemos o que podem apostar. Recomendo a todos. </div>

                    <div className="ver_respostas">Ver respostas
                            <svg
                              viewBox="0 0 18 18"
                              role="img"
                              aria-hidden="false"
                              aria-label="Fotografia do anúncio em destaque anterior"
                              focusable="false"
                              style={{height: '16px', width: '16px', display: 'block', fill: '#7E00FC'}}
                              
                            >
                              <path
                                d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                    </div>
                </div>
            </div>
        </div>
            <Rodape />
        </Container>
    )
}