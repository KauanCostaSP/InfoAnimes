import styled from "styled-components";

const Container=styled.div`

*{
    margin: 0px;
    box-sizing: border-box;
}

.Container{
    display: flex;
    flex-direction: row;
}

.conteudo-login{
    display: flex;
    flex-direction: column;
    background-color: #0e0e0e;
    height: 100vh;
    width: 100vw;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.voltar-home{
    position: absolute;
   padding-left: 2em;
   padding-top: 2em;
}

.voltar-home img{
    height: 3em;
    filter: invert(100%) sepia(13%) saturate(100%) hue-rotate(130deg) brightness(100%) contrast(100%);
    transition: 0.3s;
}

.voltar-home img:hover{
    height: 3.5em;
    transition: 0.3s;
}
#retangulo{
    padding: 8em;
    border-radius: 25px;
    transition: 0.7s;
}

#retangulo:hover{
    box-shadow: 0px 4px 30px #A245FF;
    transition: 0.7s;
}

.usuario{
    color: white;
    font: 1.5em fonte-100;
    text-align: none;
    padding-bottom: 0.8em;
    margin-right: 8em;
    }
    
    .usuario img{
        height: 2em;
        padding-right: 10px
    }



.campo-email{
    margin: 1em 0px 0px 0em;
    text-align: center;
}

.campo-email input{
background-color: #373737;
border: none;
font: 1em fonte-100;
color: white;
padding: 15px 15px 15px 60px;
background-image: url(../../../assets/images/Email.png);
background-position: 15px 10px;
background-repeat: no-repeat;
}


.campo-senha{
    margin: 1em 0px 0px 0em;
    text-align: center;
}

.campo-senha input{
background-color: #373737;
border: none;
font: 1em fonte-100;
color: white;
padding: 15px 15px 15px 60px;
background-image: url(../../../assets/images/Chaveiro.png);
background-position: 15px 10px;
background-repeat: no-repeat;
}

.alterar-div{
    padding-bottom: 2em;
}

.alterar button{
    font-family: fonte-100;
    font-size: 15px;
    color: white;
    position: relative;
    background-color: #373737;
    border: none;
    width: 17em;
    height: 3em;
    margin-top: 2.5em;
    border: none;
    margin-right: 14em;
}

.alterar button:hover{
    cursor: pointer;
}

.alterar button::before{
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

.alterar button:hover::before{
    width: 99%;
    height: 97%;
}

.alterar button::after{
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

.alterar button:hover::after{
    width: 99%;
    height: 95%;
}

.esqueci-senha{
    color: white;
    font: 1em fonte-100;
    text-decoration: underline;
    text-align: right;
    padding-top: 4em;
}

.esqueci-senha:hover{
    color: #530194;
    transition: 0.3s;
    cursor: pointer;
}

`
export{Container}