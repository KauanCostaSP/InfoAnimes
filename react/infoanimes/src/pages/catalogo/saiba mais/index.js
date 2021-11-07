import Cabecalho from '../../../components/cabecalho/index'
import BoxSaibaMais from '../../../components/catalogo 1/saiba-mais/box-anime'
import Rodape from '../../../components/rodapé'
import { Container } from './styled'

export default function saibaMais() {
    return (
        <Container>
            <Cabecalho />
            <div className="corpo" >
            <div className="back">
            <div className="cabecalho-corpo">
                <div className="barrinha"></div>
                <div className="titulo"> Clássicos </div>
                <div className="icone"> <button><img src="../../../assets/images/Menu.ico" alt="" /></button> </div>
            </div>

            <div className="conteudo">
                
                    <BoxSaibaMais img="/assets/images/Kakegurui.png" desc="kakegurui"/>


                    <BoxSaibaMais img="/assets/images/Pokemon.jpg" desc="comp"/>


                    <BoxSaibaMais img="/assets/images/Pokemon.jpg" desc="comp" />
                    

                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/SailorMoon.jpg"  alt="" />  </div>
                    <div className="descricao">Sailor Moon</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Thundercats.jpg " alt="" />  </div>
                    <div className="descricao">Thundercats</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/SpeedRacer.jpg"  alt="" />  </div>
                    <div className="descricao">SpeedRacer</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Outlaw Star.png" alt="" />  </div>
                    <div className="descricao">Outlaw Star</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/OnePeace.jpeg" alt=""/>  </div>
                    <div className="descricao">One Piece</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/CowboyBebop.jpg"  alt=""/>  </div>
                    <div className="descricao">Cowboy Bebop</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Berserk.png" alt="" />  </div>
                    <div className="descricao">Bersek</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Gundam 08TH.png" alt="" />  </div>
                    <div className="descricao">Gundam 08TH</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Akira.png" alt="" />  </div>
                    <div className="descricao">Akira</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/YuYu.jpg"  alt=""/>  </div>
                    <div className="descricao">Yu Yu Hakusho</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Capeto.png" alt="" />  </div>
                    <div className="descricao">Tenchi Muyo</div>
                </div>
                <div className="catalogo">
                    <div className="imagem">  <img src="../../../assets/images/Hokuto no Ken.jpg"  alt=""/>  </div>
                    <div className="descricao">Hokuto no Ken</div>
                </div>
            </div>
            </div>
            </div>
            <Rodape />
        </Container>
    )
}