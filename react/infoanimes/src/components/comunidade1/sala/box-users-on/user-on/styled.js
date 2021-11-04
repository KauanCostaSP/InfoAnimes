import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 265px;
    padding-top: 5px;

    .foto-usu img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    }

    .nome{
        font: 18px fonte-100;
    }
`

export {Container}