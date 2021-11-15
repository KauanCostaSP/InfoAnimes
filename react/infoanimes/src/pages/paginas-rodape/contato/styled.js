import styled from "styled-components";

const Container = styled.div`

background-color: #0d0d0d;

*{
    margin: 0px;
    box-sizing: border-box;
}

body{
    background-color: #0d0d0d;
}

.conteudo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    color: white;
    font: 14px fonte-200;
    line-height: 2em;
}


@media screen and (max-width: 768px) {

    img{
        max-width:100%;
	    height:auto;
    }

}
`
export {Container}