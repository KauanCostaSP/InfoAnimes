import { Container } from "./styled"
import { Link } from 'react-router-dom'
export default function EditarSenha() {
    return(
        <Container>
        
        <div className="Container">
        <Link className="voltar-home" to="/perfil-nao-logado"> <img className="img-voltar" src="../../../assets/images/seta-esquerda (1).png" alt="" /> </Link> 
        <div className="conteudo-editar">
        <div id="retangulo">
        <div className="usuario"> <img src="../../../assets/images/usuario-nao-logado.png" alt="Foto de Perfil"/> (Usuário) </div>
                <div className="campo-senha"><input type="password" id="senha" maxlength={32} placeholder="Senha" size="40" /></div>
                <div className="campo-senha"><input type="password" id="senha" maxlength={32} placeholder="Nova Senha" size="40" /></div>
                <div className="campo-senha"><input type="password" id="senha" maxlength={32} placeholder="Confirmação" size="40" /></div>
                <div className="alterar"><button>Alterar Senha</button></div>
        </div>
        </div>
    </div>
            </Container>

    )
}