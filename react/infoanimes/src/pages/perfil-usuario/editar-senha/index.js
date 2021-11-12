import { Container } from "./styled"
import { Link } from 'react-router-dom'
export default function EditarSenha() {
    return(
        <Container>
        
        <div className="Container">
        <Link className="voltar-home" to="/cadastrar"> <img className="img-voltar" src="../../../assets/images/seta-esquerda (1).png" alt="" /> </Link> 
        <div className="conteudo-login">
        <div id="retangulo">
        <div className="usuario"> <img src="../../../assets/images/perf_ket.png" alt="Foto de Perfil"/> Ketellyn_Otako_ </div>
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