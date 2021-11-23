import styled from "styled-components";

const Catalogo = styled.div`

    margin-left: 2em;
    margin-bottom: 1.5em;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
        
   
    

    .desc{
        font-family: fonte-100;
        color: white;
        text-align: center;
        margin: .2em;
    }

    img{
        width: 120px;
        height: 190px;
    }

    .capa :hover{
        box-shadow: 0 1em 10em #ffffff8c;
        border: none;
       
    }

    .capa img{
        border-radius: 10px;
    }

`

export{Catalogo}