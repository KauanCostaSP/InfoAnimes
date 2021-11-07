import styled from "styled-components";

const Container = styled.div`
@font-face {
    font-family: fonte-50;
    src: url('../../../assets/fonts/Montserrat-Light.woff');
}

@font-face {
    font-family: fonte-100;
    src: url('../../../assets/fonts/Montserrat-Regular.woff');
}

@font-face {
    font-family: fonte-200;
    src: url('../../../assets/fonts/Montserrat-Medium.woff');
}

@font-face {
    font-family: fonte-300;
    src: url('../../../assets/fonts/Montserrat-SemiBold.woff');
}

@font-face {
    font-family: fonte-400;
    src: url('../../../assets/fonts/Montserrat-Bold.woff');
}

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
    height: 4em;
    filter: invert(100%) sepia(13%) saturate(100%) hue-rotate(130deg) brightness(100%) contrast(100%);
}

#retangulo{
    padding: 10em;
    border-radius: 25px;
    transition: 0.7s;
}

#retangulo:hover{
    box-shadow: 0px 4px 30px #A245FF;
    transition: 0.7s;
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






.entrar button{
    font-family: fonte-100;
    font-size: 15px;
    color: white;
    position: relative;
    background-color: #373737;
    border: none;
    width: 30em;
    height: 3em;
    margin-top: 2.5em;
    border: none;
}

.entrar button:hover{
    cursor: pointer;
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

.esqueci-senha{
    color: white;
    font: 1em fonte-100;
    text-decoration: underline;
    padding: 3em 0em 0em 0em;
    text-align: right;
}

.esqueci-senha:hover{
    color: #530194;
    transition: 0.3s;
    cursor: pointer
}


`

export {Container}