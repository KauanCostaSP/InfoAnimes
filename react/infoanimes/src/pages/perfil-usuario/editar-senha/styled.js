import styled from "styled-components";

const Container=styled.div`
background-color: #0E0E0E;


.container_alterar{
    text-align: center !important;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}

.alterar_senha{
    text-align: center !important;
    padding: 2em 0em 0em 0em;
    margin-top: 5em;
    margin-bottom: 5em;
    border-radius: 20px;
    width: 500px;
}

.alterar_senha:hover{
    box-shadow: 0 0 1.2em #A245FF;
}

.usuario{
    text-align: left !important;
    margin-left: 2em;
    align-items: center;
}

.perfil img{
    height: 54px;
    width: 65px;
    vertical-align: baseline;
}

.usuario{
    display: flex;
    flex-direction: row;
}

.nick{
    font-family: Montserrat-Regular;
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
    
    text-align: center;
    vertical-align: baseline;

    margin-bottom: 1em;
    padding-bottom: 2em;
    padding-top: 30px;
    padding-left: 10px;
}

.campos{
    margin-bottom: 1em;
}

.campo input{
    font-family: Montserrat-Regular;
    background: #f1f1f1;
    color: #000;
    
    outline: none;
    border-radius: 3px;
    border: 0px transparent;

    margin: 1em 2.1em 0em 2em;
    padding-top: 5px;
    padding-left: 10px;
    width: 400px;
    height: 32px;
}

input::placeholder {
    color: rgb(0, 0, 0);
}

.campo button {
    background: #f1f1f1;
    border: 0px transparent;
}

.botao_alt-se{
    text-align: left !important;
}

.botao_alt-se button{
    color: #ffffffff;
    font-size: 14px;
    font-weight: bold;
    background-color: #530194;

    border-radius: 6px;
    border: 0px transparent;

    padding: 8px 20px 8px 20px;
    margin-bottom: 3em;
    margin-left: 3.4em;
}

.botao_alt-se button:hover{
    background: #FFFF;
    color: #561DFA;
    box-shadow: 0 0 50px #561DFA;
}

.rodape{
    padding-top: 40px !important;
}

.or{
    display: flex;
    flex-direction: row;
    justify-content: space;
    align-items: center;
}

.item:hover{
    color: #7e00fc;
}

`
export{Container}