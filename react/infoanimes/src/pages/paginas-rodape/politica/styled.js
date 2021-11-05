import styled from "styled-components";

const Container=styled.div`
.containerzinho {
    color: #ffffff;
    border: solid 1px #7E00FC;
    box-shadow: 0px 4px 20px 5px #A64FFD;
    margin: 30px 70px;
    margin-top: 80px;
    border-radius: 7px;
    padding: 20px 0px;

}
    *{
    margin: 0px;
    box-sizing: border-box;
}

body{
    background-color: #0d0d0d;
}

.container{
display: flex;
flex-direction: column;
}


.cabecalho{
    display: flex;
    flex-direction: row;
    background-color: #1e1e1e;
    color: white;
    padding-left: 1em;
    padding-top: 1em;
}

a{
    color: #ffffff;
    text-decoration: none;
}

a:hover{
    color: #7E00FC;
}

.item_usuario img{
    margin-right: 40px;
}

.texto{
    margin: 45px 75px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
}

p{
    margin: 15px 0px;
    font: 24px fonte-100;
}

.titulo-politica{
    background-color: #7E00FC;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    font: 36px fonte-300;
}

.titulo-compromisso{
    color: #7E00FC;
    text-shadow: 3px 0px 1px white;
    font: 36px fonte-300;
    display: flex;
    justify-content: center;
    
}

.titulo-informacoes{
    display: flex;
    justify-content: center;
    font: 36px fonte-300;
    color: #7E00FC;
}

.item-politica{
    margin: 0.8em 0.8em 1.4em 0.8em;
    color: #7E00FC !important;
    font-size: 15px;
    font-family: Montserrat-Regular !important;
    font-weight: bold;
}

.item-politica a{
    color: #7E00FC;
    font-size: 15px;
}

`
export{Container}