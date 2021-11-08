import styled from "styled-components";


const Container = styled.div`
    background-image: linear-gradient(#0E0E0E 70%, #1A1A1A);

    a{
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
}

a:hover{
    color: #7E00FC;
}

.item_usuario img{
    margin-right: 40px;
}

.item-home{
    margin: 0.8em 0.8em 1.4em 0.8em;
    color: #7E00FC !important;
    font-size: 15px;
    font-family: Montserrat-Regular !important;
    font-weight: bold;
}

.item-home a{
    color: #7E00FC;
    font-size: 15px;
}


.apresentacao{
    margin-top: 10em;

}

.informacao{
    justify-content: center;
    display: flex;
    padding-top: 10em;
}


.catalogos{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 3em;
    text-align: center;
    align-items: center;
    justify-content: center;
}



.desc{
    font-family: fonte-100;
    color: white;
    text-align: center;
    margin: .2em;
}


.botao{
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}



.botao button{
    color: #7E00FC;
    font-family: fonte-100;
    font-size: 15px;
    position: relative;
    background-color: transparent;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 6px;
    border: none;
    width: 189px;
    height: 46px;
    margin-bottom: 2.7em;
}

.botao button::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    overflow: hidden;
    border-top: 2px solid #7E00FC;
    border-left: 2px solid #7E00FC;
    transition: 0.5s;
}

.botao button:hover::before{
    width: 100%;
    height: 100%;
}

.botao button::after{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 15px;
    border-bottom: 2px solid #7E00FC;
    border-right: 2px solid #7E00FC;
    transition: 0.5s;
}

.botao button:hover::after{
    width: 100%;
    height: 100%;
}

.botao button:hover{
    background: #7E00FC;
    color: #111;
    box-shadow: 0 0 50px #561DFA;
    transition-delay: 0.5s;
}

.titulo{
    color: white;
    text-shadow: 3px 0px 1px #7E00FC;
    font: 36px fonte-300;
    font-family: fonte-100;
    text-align: center;
}

.subtitulo{
    color: #7E00FC;
    font-family: fonte-200;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
}

.texto1, .texto2 {
    font-family: fonte-100;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: white;
    font-weight:lighter;
}

.textos{
    margin-top: 3em;
    margin-bottom: 2.6em;
}

.capa :hover{
    
    border: none;
    border-radius: 10px;
    transform: translateY(20px);
    transform: scale(1.1);
}


.img-completa{
    display: flex;
    flex-direction: row;
}

.barra{
    color: white;
    border-top:  4px solid white;
    background-color: #7E00FC;

    font-family: 'Montserrat Subrayada', sans-serif;
    font-weight: bold;
    font-size: 35px;
    line-height: 44px;

    width: 710px;
    height: 80px;

    margin-top: 2em;
    text-align: center;
    padding-top: 13px;
}

.barra b{
    font-family: 'Montserrat Subrayada', sans-serif;
    display: flex;
    font-size: 22px;
    flex-direction: column;
    margin-top: 1em;
}

span{
    display: flex;
    flex-wrap: wrap;
    font-family: fonte-100;
    font-weight: 200;
    font-size: 15px;
    line-height: 22px;
    width: 29em;
    margin-left: 9em;
    margin-top: 1em;
}

.barra2{
    border-top:  4px solid white;
    background-color: #7E00FC;
    width: 140px;
    height: 80px;  
    margin-top: 4.7em;
}

.t1{
    color: white;
    text-shadow: 3px 0px 1px #7E00FC;
    font: 36px fonte-300;
    font-family: 'Montserrat Subrayada', sans-serif;
    position: absolute;
    padding-top: 1.1em;
    margin-right: 20em;
    text-transform: uppercase;
    letter-spacing: 0.225em;
}



.conteudo{
    margin-top: 3em;
    margin-bottom: 10em;
}

.comunidades{
    display: flex;
    flex-direction: row;

    margin-top: 3em;
    margin-bottom: 3em;
}

.cadastrar{
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.cadastrar button{
    font-family: fonte-100;
    font-size: 15px;
    color: #7E00FC;
    position: relative;
    background-color: transparent;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 6px;
    border: none;
    width: 189px;
    height: 46px;
}

.cadastrar button::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    overflow: hidden;
    border-top: 2px solid #7E00FC;
    border-left: 2px solid #7E00FC;
    transition: 0.5s;
}

.cadastrar button:hover::before{
    width: 100%;
    height: 100%;
}

.cadastrar button::after{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 15px;
    overflow: hidden;
    border-bottom: 2px solid #7E00FC;
    border-right: 2px solid #7E00FC;
    transition: 0.5s;
}

.cadastrar button:hover::after{
    width: 100%;
    height: 100%;
}

.cadastrar button:hover{
    box-shadow: 0 0 1em #A245FF;
}

.cadastrar button:hover{
    background: #7E00FC;
    color: #111;
    box-shadow: 0 0 50px #561DFA;
    transition-delay: 0.5s;
}

.t1-titulo{
    color: #7E00FC;
    font-family: fonte-100;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    text-align: center;
}

.t2-texto{
    color: white;
    font-family: fonte-100;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    padding-top: 10px;
}

.img{
    margin-top: 2em;
}


.button{
    display: flex;
    flex-direction: row;
}

*{
    box-sizing: border-box;
    font-family:  fonte-100;
}

.comunidades{
    display: flex;
    width: 90%;
    max-width: 90%;
    justify-content: space-around;
}

.card{
    display: flex;
    align-items: flex-start;
    width: 380px;
    height: 360px;
    padding: 2rem 1rem;
    background: white;
    border-radius: 5px;
    position: relative;
    transition: 0.5s ease-in-out;
}

.card:hover{
    transform: translateY(20px);
    transform: scale(1.1);
    z-index: 3;
}

.card::before{
    display: block;
    width: 100%;
    height: 100%;
    max-width: 155%;
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.63);
    border-radius: 5px;
    box-shadow: 0 0 5em rgba(255, 255, 255, 0.726);
    top: 0px;
    left: 0px;
    z-index: 3;
    transition: 0.5s all;
    opacity: 0;
}

.card:hover::before{
    opacity: 1;
}

.card img{
    width: 377px;
    height: 100%;
    top: 0px;
    left: 0px;
    border-radius: 5px;
    position: absolute;
    object-fit: cover;
}

.card .info{
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s all;
}

.card:hover .info{
    opacity: 1;
    transform: translateY(0px);
    
}

.card .info .btn{
    color: white;
    text-decoration: none;
    border: none;
    background: #530194;
    
    border-radius: 20px;
    position: absolute;
    width: 100px;
    height: 30px;
    text-align: center;
    margin-top: 2em;
    padding: 4.8px;
}

.card .info .btn:hover{
    background: #FFFF;
    color: #561DFA;
    box-shadow: 0 0 50px #561DFA;
}

 .destaques .bt{
   display: flex;
   flex-direction: row;
   position: absolute;
}

.card .info .bt{
    width: 110px;
    height: 40px;
    margin-left: .5em;
    padding: 3px;
    
    text-decoration: none;
    color: white;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 20px;
    background:transparent
}

.card .info h1{
    margin-top: 1em;
}

.card .info p{
    margin-top: 1em;
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

  div .comunidades .card{
    display: inline-block;
}






@media screen and (max-width: 768px) {

    .comunidades{
        display: none;
    }

    .informacao{
        
    }

    .titulo{
        font: 30px fonte-300;
    }

    .subtitulo{
        font-size: 20px;
    }

    .texto1, .texto2{
    text-align: center;
    font-size: 12px;
  
    }

    .cadastrar{
        margin-top: 100px;
    }

    .t1-titulo{
        font-size: 24px;
    } 
    
    .t2-texto {
        font-size: 12px;
    }


}



`

export {Container}