import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import { Container } from './styled'
import BoxComunidade from '../../../components/comunidade1/comunidade/box-comunidade';
import Cabecalho from '../../../components/cabecalho'
import Rodape from '../../../components/rodapé'
import { Link } from 'react-router-dom';
import api from '../../../service/api'
import { useState, useRef } from 'react'
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

    return (
        <Container>
            <ToastContainer />
            <LoadingBar color="#A245FF" ref={loading} />
            <Cabecalho />


             <div className="conteudo">

                <div className="COMUNIDADES">

                <Link className="atalho_adm" to="/postagem-comunidade"> Provisório mas vai né </Link>
                    <div> <button onClick={ListComun}> listar comunidades</button></div>

                <div className="conteudo-comunidade">
                    <div className="box1">

                            {comunidades.map((i) => 
                                <BoxComunidade comun={i}/>
                    )}

                   </div>

                </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>

                    <div class="comunidade">
                        <div className="titulo">Comunidade lgbtqia+</div>
                        <div className="imagem"><img src="../../../assets/videos/Evangelion.gif" /></div>
                            <div className="acao">
                                 <div className="entrar"> <button>Entrar</button></div>
                            </div>
                    </div>
              
                </div>
                  
             </div>
             
            

             <Rodape />
    </Container>
    )
}