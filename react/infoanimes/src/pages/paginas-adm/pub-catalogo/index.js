import { Container } from "../../Inicial/styled"

export default function publi_catalogo() {
    return (
        <Container>
            <div className="alterar_fundo"><button> Alterar plano de fundo </button></div>
            <div className="ano"><input type="number" id="ano" name="ano" placeholder="ano de lançamento" max="2021"/></div>
            <div className="classificacao">| Classificação<input type="number" id="classif" name="classificacao" placeholder="Classificação indicativa"/></div>
            <div className="temporadas">|<input type="number" id="temp" name="temporadas" placeholder="Número de temporadas por anime" min="1"/>Temporadas</div>
            <div className="produtora">|<input type="text" id="produtora" size="40" placeholder="Nome"/></div>
            <div className="generos">Gênero<input type="text" id="generos" size="40" placeholder="Nome"/></div>
            <div className="estrelando">Estrelando<input type="text" id="estrelando" size="40" placeholder="Nome"/></div>
            <div className="sinopse">Sinopse<input type="text" id="sinopse" size="40" placeholder="Nome"/></div>
            <div className="sobre">Sobre<input type="text" id="sobre" size="40" placeholder="Nome"/></div>
            <div className="enredo">Enredo<input type="text" id="enredo" size="40" placeholder="Nome"/></div>
            <div className="nome_anime_trailer">Videos | <input type="nome_anime" id="produtora" size="40" placeholder="Nome"/></div>
            <div className="video1"><button> Adicionar Vídeo </button></div>
            <div className="vieo2"><button> Adicionar Vídeo </button></div>
            <div className="t1-titulo"><button> Cadastrar </button></div>
        </Container>
    )
}