import {Cabecalho} from "./styled";
import { Link } from 'react-router-dom';
import api from "../../../../service/api";
import { useState } from "react";
import cookie from "js-cookie";
const Api = new api();

export default function Index () {
    let logado = cookie.get('perfil-logado')
    
    let usuariologado = JSON.parse(logado)

    
    const [idAlterando, setIdAlterando] = useState(usuariologado.id_usuario);
    const [nomeantigo, setNomeantigo] = useState(usuariologado.nm_usuario);
    const [nomenovo, setNomenovo] = useState('')
    const [nome, setNome] = useState('');
    const [biografia, setBiografia] = useState('');
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState('');
    
    
    
    async function  Alterar() {
     
        
        let r = Api.alterarInformacoes(idAlterando, nome, biografia, telefone, genero)
        
        
        cookie.set('perfil-logado', JSON.stringify(r));
    }

    
    return (

        <Cabecalho>

        <div className="box-1"> 
            <div className="cabecalho_box-1">
            </div>

            <div className="usuario_box-1">
                <div className="perfil_box-1"><img src="../../../assets/images/perf_ket.png" alt="Foto de Perfil"/></div>
                <div className="alterar"><button>Alterar plano de fundo</button></div>
                <div className="campo-nome"><input type="text" id="usuario" size="40" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} /></div>
                <div className="campo-usuario"><input type="text" id="usuario" size="40" placeholder="Usuário"  /></div>
                <div className="campo-biografia"><input type="text" id="usuario" size="40" placeholder="Biografia..." value={biografia} onChange={e => setBiografia(e.target.value)} /></div>
                <div className="campo-email"><input type="text" id="usuario" size="40" placeholder="Email"/></div>
                <div className="campo-telefone"><input type="text" id="usuario" size="40" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} /></div>
                <div className="campo-genero"><input type="text" id="usuario" size="40" placeholder="Gênero" value={genero} onChange={e => setGenero(e.target.value)} /></div>

            </div>

            <div className="botoes_box-1">
                <Link className="botao_voltar" to="/perfil-logado"><a href="../../PERFIL-USUARIO/config-editar-perfil/index.html"><button>Voltar</button></a></Link>
                <div className="botao_desativar" ><button onClick={Alterar}>Salvar</button></div>
            </div>






        </div>





        </Cabecalho>

    )

}