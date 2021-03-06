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
   padding-left: 1em;
   padding-top: 1em;
}

.voltar-home img{
    height: 1.5em;
    filter: invert(100%) sepia(13%) saturate(100%) hue-rotate(130deg) brightness(100%) contrast(100%);
    transition: 0.3s;
}

.voltar-home img:hover{
    height: 2em;
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

.texto-esqueci-senha{
    color: white;
    font: 1.5em fonte-100;
    text-align: none;
    padding-bottom: 1em
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

.entrar-div{
    padding-bottom: 2em;
}

.entrar button{
    font-family: Montserrat-Regular;
    font-size: 15px;
    color: #ffffff;
    position: relative;
    background-color: #373737;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: 0px transparent;
    width: 31em;
    height: 3em;
    margin-top: 2.5em;
    margin-bottom: 1em;
}

.entrar button:hover{
    cursor: pointer;
    box-shadow: 0 0 10em #ffffff8c;
    background: #ffffff;
    color: #111;
    transition-delay: 0.5s;
}

.entrar button::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 17px;
    height: 17px;
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
    text-align: right;
    padding-top: 4em;
}

.esqueci-senha:hover{
    color: #530194;
    transition: 0.3s;
    cursor: pointer;
}


.conta-adm{
    color: white;
    font: 1em fonte-100;
    text-decoration: underline;
    text-align: right;
    padding-top: 5em;
}

.conta-adm:hover{
    color: #530194;
    transition: 0.3s;
    cursor: pointer;
}




@media screen and (max-width: 768px) {

    #retangulo{
        padding: 3em 1em 3em 1em;
        max-width: 100%;
        height: auto;
    }

    .texto-esqueci-senha{
        text-align: center;
        font: 1em fonte-100;
    }

    .campo-email input{
        font: 0.6em fonte-100;
    }

    .campo-senha input{
        font: 0.6em fonte-100;
    }

    .entrar button{
        font: 10px fonte-100;
    }


    .esqueci-senha div{
        font: 0.6em fonte-100;
    }
}




`

export {Container}