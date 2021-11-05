import styled from 'styled-components'

const Cabecalho = styled.div`

background-color: #0d0d0d;

.box-2{
    background: linear-gradient(180deg, #530194 31.77%, rgba(83, 1, 148, 0) 100%);
    padding: 2em 0em 2em 0em;
    max-width: 58em;
    margin-left: 13em;
    
}

.biografia, .comunidades-e-chats, .publicacoes{
    display: flex;
    flex-direction: column;
}

.comunidades-e-chats, .publicacoes{
    padding-top: 30px;
}

.titulo-box-2{
    display: flex;
    flex-direction: row;
}

.retangulo-branco{
    border: 5px solid #FFFFFF;
    width: 1px;
    height: 30px;
    margin-left: 1.5em;   
}

.text-retangulo-branco{
    display: flex;
    flex-direction: column;
    color: white;
    font: 18px Montserrat-Medium;

    height: 35px;
    padding-left: 5px;
    padding-top: 4px;
}


.descricao{
   padding-top: 3em;
   color: white;
}

.descricao textarea{
    color: #ffffff;
    font: 16px Montserrat-Regular;
    background: transparent;

    outline: none;
    resize: none;
    border-radius: 5px;
    border: 0px transparent;

    width: 600px;
}

.chats{
   display: flex;
   flex-direction: row !important;
   padding: 20px 50px 
}

.img_chats img{
   position: relative;
    padding-right: 10px;
}

.botao-green button{
    position: absolute;
    background-color: #5efc02;
    border: 0px transparent;
   border-radius: 10px;
   padding: 8px;
   margin-bottom: 100px;
  
   
}

.publi{
    margin: 5em 0em 0em 0em;
}

.tit_publi{
    color: #7E00FC;
    font: 17px Montserrat-Regular;
    font-weight: bold;
}

.perfil_box-2{
    display: flex;
    flex-direction: row;
}

.usu img{
    height: 50px;
    width: 60px;

    margin: 5px 8px 2px 0px;
}

.name{
    color: #ffffff;
    font: 16px Montserrat-Regular;
    font-weight: bold;
    margin: 8px 3px 2px 0px;
}

.online{
    color: #ffffff;
    font: 14px Montserrat-Regular;
}

.menu{
    color: #ffffff;
    font-size: 38px;
    font-weight: 700;
    transform: rotate(90deg);
    cursor: pointer;

    text-align: right;
    
    margin-left: 4.3em;
}

`

export {Cabecalho}