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

`

export {Container}