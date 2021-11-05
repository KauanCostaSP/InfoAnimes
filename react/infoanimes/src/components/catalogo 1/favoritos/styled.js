import styled from "styled-components";

const Container = styled.div`

.anime{
    margin-right: 2em;
    color: #ffffff;
    text-decoration: none;
    display: flex;
    flex-direction: column;
}

.anime img:hover{
    box-shadow: 0 0 1.2em white;
    border-radius: 10px;
}

.titulo{
    color: #ffffff;
    font-size: 20px;
    font-family: Montserrat-Regular;
    font-weight: bold;

    white-space: nowrap;
    text-overflow: hidden;
    text-overflow: ellipsis;

    text-align: center;
    align-items: center;

    max-width: 167px;
    margin-bottom: 2.9em;
}

`

export {Container}