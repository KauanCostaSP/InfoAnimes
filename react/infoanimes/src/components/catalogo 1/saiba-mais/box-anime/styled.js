import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em !important; 

    .imagem img{
    width: 220px; height: 315px; border-radius: 10px;
    }

    .descricao{
    font-family: fonte-200;
    color: white;
    text-align: center;
    margin-top: .5em;
    }

    .explorar button{
        background-color: #7E00FC;
        color: #ffffff;
        border: none;
        border-radius: 10px;
        width: 100px;
        height: 25px;
        font: 15px fonte-300;
    }

    .explorar{
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

`

export {Container}