import Cabecalho from "../../../components/cabecalho"
import Rodape from "../../../components/rodapé"
import { Container } from "../../../components/rodapé/styled"
export default function Termos() {
    return(

         <Container>
             <Cabecalho/>
            
        <div class="conteudo">
            <div class="titulo-terms">Termos de Uso</div>
            <div class="texto">
                <p>Bem-vindo ao INFOAnimes. Continue lendo para aprender as regras e restrições que regem o uso de nossos serviços. Se você tiver quaisquer dúvidas 
                ou comentários sobre estes termos de uso entre em contato conosco, através do nosso email infoanimes123@gmail…</p>
                <p>Os termos de uso são um contrato entre os criadores e os usuários caso você não concorde ou não queira 
                seguir o mesmo você não terá acesso a nossos serviços. Estas regras permaneceram em vigor enquanto você utilizar nossos serviços,
                incluido as de <button>Política de Privacidade</button>. </p>
                <p>Esses termos correm o risco de mudar pois estamos em constante mudança e sempre a procura de melhoramentos,
                    pois nós (INFOAnimes) temos esse direito de fazer alterações mas caso iso ocorra os usuarios seram notificados
                    com antecedencia para que os mesmos possam ler e concordar para continuar usando. Você como usuario tem o direito 
                    de não concordar porém o mesmo será convidado a se retirar e não poderá usufruir de nossos serviços.
                </p>
                <p>Vale salientar que se caso o usuario não tiver a idade mínima (13 anos) não será possivel utilizar-se de nossos serviços. 
                    Caso você seja maior ou tenha a idade mínima essa regra não se aplica a você.
                </p>
            </div>

            <div class="titulo-compromisso">Compromisso do usuário</div>
            <div class="texto">
                <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o INFOAnimes oferece no site e com caráter enunciativo, mas não limitativo:</p>
                <br/>
                <p>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e a ordem da pública;</p>
                <p>B) Não digundir propaganda ou conteúdo de natureza racista, xenofóbica, ou apostas desportivas (ex: Betano), jogos de azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</p>
                <p>C) não causar danos aos sistemas físicos (hardwares) e lógicos(softwares) do INFOAnimes, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que segam capazes de causas danos anteriormente mencionados.</p>
                <p>D) não é permitido fraudar, clonar, caluniar, difamar ou se abster dos direitos de outros usuarios ou dos nossos serviços; </p>
                <p>E) É ilegal colocar em risco a sua conta e a de outros usuarios com a divulgação de senhas, e-mails, etc;</p>
                <p>F) Qualquer tipo de discursso de odio;</p>
                <br/>
            </div>
              
            <div class="titulo-informacoes"> Mais informações</div>
            <div class="texto">
                <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
            </div>
        </div>
    <Rodape/>
</Container>
         

    
    )
}