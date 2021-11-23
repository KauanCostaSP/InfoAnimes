import { CabecalhoComp } from './styled';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';
import { useHistory } from 'react-router';



    


export default function index() {
    
    
    let logado = cookie.get('perfil-logado')

   
    function lerusuariologado() {
        let h;
        if (logado === null) {
            h = "/cadastrar"
        } else {
            h = "/perfil-logado"
        }

        return h;
    }

    function sair() {
        cookie.set('perfil-logado', JSON.stringify(null))
    }
    

    return (
        <CabecalhoComp>
            <div className="itens-start">
            <Link className="item-logo"to="/home"> <img src="/assets/images/logo.PNG" alt="" /> </Link>
            </div>

            <div className="itens">
            <Link className="item-1" to="/home" >Home</Link>
            <Link className="item-2" to="/sobre" >Sobre</Link>
            <Link className="item-3" to="/comunidades">Comunidade</Link>
            <Link className="item-5" to="/catalogos">Catalogos</Link>
            </div>
                 
            <div className="itens-end">
                <Link className="item-usuario" to={lerusuariologado}> <img src="/assets/images/Usuario.png" alt="" /> </Link>
            </div> 
        </CabecalhoComp>
    )
}