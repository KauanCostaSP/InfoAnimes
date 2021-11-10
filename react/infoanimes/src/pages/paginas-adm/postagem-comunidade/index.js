import { Container } from "./styled"

export default function Postagem_comuni() {
    return (
        <Container>
            <div className="adi_capa"><button> Adicionar capa </button></div>
            <div className="comunidade_nome">Comunidade<input type="text" id="comuni" size="30" placeholder="Nome da comunidade"/></div>
            <div className="descricao">Descrição<input type="text" id="descricao" size="30" placeholder="Descrição da comunidade" max="1000"/></div>
            <div className="botao"><button> Criar </button></div>
        </Container>
    )
}