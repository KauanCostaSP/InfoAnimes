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

.box1{
    display: flex;
    flex-direction: column;
    margin-left: 1em;
}

.entrar button{
    font-family: Montserrat-Regular;
    font-size: 15px;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.21);
    position: relative;
    width: 18em;
    height: 3em;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: 0px transparent;
    margin-top: .5em;
    border: none;
}

.entrar button:hover{
    cursor: pointer;
    box-shadow: 0 0 2em #ffffff8c;
    background: #ffffff;
    color: #111;
    transition-delay: 0.5s;
}

.entrar button::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    overflow: hidden;
    border-top: 2px solid white;
    border-left: 2px solid white;
    transition: 0.5s;
}

.entrar button:hover::before{
    width: 99%;
    height: 97%;
}

.entrar button::after{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 15px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transition: 0.5s;
}

.entrar button:hover::after{
    width: 99%;
    height: 95%;
}

.conteudo-comunidade{
     display: flex;
     flex-direction: row;
     margin-left: 2em;
}

.COMUNIDADES{
    margin-left: -30px;
    padding-left: -10;
}

.capa{
    width: 120px;
}


.comunidade{
    
    margin-top: 1em;
}


.titulo{
    margin-left: .2em;
    font-family: fonte-200;
    font-size: small;
    color: #7E00FC;
}


.descricao{
    margin-top: .6em;
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

  .imagem img{
    width: 270px;
    border-radius: 5px;
    margin-top: 1em;
  }
 `

 export{Container}