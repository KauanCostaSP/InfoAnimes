import Cabecalho from '../../../components/cabecalho/index'
import BoxSaibaMais from '../../../components/catalogo 1/saiba-mais/box-anime'
import Rodape from '../../../components/rodapé'
import { Container } from './styled'

export default function saibaMais() {
    return (
        <Container>
            <Cabecalho />
            <div class="corpo" >
            <div class="cabecalho-corpo">
                <div class="barrinha"></div>
                <div class="titulo">Clássicos</div>
                <div class="icone"> <button><img src="../../../assets/images/Menu.ico" alt="" /></button> </div>
            </div>

            <div class="conteudo">
                
                    <BoxSaibaMais img="/assets/images/Kakegurui.png" desc="kakegurui"/>


                    <BoxSaibaMais img="/assets/images/Pokemon.jpg" desc="comp"/>


                    <BoxSaibaMais img="/assets/images/Pokemon.jpg" desc="comp" />
                    

                <div class="catalogo">
                    <div class="imagem">  <img src="../../../assets/images/SailorMoon.jpg"  />  </div>
                    <div class="descricao">Sailor Moon</div>
                </div>
                <div class="catalogo">
                    <div class="imagem">  <img src="../../../assets/images/Thundercats.jpg " />  </div>
                    <div class="descricao">Thundercats</div>
                </div>
                <div class="catalogo">
                    <div class="imagem">  <img src="../../../assets/images/SpeedRacer.jpg"  />  </div>
                    <div class="descricao">SpeedRacer</div>
                </div>
                <div class="catalogo">
                    <div class="imagem">  <img src="../../../assets/images/Outlaw Star.png" />  </div>
                    <div class="descricao">Outlaw Star</div>
                </div>
                <div class="catalogo">
                    <div class="imagem">  <img src="../../../assets/images/OnePeace.jpeg" />  </div>
                    <div class="descricao">One Piece</div>
                </div>
                <div class="catalogo">
                    <div class="imagem">  <img src="../../../assets/images/CowboyBebop.jpg" />  </div>
                    <div class="descricao">Cowboy Bebop</div>
                </div>
                <div class="catalogo">
                    <div class="imagem">  <img src="../../../assets/images/Berserk.png" />  </div>
                    <div class="descricao">Bersek</div>
                </div>
                <div class="catalogo">
                    <div class="imagem">  <img src="../../../assets/images/Gundam 08TH.png" />  </div>
                    <div class="descricao">Gundam 08TH</div>
                </div>
                <div class="catalogo">
                    <div class="imagem">  <img src="../../../assets/images/Akira.png" />  </div>
                    <div class="descricao">Akira</div>
                </div>
                <div class="catalogo">
                    <div class="imagem">  <img src="../../../assets/images/YuYu.jpg" />  </div>
                    <div class="descricao">Yu Yu Hakusho</div>
                </div>
                <div class="catalogo">
                    <div class="imagem">  <img src="../../../assets/images/Capeto.png" />  </div>
                    <div class="descricao">Tenchi Muyo</div>
                </div>
                <div class="catalogo">
                    <div class="imagem">  <img src="../../../assets/images/Hokuto no Ken.jpg" />  </div>
                    <div class="descricao">Hokuto no Ken</div>
                </div>
            </div>
        </div>
            <Rodape />
        </Container>
    )
}