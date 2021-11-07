import { CabecalhoComp } from './styled';
import { Link } from 'react-router-dom';

export default function index() {
    return(
        <CabecalhoComp>
            <Link className="voltar-home" to="/home"> <img className="img-voltar" src="../../../assets/images/seta-esquerda (1).png" alt="" /> </Link>
        </CabecalhoComp>
    )
}