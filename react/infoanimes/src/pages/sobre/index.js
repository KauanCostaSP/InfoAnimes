import {Container} from "./styled"
import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodapé"

export default function Sobre() {
    return(
        <Container>
            <Cabecalho/>
            <div className="conteudo">
             <div className="infoanimes">INFOANIMES</div>

             <div className="descricao">O INFO Animes foi criado com o intuito de reunir e ajudar a comunidade otaku (comunidade em que usa o termo "otaku" para se referir a fans de animes em um modo geral).</div>

             <div className="titulo">MAS AFINAL, O QUE SÃO ANIMES?</div>

             <div className="gif"><img src="/assets/images/gifnanatsu.gif" alt=""/></div>

             <div className="texto">De um modo geral: o "Anime" surgiu por volta da metade do século XX. O termo é abreviação <br/> da palavra “animação” em japonês, que se refere a qualquer animação. Geralmente, Toda <br/> animação japonesa, ou boa parte delas, também possui uma versão em mangá (quadrinhos <br/> japoneses).</div>
             <div className="texto">Uma das características mais marcantes das animações japonesas, são os olhos <br/> dos personagens. Eles são bem destacados, grandes, bem delineados e com bastante brilho.</div>
             <div className="texto">Alguns animes japoneses você com certeza já deve ter visto, até porque vários já passaram <br/> em programas da TV aberta, como: Sakura Card Captors, Hamtaro, Dragon Ball Z, Yu-Gi-Oh , <br/> Cavaleiros do Zodíaco, Pokémon, Inuyasha, Naruto, entre outros.</div>

            

             <div className="titulo-1">QUAL É O OBJETIVO DO SITE?</div>


             <div className="texto-1">O INFO animes reuni tudo que há por aí na internet sobre o tema "Animes" ou "Animação <br/> Japonesa": resenhas, indicações, opiniões, descrições, informações,  avaliações e mais, no site <br/> também temos a "Comunidade", lá você encontrará vários servidores, que são lugares onde, <br/> você caro leitor e consumidor irá:</div>
             <div className="texto-1">conhecer pessoas que gostam do mesmo anime que você, poderá fazer amizades, usar bate <br/> papo, conversar com amigos, entrar em bate papos privados e se divertir-se em modo geral <br/> com os outros membros da comunidade, terá diversos servidores de diversos animes e <br/> temas que você poderá escolher, mas não só escolher...</div>
             <div className="texto-1">Você também poderá CRIAR seu próprio servidor, para reunir amigos, familiares, ou até <br/> juntar integrantes desconhecidos e elevar cada vez mais seu servidor, o'que poderá fazer seu  <br/> servidor estar entre os mais acessados da semana</div>
             <div className="titulo-2">Como você pode assistir?</div>

             <div className="texto-2">Hoje em dia existem vários sites na internet que te disponibiliza assistir animes, porem o <br/> mais conhecido e usado pelos consumidores, é a crunchyroll, basicamente é "Netflix" dos <br/> Animes, na crunchyroll está disponível para celulares Windows Phone (acima) e consoles <br/> como Wii U, PS3, PS Vita e Xbox 360, ele é completo e existem vários catálogos de diversos <br/> animes da atualidade, ele é grátis, porém se quiser receber benefícios como: anúncios <br/> removidos, disponível downloads, assistir animes que só tem a opção premium e outros.</div>
             <div className="informacoes">Se quiser ter um contato melhor conosco <b>acesse</b> <span>contatos</span></div>
       </div>


        <Rodape/>
    
        </Container>

    )
}