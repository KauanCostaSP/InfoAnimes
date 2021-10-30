import { Container } from './styled'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodapé'
import CardComunidade from '../../components/inicial/card-comunidade'
import CardCatalogo from '../../components/inicial/card-catalogo'

export default function inicio() {
    return (
        <Container>
            <Cabecalho />
            
            

            <div class="conteudo">
            <div class="texto">
                <div class="t1-titulo">Conecte-se com pessoas</div>
                <div class="t2-texto">Crie a sua própria comunidade ou faça parte de uma Compartilhe seu conhecimento </div>
            </div>
            <div class="comunidades">
                <div class="card">
                    <img className="img-card" src="../../../assets/images/Nf-Naruto.jpeg" />
                    <div class="info">
                        <a href="#" class="bt">Mangás</a>
                        <a href="#" class="bt">Tradução</a>
                        <h1>Mangá</h1>
                        <p>scan aberta de tradução de mangas, indicamos sites de tradução e traduzimos, pedimos direitos autorais embora não sejamos profissionais...</p>
                        <a href="#" class="btn">Entrar</a>
                    </div>
                </div>

                <div class="card">
                    <img className="img-card" src="../../../assets/images/lol.jpeg" />
                    <div class="info">
                        <a href="#" class="bt">Mangás</a>
                        <a href="#" class="bt">Tradução</a>
                        <h1>Mangá</h1>
                        <p>scan aberta de tradução de mangas, indicamos sites de tradução e traduzimos, pedimos direitos autorais embora não sejamos profissionais...</p>
                        <a href="#" class="btn">Entrar</a>
                    </div>
                </div>


                <div class="card">
                    <img className="img-card" src="../../../assets/images/Darlin.jpeg"  style={{zIndex: 2}} />
                    <div class="info">
                        <a href="#" class="bt">Mangás</a>
                        <a href="#" class="bt">Tradução</a>
                        <h1>Mangá</h1>
                        <p>scan aberta de tradução de mangas, indicamos sites de tradução e traduzimos, pedimos direitos autorais embora não sejamos profissionais...</p>
                        <a href="#" class="btn">Entrar</a>
                    </div>
                </div>


                <div class="card">
                    <img className="img-card" src="../../../assets/images/Nf-Kakegurui.jpeg" style={{zIndex: 1}} />
                    <div class="info">
                        <a href="#" class="bt">Mangás</a>
                        <a href="#" class="bt">Traduçaõ</a>
                        <h1>Mangá</h1>
                        <p>scan aberta de tradução de mangas, indicamos sites de tradução e traduzimos, pedimos direitos autorais embora não sejamos profissionais...</p>
                        <a href="#" class="btn">Entrar</a>
                    </div>
                </div>

                <div class="card">
                    <img className="img-card" src="../../../assets/images/OnePeace.jpeg" />
                    <div class="info">
                        <a href="#" class="bt">Mangás</a>
                        <a href="#" class="bt">Traduçaõ</a>
                        <h1>Mangá</h1>
                        <p>scan aberta de tradução de mangas, indicamos sites de tradução e traduzimos, pedimos direitos autorais embora não sejamos profissionais...</p>
                        <a href="#" class="btn">Entrar</a>
                    </div>
                </div>
            </div>
            <div class="cadastrar"><button>cadastrar</button></div>
        </div>

            <div class="informacao">
                <div class="t1">Busque Diversidade</div>
                <div class="img-completa">
                <div class="barra">Tudo que você mais gosta <b>EM UM SÓ LUGAR</b> <span>ESTANDO ÀTOA, OU APENAS A PROCURA DE NOVAS IDÉIAS , NOVIDADES OU ATÉ MESMO NOVAS AMIZADES</span> </div>
                <div class="imagem"><img src="../../../assets/images/Imagem.png" alt="" /></div>
                <div class="barra2"></div>
                </div>
            </div>

            <div class="apresentacao">
                <div class="descricao">
                    <div class="titulo">Use a sua criatividade ... Recursos personalizados</div>
                    <div class="subtitulo">Conheça nossos catalogos</div>
                    <div class="textos">
                    <div class="texto1">InfoAnimes permite que qualquer um possa navegar de forma divertida e segura</div>
                    <div class="texto2">Veja animes que estão em alta, fique por dentro das novidades</div>
                    </div>
                </div>
            </div>
                <div class="catalogos">
                    
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

                
                    <CardCatalogo img="/assets/images/Darlin.jpeg" desc="comp" />
                    
                
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />
                    
                    <CardCatalogo
                            img="/assets/images/Darlin.jpeg"
                            desc="comp "
                    />
                
                </div>

                <div class="botao"><button>Saiba Mais</button></div>
            <Rodape />
        </Container>
    )
}