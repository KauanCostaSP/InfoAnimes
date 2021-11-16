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

.box-left{
    display: flex;
    flex-direction: column;
    background-color: #530194;
    height: 100vh;
    width: 70vw;
    color: white;
    text-align: center;
    align-items: center;
    justify-content: center;
}


.titulo-left{
    font: 2.3em fonte-300;
    padding-bottom: 1em;
}

.sub-titulo-left{
    font: 1.5em fonte-200;
    padding-bottom: 2em;
}

.botao-login button{
background-color: #5f139b;
border-color: white;
border-radius: 60px;
color: white;
padding: 7px 60px;
font: 20px fonte-300;
border-width: 2px;
border-style: solid;
transition: 0.3s;
}

.botao-login button:hover{
    cursor: pointer;
    padding: 10px 70px;
    transition: 0.3s;
    }


.box-right{
    display: flex;
    flex-direction: column;
    background-color: #0e0e0e;
    color: white;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;

}

.titulo-right{
color: #7E00FC;
font: 2em fonte-300;
text-align: center;
padding-bottom: 10px;

}

.sub-titulo-right{
    font: 1.5em fonte-50;
    text-align: center;
    
}

.campo-usuario{
 margin: 3em 0px 0px 0em;
 text-align: center;

}

.campo-usuario input{
position: relative;
 background-color: #373737;
 border: none;
font: 1em fonte-100;
color: white;
padding: 15px 15px 15px 60px;
background-image: url(../../../assets/images/Usuario-2.png);
background-position: 15px 10px;
background-repeat: no-repeat;
}

.imagem-usu i, img{
    text-align: left;
    position: absolute;

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


.campo-senha-repetida{
    margin: 1em 0px 0px 0em;
    text-align: center;
}

.campo-senha-repetida input{
background-color: #373737;
border: none;
font: 1em fonte-100;
color: white;
padding: 15px 15px 15px 60px;
background-image: url(../../../assets/images/Chaveiro.png);
background-position: 15px 10px;
background-repeat: no-repeat;
}

.botao-criar-conta{
    text-align: center;
    padding-top: 2em;
}

.botao-criar-conta button{
color: white;
padding: 10px 60px;
font: 20px fonte-300;
border-width: 2px;
border-style: solid;
background-color: #1f1f1f;
border-color: #7E00FC;
border-radius: 60px;
transition: 0.3s;
}

.botao-criar-conta button:hover{
cursor: pointer;
padding: 13px 70px;
transition: 0.3s;
}



@media screen and (max-width: 768px) {
    .Container{
        flex-direction: column;
    }
   
    .box-left{
        width: 100vw;
        color: white;
    }

    .titulo-left{
        font: 1.7em fonte-300;
    }


    .sub-titulo-left{
        font: 0.9em fonte-200;
    }

    .botao-login button{
        padding: 7px 50px;
        font: 16px fonte-300;
    }


    .titulo-right{
        font: 1.5em fonte-300;
    }

    .sub-titulo-right{
        font: 1em fonte-50;
    }

    .campo-usuario input{
       font: 0.6em fonte-100;
    }

    .campo-email input{
        font: 0.6em fonte-100;
    }

    .campo-senha input{
        font: 0.6em fonte-100;
    }

    .campo-senha-repetida input{
        font: 0.6em fonte-100;
    }

    .botao-criar-conta button{
        padding: 10px 50px;
        font: 15px fonte-300;
    }

}




`

export {Container}