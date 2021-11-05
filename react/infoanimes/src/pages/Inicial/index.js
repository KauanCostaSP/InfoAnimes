import { Container } from './styled'
import Cabecalho from '../../components/cabecalho'
import { Link } from 'react-router-dom'
import Rodape from '../../components/rodapé'

import CardCatalogo from '../../components/inicial/card-catalogo'

export default function inicio() {
    return (
        <Container>
            <Cabecalho />
            
            

            <div className="conteudo">
            <div className="texto">
                <div className="t1-titulo">Conecte-se com pessoas</div>
                <div className="t2-texto">Crie a sua própria comunidade ou faça parte de uma Compartilhe seu conhecimento </div>
            </div>
            <div className="comunidades">
                <div className="card">
                    <img classNameName="img-card" src="../../../assets/images/Nf-Naruto.jpeg" alt=""/>
                    <div className="info">
                        <a href="/home" className="bt">Mangás</a>
                        <a href="/home" className="bt">Tradução</a>
                        <h1>Mangá</h1>
                        <p>scan aberta de tradução de mangas, indicamos sites de tradução e traduzimos, pedimos direitos autorais embora não sejamos profissionais...</p>
                        <a href="/home" className="btn">Entrar</a>
                    </div>
                </div>

                <div className="card">
                    <img classNameName="img-card" src="../../../assets/images/lol.jpeg" alt=""/>
                    <div className="info">
                        <a href="/home" className="bt">Mangás</a>
                        <a href="/home" className="bt">Tradução</a>
                        <h1>Mangá</h1>
                        <p>scan aberta de tradução de mangas, indicamos sites de tradução e traduzimos, pedimos direitos autorais embora não sejamos profissionais...</p>
                        <a href="/home" className="btn">Entrar</a>
                    </div>
                </div>


                <div className="card">
                    <img classNameName="img-card" src="../../../assets/images/Darlin.jpeg" alt="" style={{zIndex: 2}} />
                    <div className="info">
                        <a href="/home" className="bt">Mangás</a>
                        <a href="/home" className="bt">Tradução</a>
                        <h1>Mangá</h1>
                        <p>scan aberta de tradução de mangas, indicamos sites de tradução e traduzimos, pedimos direitos autorais embora não sejamos profissionais...</p>
                        <a href="/home" className="btn">Entrar</a>
                    </div>
                </div>


                <div className="card">
                    <img classNameName="img-card" src="../../../assets/images/Nf-Kakegurui.jpeg" alt="" style={{zIndex: 1}} />
                    <div className="info">
                        <a href="/home" className="bt">Mangás</a>
                        <a href="/home" className="bt">Traduçaõ</a>
                        <h1>Mangá</h1>
                        <p>scan aberta de tradução de mangas, indicamos sites de tradução e traduzimos, pedimos direitos autorais embora não sejamos profissionais...</p>
                        <a href="/home" className="btn">Entrar</a>
                    </div>
                </div>

                <div className="card">
                    <img classNameName="img-card" src="../../../assets/images/OnePeace.jpeg" alt=""/>
                    <div className="info">
                        <a href="/home" className="bt">Mangás</a>
                        <a href="/home" className="bt">Traduçaõ</a>
                        <h1>Mangá</h1>
                        <p>scan aberta de tradução de mangas, indicamos sites de tradução e traduzimos, pedimos direitos autorais embora não sejamos profissionais...</p>
                        <a href="/home" className="btn">Entrar</a>
                    </div>
                </div>
            </div>
            <Link className="cadastrar" to="/comunidades"><button>cadastrar</button></Link>
        </div>

            <div className="informacao">
                <div className="t1">Busque Diversidade</div>
                <div className="img-completa">
                <div className="barra">Tudo que você mais gosta <b>EM UM SÓ LUGAR</b> <span>ESTANDO ÀTOA, OU APENAS A PROCURA DE NOVAS IDÉIAS , NOVIDADES OU ATÉ MESMO NOVAS AMIZADES</span> </div>
                <div className="imagem"><img src="../../../assets/images/Imagem.png" alt="" /></div>
                <div className="barra2"></div>
                </div>
            </div>

            <div className="apresentacao">
                <div className="descricao">
                    <div className="titulo">Use a sua criatividade ... Recursos personalizados</div>
                    <div className="subtitulo">Conheça nossos catalogos</div>
                    <div className="textos">
                    <div className="texto1">InfoAnimes permite que qualquer um possa navegar de forma divertida e segura</div>
                    <div className="texto2">Veja animes que estão em alta, fique por dentro das novidades</div>
                    </div>
                </div>
            </div>
                <div className="catalogos">
                    
                    <CardCatalogo
                        img="/assets/images/Darlin.jpeg"
                        desc="comp "
                    />

                    <CardCatalogo
                        img="/assets/images/Darlin.jpeg"
                        desc="comp "
                    />

                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />
                    
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />
                    
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />
                    
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />
                    
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />
                    
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />
                    
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />
                    
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />
                    
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />

                
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp"
                    />
                    
                
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />
                    
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />
                
                </div>

                <Link className="botao" to="catalogos"><button>Saiba Mais</button></Link>
            <Rodape />
        </Container>
    )
}