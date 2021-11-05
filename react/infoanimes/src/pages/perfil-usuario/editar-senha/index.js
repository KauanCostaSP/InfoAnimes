import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodapé"

export default function EditarSenha() {
    return(
<div class="conteinar_alterar">
        <div class="alterar_senha">
            <div class="usuario">
                <span class="perfil"><img src="../../../assets/images/perfil_ket_otaku.png" alt="perfil"/></span>
                <div class="nick">Ketellyn_Otaku_</div>
            </div>

            <div class="campos">
                <div class="campo"> <input type="password" id="ssn" maxlength={32} placeholder="Senha"/> </div>
                <div class="campo"> <input type="password" id="ssn" maxlength={32} placeholder="Nova Senha"/> </div>
                <div class="campo"> <input type="password" id="ssn" maxlength={32} placeholder="Confirmação"/> </div>
            </div>

            <div class="botao_alt-se"><button>Alterar senha</button></div>
        </div>
        </div>

    )
}