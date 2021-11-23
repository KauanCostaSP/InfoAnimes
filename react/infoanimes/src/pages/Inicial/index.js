import { Container } from './styled'
import Cabecalho from '../../components/cabecalho'
import { Link } from 'react-router-dom'
import Rodape from '../../components/rodapé'
import CardCatalogo from '../../components/inicial/card-catalogo'
import CardComunidade from '../../components/inicial/card-comunidade'
import api from '../../service/api'
import { useEffect, useState } from 'react'

const Api = new api();


export default function Inicio() {
    
    const [comunidades, setComunidades] = useState([])
    const [animes, setAnimes] = useState([])
    
   async function listarComunidadaes() {
        let r = await Api.listarcomunidadeshome();
        setComunidades(r)
    }

    async function listarCatalogo() {
        let r = await Api.listaranimeshome();
        setAnimes(r)
    }

    useEffect(() => { listarComunidadaes() }, [])
    useEffect (()=>{listarCatalogo()},[])
    return (
        <Container> 
            <Cabecalho />
            
            

            <div className="conteudo">
            <div className="texto">
                <div className="t1-titulo">Conecte-se com pessoas</div>
                <div className="t2-texto">Crie a sua própria comunidade ou faça parte de uma<br/> Compartilhe seu conhecimento </div>
            </div>
            <div className="comunidades">
               
                    
                    {comunidades.map((i) => 
                    
                    <CardComunidade comun={i} />
                        
                    )}
                    

                
            </div>
            <Link className="cadastrar" to="/cadastrar"><button>cadastrar-se</button></Link>


            <div className="informacao">
                <div className="t1">Busque Diversidade</div>
                <div className="img-completa">
                <div className="barra"> Tudo que você mais gosta <b>EM UM SÓ LUGAR</b> <span>ESTANDO ÀTOA, OU APENAS A PROCURA DE NOVAS <br/>IDÉIAS , NOVIDADES OU ATÉ MESMO NOVAS AMIZADES</span> </div>
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
                    
                    {animes.map((x) =>
                    <CardCatalogo info={x} /> 
                    )}
                    
                
                </div>

                <Link className="botao" to="catalogos"><button>Saiba Mais</button></Link>

        </div>
 
            <Rodape />
        </Container>
    )
}