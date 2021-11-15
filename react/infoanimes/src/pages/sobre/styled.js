import styled from "styled-components";

const Container = styled.div`

background-color: #0d0d0d;

*{
    margin: 0px;
    box-sizing: border-box;
    text-align: center;
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

.item-sobre{
    margin: 0.8em 0.8em 1.4em 0.8em;
    color: #7E00FC !important;
    font-size: 15px;
    font-family: Montserrat-Regular !important;
    font-weight: bold;
}

.item-sobre a{
    color: #7E00FC;
    font-size: 15px;
}

.conteudo{
    background: linear-gradient(180deg, rgba(126, 0, 252, 0.03) 55.07%, rgba(126, 0, 252, 0.03) 100%);
    box-shadow: 0px 4px 20px 5px #A64FFD;
    border-radius: 10px;
    margin: 4em;
}


.infoanimes{
    color: white;
    font: 36px fonte-300;
    padding-top: 25px;
    font-family: 'Montserrat Subrayada', sans-serif;
    text-decoration: underline;
    text-align: center;
}

.descricao{
    background: #530194;
    color: white;
    margin-top: 1.7em;
    font-family:  fonte-100;
    font-size: 18px;
    padding: 10px;
    padding-left: 1.3em;
    padding-right: 1.3em;
    padding-top: 12px;
    line-height: 29px;
    height: 82px;
}

.titulo{
    color: white;
    font: 35px fonte-300;
    padding-top: 20px;
    padding-bottom: 22px;
    font-family: 'Montserrat Subrayada', sans-serif;
    text-align: center;
    
}

.gif img{
    max-width:100%;
    padding: 0em 2em 0em 2em
}

.texto{
   font-family: fonte-100;
   font-size: 24px;
   line-height: 29px;
   margin-top: 2em;
   margin-left: 2em;
   margin-right: 2em;
   color: white;
}


.titulo-1{
   color: white;
   background: #530194;
   border-top: 12px solid white;
   border-bottom: 12px solid white;
   box-shadow: 0px 4px 20px white;
   font: 32px fonte-300;
   padding-top: 17px;
   padding-bottom: 15px;
   margin-top: 4em;
   margin-bottom: 2em;
   font-family: 'Montserrat Subrayada', sans-serif;
   text-align: center;
}


.texto-1{
    font-family: fonte-100;
    font-size: 24px;
    line-height: 29px;
    margin-top: 2em;
    margin-left: 2em;
    color: white;
    margin-left: 2em;
    margin-right: 2em;
    
}


.titulo-2{
    color: white;
    text-shadow: 3px 0px 1px #7E00FC;
    font: 36px fonte-300;
    font-family: fonte-100;
    text-align: center;
    margin-top: 3.5em;
}

.texto-2{
    font-family: fonte-100;
    font-size: 24px;
    line-height: 29px;
    margin-top: 1em;
    margin-left: 3em;
    color: white;
    margin-right: 2em;
}

.informacoes{
    font-family: fonte-100;
    font-size: 18px;
    line-height: 22px;
    color: white;
    text-align: center;
    margin-top: 3em;
    padding-bottom: 3em;
}

.informacoes b{
    text-decoration: underline;
    font-weight: lighter;
    margin-left: 2em;
}

.informacoes span{
    color: #7E00FC;
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
.gif img{
    width: 1174px; height: 450px;
}


@media screen and (max-width: 768px) {

    .descricao{
        font: 9px fonte-300;
    }

    .infoanimes{
        text-align: center;
        font: 24px fonte-300;
    }

    .titulo{
        font: 18px fonte-300;
    }

    .texto{
        font-size: 14px;
    }

    .titulo-1{
        font-size: 14px;
    }

    .texto-1{
        font-size: 14px;
    }

    .texto-2{
        font-size: 14px;
    }

    .titulo-2{
        font-size: 18px;
    }

    .informacoes{
        font-size: 12px;
    }



}


`
export {Container}