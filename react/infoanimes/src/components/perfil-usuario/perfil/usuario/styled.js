import styled from 'styled-components'

const Cabecalho = styled.div`

display: flex;
flex-direction: column
padding: 0em 0em 0em 0em;
justify-content: center;
align-items: center;
text-align: center;
background-color: #0d0d0d;
height: 100vh;

.box-1{
   
   background-image: url(../../../assets/images/fundo-criar-servidor.png);
   max-width: 58em;
   min-height: 26em;
   margin-top: 2em;
   background-repeat: no-repeat;
  
}

.cabecalho_box-1 {
   display: flex;
   flex-direction: row;
}


.menu_box-1 img{
   display: flex;
   flex-direction: row;
   height: 3.5em;
  margin-left: 54em;
}

.criar{
   margin-left: 50em;
}

.usuario_box-1{
   text-align: center;
}

.perfil_box-1 img{
   text-align: center;

   height: 140px;
   width: 150px;
}

.nick_box-1{
   color: #ffffff;
   font-size: 21px;
   font-family: Montserrat-Regular;
   font-weight: bold;

   margin-top: 0.5em;
   margin-bottom: 1em;
}

.info_1, .info_2{
   color: #ffffff;
   font-size: 14px;
}

.botoes_box-1{
   display: flex;
   flex-direction: row;

   text-align: center;
   
   margin-left: 18em;
   margin-top: 2em;
}

.botao_editar button{
   color: #ffffff;
   font-size: 15px;
   font-family: Montserrat-Regular;
   font-weight: bold;
   background-color: #7E00FC;

   border-radius: 30px;
   border: 1px solid #7E00FC;

   padding: 5px 30px 5px 30px;
   margin-right: 3em;
}

.botao_chat img{
   padding-top: px;
   margin-right: 5px;
}

.botao_chat button{
   color: #ffffff;
   font-size: 15px;
   font-family: Montserrat-Regular;
   font-weight: bold;
   background-color: #7E00FC3D;

   border-radius: 30px;
   border: 1px solid #ffffff;

   padding: 0px 35px 5px 35px;
}



.box-2{

   background: linear-gradient(180deg, #530194 31.77%, rgba(83, 1, 148, 0) 100%);
   padding: 2em 0em 5em 0em;
   max-width: 58em;
   margin-top: 3.5em;
   
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

export { Cabecalho }