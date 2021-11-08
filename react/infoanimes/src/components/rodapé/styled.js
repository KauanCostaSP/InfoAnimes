import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding-top: 4em;
    align-items: center;
    text-align: center;
    background-color: #0d0d0d;
    display: flex;
    

    .copyright{
    font: 14px Montserrat-Regular; 
    }

    .box-itens{
        display: flex;
        flex-direction: row;
        padding-top: 1em;
    }

    .redes-sociais{
        display: flex;
        flex-direction: row; 
        padding-top: 2em;
    }

    .item{
        padding-right: 0.8em;
        font: 14px Montserrat-Medium;
        text-decoration: none;
        color: #ffffff;
    }

    .redes-sociais img{
        padding-right: 1em;
        padding-bottom: 1em;
        height: 2.4em;
    }

    .retangulo-1{
        border: 1.5px solid #7E00FC;
        background-color: #7E00FC;
        width: 100%;

    }

    .retangulo-2{
        margin-top: 1em;
        padding-top: 3em;
        background-color: #7E00FC;
        width: 100%;
    }


    Link{
        text-decoration: none;
        color: #ffffff;
    }


    @media screen and (max-width: 768px) {

        .copyright{
            font: 12px Montserrat-Regular; 
            max-width: 100vw;
        }

        .box-itens{
            display: flex;
            flex-direction: column;
        }

        .item{
            font: 12px Montserrat-Medium;
            padding-top: 5px;
        }



    }



`

export {Container}