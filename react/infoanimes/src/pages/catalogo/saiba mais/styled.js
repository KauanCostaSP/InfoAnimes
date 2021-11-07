import styled from "styled-components";

const Container = styled.div`

background-color: #0d0d0d;
    background-image: url('../../../assets/images/Fundo.png');
    background-repeat: no-repeat;
    background-size: 100% 120%;
    background-attachment: fixed;

.item:hover{
cursor: pointer;
}

.item-favorito, .item-lupa, .item-usuario, .item-logo:hover{
cursor: pointer;
}

.item-logo img{
    height: 2.5em;
    padding-right: 14em;
}

.item{
    margin: 0.8em 0.8em 1.4em 0.8em;
    font-size: 1em;
    font: 14px Montserrat-Regular;
}

.item, .item-favorito img{
 margin-right: 0.5em
}
.item-favorito{
    margin: 0.6em 0.8em 1.2em 0.8em;
    font-size: 1em;
    font: 14px Montserrat-Regular;
   }
   

.item-lupa img{
    height: 2em;
    margin-left: 17em;
}

.item-usuario{
    height: 1.8em;
    margin-left: 2em;
}

a{
    color: #ffffff;
    text-decoration: none;
}

a:hover{
    color: #7E00FC;
}

.item_usuario img{
    margin-right: 40px;
}

.item-catalogos{
    margin: 0.8em 0.8em 1.4em 0.8em;
    color: #7E00FC !important;
    font-size: 14px;
    font-family: Montserrat-Regular !important;
    font-weight: bold;
}

.item-catalogos a{
    color: #7E00FC;
    font-size: 14px;
}




*{
    margin: 0px;
    box-sizing: border-box;
}

body{
    background-color: #0d0d0d;
}

.corpo{
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-image: url(../../../assets/images/back_favoritos.png);
    background-size: 1359px;
}

.back{
    background-image: linear-gradient(to bottom, #5201949c, #0d0d0d);
    background-repeat: no-repeat;
}

.rodape{
    display: flex;
    flex-direction: column;
    color: white;
    padding-top: 4em;
    align-items: center;
    text-align: center;
}

.copyright{
    font: 14px Montserrat-Regular; 
}

.box-itens{
    display: flex;
    flex-direction: row;
    padding-top: 1em;
}

.redes-sociais{
    display: flex;
    flex-direction: row; 
    padding-top: 2em;
}

.item{
    padding-right: 0.8em;
    font: 14px Montserrat-Medium;
}

.redes-sociais img{
    padding-right: 1em;
    padding-bottom: 1em;
    height: 2.4em;
}

.retangulo-1{
    border: 1.5px solid #7E00FC;
    background-color: #7E00FC;
    width: 100%;

}

.retangulo-2{
    margin-top: 2em;
    padding-top: 3em;
    background-color: #7E00FC;
    width: 100%;
}

.cabecalho-corpo{
    display: flex;
    flex-direction: row;
    margin-left: 4em;
    margin-top: 5em;
    margin-bottom: 2em;
}

.icone button{
    margin-left: 78em;
    background: none;
    border: none;
}

.barrinha{
    background-color: white;
    width: 11px;
    height: 35px;
}

.conteudo{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 2.7em;
}

.corpo{
    max-width: 100%;
}

.catalogo{
    margin: 1em;
}

.descricao{
    font-family: fonte-200;
    color: white;
    text-align: center;
    margin-top: .5em;
}

.titulo{
    font-family: Montserrat-Medium;
    font-size: x-large;
    color: white;
    margin-left: .5em;
    padding: 4px;
    color: #ffffff; text-decoration: none;
}

.corpo{
display: flex;
flex-direction: column;
}


.imagem img{
    width: 220px; height: 315px; border-radius: 10px;
}


body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #323232;
  }
  
body::-webkit-scrollbar {
    width: 7px;
    border-radius: 10px;
    background-color: #323232;
  }
  
body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #7E00FC;
  }
`

export {Container}