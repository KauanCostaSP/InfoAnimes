import styled from "styled-components";

const Container = styled.div`
    
    background-color: #0d0d0d;



 ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #323232;
  }
  
 ::-webkit-scrollbar {
    width: 7px;
    border-radius: 10px;
    background-color: #323232;
  }
  
 ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #7E00FC;
  }

    .conteudo{
    display: flex;
    flex-direction: row;
}

.SALAS{
    margin-left: .5em;
    margin-top: 1em;
    margin-right: 1.2em;
}

.sala{
    margin-top: .5em;
}

.conteudo-comunidade{
     display: flex;
     flex-direction: row;
     margin-left: 1em;
}

.cabecalho-comunidade{
    display: flex;
    flex-direction: row;
    margin-left: 1em;
    margin-top: 1.5em;
}

.comunidade-destaque{
    margin-top: 1em;
}

.comunidade-destaque .comunidade{
    border-radius: 10px;
    background: rgba(126, 0, 252, 0.28);
    box-shadow: 0px 4px 10px 3px #7e00fc;

}

.comunidade-destaque .comunidade .acao{
    background: #323232;
}

.perfis{
    display: flex;
    flex-direction: row;
    margin-left: 2em;
    margin-right: 1em;
}



.inf{
    font-family: fonte-100;
    font-size: small;
    text-align: center;
    text-decoration: none;
    color: white;
    background: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 20px;
    width: 50px;
    height: 26px;
    padding-top: 3px;
    padding-right: 1.5px;
    margin-top: .5em;
    margin-left: .5em;
}


.info{
    font-family: fonte-100;
    font-size: small;
    text-align: center;
    text-decoration: none;
    color: white;
    background: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 20px;
    width: 108px;
    height: 26px;
    padding-top: 2px;
    margin-left: 1em;
    margin-top: .5em;
}

.GIF{
    margin-top: 1.5em;
}


.comunidade{
    margin-left: 2em;
    margin-top: 1em;
}

.destaque{
    display: flex;
    flex-direction: column;
}

.acao{
    display: flex;
    flex-direction: row;
    padding-left: 8px;
    padding-top: 1px;
    margin-top: .1em;
    background-color: rgba(255, 255, 255, 0.11);
    border-radius: 5px;
}

.titulo{
    margin-left: .2em;
    font-family: fonte-200;
    font-size: small;
    color: #7E00FC;
}

.bt{
    font-family: fonte-100;
    font-size:x-small;
    text-decoration: none;
    color: white;
    background: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 20px;
    padding: 3px;
    margin-left: .5em;
}

.descricao{
    margin-top: .6em;
}


.servidor button{
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
    margin-top: 2em;
    margin-left: 5em;
}

.servidor button::before{
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

.servidor button:hover::before{
    width: 100%;
    height: 100%;
}

.servidor button::after{
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

.servidor button:hover::after{
    width: 100%;
    height: 100%;
}

.servidor button:hover{
    background: #7E00FC;
    color: #111;
    box-shadow: 0 0 50px #561DFA;
    transition-delay: 0.5s;
}



::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #323232;
  }
  
::-webkit-scrollbar {
    width: 7px;
    border-radius: 10px;
    background-color: #323232;
  }
  
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #7E00FC;
  }

  .sala img{
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  .online img{
    width: 50px;
  }

  .imagem img{
    width: 270px;
    border-radius: 5px;
    margin-top: .7em;
  }

  .like img{
    width: 25px;
  }

  .compartilhar img{
    width: 25px;
  }

  .chat img{
    width: 25px;
  }

  .GIF img{
    width: 268px; height: 567px;
  }
 `

 export{Container}