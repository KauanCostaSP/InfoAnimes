import Cabecalho from "../../../components/cabecalho"
import Rodape from "../../../components/rodapé"
import { Container } from "./styled"

export default function Catalogo() {
    return (
        <Container>
            <Cabecalho />
            <div className="catalogo" >
            <div className="adi_fav"><img src="/assets/images/icon (1).svg" alt="adicionar a favoritos" /></div>

            <div className="info_basica">
                <div className="situacao">Novo</div>

                <div className="info_b">
                    <div className="ano">2014 |</div>
                    <div className="classificacao">Classificação 14</div>
                    <div className="temporada"> | 3 temporadas |</div>
                    <div className="produtora">Animes Shounen </div>
                </div>

            </div>

            <div className="info_gerais">
                <div className="gen_est">
                    <div className="genero">
                        <div className="tit_gen">Genêros</div>
                        <div className="text_gen">Japonês, Animes – mistério e suspense, Séries baseadas em mangá, Anime sobre a escola, Animes Shounen, Animes com drama, Suspense para TV, Séries de anime</div>
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
                    <div className="text_s">O anime se passa na Hyakkaou, uma academia privada bastante influente no Japão. Nesta escola, o principal foco são os jogos de azar, onde os alunos podem fazer apostas muito rígidas e complexas, então, os estudantes que sabem trapacear nos ‘’games’’ sempre se dão bem, mas há aqueles capazes de descobrir as falcatruas e virar o jogo. A obra foca, principalmente, em Yumeko Jabami, uma colegial com grandes habilidades nesses tipos de apostas e que adora correr riscos; a jovem possui a enorme vontade de jogar contra os membros do Conselho Estudantil, pois eles utilizam métodos rígidos, nos quais também colocam a vida do apostador em risco, deixando a garota animada, pois adora correr perigo. No decorrer do anime, ela vai enfrentando todos os integrantes do Comitê Escolar, importando-se pouco com a vitoria ou a derrota, apenas deseja enfrentá-los; ademais, vem fazendo diversas amizades na trama.</div>
                </div>

                <div className="sobre">
                    <div className="tit_s"> <div className="linha_red"></div>Sobre</div>
                    <div className="text_s">Kakegurui é um mangá e anime japonês criado por Homura Kawamoto e animado pelo estúdio Mappa, a obra passa no estilo de vida escolar misturado a jogos de azar. Mesmo possuindo três protagonistas, o foco maior fica em Yumeko Jabami, que demonstrou ser especialista em apostas e, principalmente, em descobrir trapaças. O instituto possui um Conselho Estudantil muito rígido, além das regras que também são bastante rigorosas, a qual trata os apostadores ruins como a escória da instituição, mais conhecidos como ‘’bichos de estimação’’, já os melhores colegiais possuem diversos benefícios e, dependendo de suas habilidades, podem entrar no Comitê Escolar.</div>
                </div>

                <div className="enredo">                  
                    <div className="tit_s"> <div className="linha_red"></div>Enredo</div>
                    <div className="text_s">O enredo iniciou com uma nova aluna chegando à instituição, cujo nome é Yumeko Jabami, sendo a protagonista do anime. Ela é uma garota muito bonita, ou seja, chamou a atenção de todos os garotos da classe, além de poucos olhares invejosos, principalmente de Saotome Mary, outra personagem principal. Após saber de algumas coisas sobre o instituto com a ajuda de Suzui, a jovem foi desafiada para um jogo de azar, esta que é uma pratica tradicional na escola. Inicialmente, a garota se encontrava perdendo a aposta, porém, estava apenas vendo a forma que sua adversária jogava para descobrir como ela trapaceava e, assim, poder ganhar o jogo. No final, a protagonista venceu a sua oponente mesmo com uma desvantagem enorme, deixando a moça completamente endivida. Um pouco depois, Ryota, que havia se tornado um dos melhores amigos da Yumeko, explicou-lhe como funcionava o sistema de pochi e mike (cão e gato) na academia e um pouco sobre o rígido Conselho Estudantil que dominava a escola, deixando a garota extremamente empolgada e excitada, a qual passou a querer enfrentar todos os membros do Comitê Escolar, principalmente a presidente deste.</div>
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

                    <div className="rodape_comentario">
                        <div className="curtidas">
                            <div className="like"><img src="../../../assets/images/like.png" alt=""/>17</div>
                            <div className="deslike"><img src="../../../assets/images/deslike.png" alt=""/><div className="cont_deslike">0</div></div>
                        </div>
                        
                    </div>

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