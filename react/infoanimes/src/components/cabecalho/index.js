import { CabecalhoComp } from './styled';
import { Link } from 'react-router-dom';

export default function index() {
    return(
        <CabecalhoComp>
            <div className="itens-start">
            <Link className="item-logo"to="/home"> <img src="/assets/images/logo.PNG" alt="" /> </Link>
            </div>

            <div className="itens">
            <Link className="item-1" to="/home" >Home</Link>
            <Link className="item-2" to="/sobre" >Sobre</Link>
            <Link className="item-3" to="/comunidades">Comunidade</Link>
            <Link className="item-4" to="/favoritos">Favoritos</Link>
            <Link className="item-5" to="/catalogos">Catalogos</Link>
            </div>
                 
            <div className="itens-end">
            <Link className="item-usuario" to="/cadastrar"> <img src="/assets/images/Usuario.png" alt=""/> </Link>
            </div> 
        </CabecalhoComp>
    )
}