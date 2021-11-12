import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef } from "react"
import { Container } from "./styled"
import api from "../../../service/api"
const Api = new api();

export default function PubliCatalogo() {
    const [animes, setAnimes] = useState([]);
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
            <div className="nome_anime_trailer">nome do anime<input type="nome_anime" id="produtora" size="40" placeholder="Nome do Anime" value={nome} onChange={e => setAnime(e.target.value) }/></div>
            <div className="classificacao">| Classificação <input type="number" id="classif" name="classificacao" placeholder="Classificação indicativa" value={classificacao} onChange={e => setClassificacao(e.target.value)}/></div>
            <div className="temporadas">| Temporadas<input type="text" id="temp" name="temporadas" placeholder="Número de temporadas por anime" min="1" value={temporadas} onChange={e => setTemporadas(e.target.value)}/></div>
            <div className="generos">Gênero<input type="text" id="generos" size="40" placeholder="Gêneros" value={genero} onChange={e => setGenero(e.target.value)}/></div>
            <div className="estrelando">Estrelando<input type="text" id="estrelando" size="40" placeholder="Estrelando" value={estrelando} onChange={e => setEstrelando(e.target.value)}/></div>
            <div className="sinopse">Sinopse<input type="text" id="sinopse" size="40" placeholder="Sinopse" value={sinopse} onChange={e => setSinopse(e.target.value)}/></div>
            <div className="sobre">Sobre<input type="text" id="sobre" size="40" placeholder="Sobre" value={sobre} onChange={e => setSobre(e.target.value)}/></div>
            <div className="enredo">Enredo<input type="text" id="enredo" size="40" placeholder="Enredo" value={enredo} onChange={e => setEnredo(e.target.value)} /></div>
            <div className="enredo">capa<input type="text" id="enredo" size="40" placeholder="Enredo" value={capa} onChange={e => setCapa(e.target.value)} /></div>
            <div className="ano">ano de lançamento<input type="text" id="ano" name="ano" placeholder="ano de lançamento" max="2021" /></div>
            <div className="alterar_fundo"> url da imagem<input type="text" id="imagem" size="40" placeholder="url da imagem" value={imagem} onChange={e => setImagem(e.target.value)}/></div>
            
            
            <div className="t1-titulo"><button onClick={adicionarAnime} > Cadastrar </button></div>
        </Container>
    )
}