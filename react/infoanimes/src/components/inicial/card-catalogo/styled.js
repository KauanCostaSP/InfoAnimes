import styled from "styled-components";

const Catalogo = styled.div`

    margin-left: 2em;
    margin-bottom: 1.5em;
    border-radius: 20px;
        
   
    

    .desc{
        font-family: fonte-100;
        color: white;
        text-align: center;
        margin: .2em;
    }

    img{
        width:120px;
    }

    .capa :hover{
        box-shadow: 0 0 .8em white;
        border: none;
       
    }

    .capa img{
        border-radius: 10px;
    }

`

export{Catalogo}