import styled from 'styled-components'

const Cabecalho = styled.div`

padding: 3em 0em 0em 0em;
justify-content: center;
align-items: center;
text-align: center;
background-color: #0d0d0d;

.box-1{
    background-image: url(../../../assets/images/fundo-criar-servidor.png);
   max-width: 58em;
   min-height: 26em;
   margin-left: 13em;
}

.cabecalho_box-1 {
   display: flex;
   flex-direction: row;
}

.criar img, .perfil img{
   display: flex;
   flex-direction: row;
   height: 2em;
   padding: 10px 0px 0px 10px;
}

.menu_box-1 img{
   display: flex;
   flex-direction: row;
   height: 3.5em;
   padding-bottom: 10px;
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
`

export { Cabecalho }