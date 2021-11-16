import styled from 'styled-components'

const Cabecalho = styled.div`

display: flex;
flex-direction: column
padding: 0em 0em 0em 0em;
justify-content: center;
align-items: center;
text-align: center;
background-color: #0d0d0d;

.box-1{
   background-image: url(../../../assets/images/fundo-config-2.png);
   margin-top: 5em;
   margin-bottom: 5em;
   padding: 5em 7em 4em 7em;
   transition: 0.7s;
   max-width: 100%;
   height: auto;
}

.box-1:hover{
   box-shadow: 0px 4px 30px #A245FF;
   transition: 0.7s;
}

.botao_voltar button:hover{
   cursor: pointer;
}

.botao_desativar button:hover{
   cursor: pointer;
}

.cabecalho_box-1 {
   display: flex;
   flex-direction: row;
}


.criar{
   margin-left: 50em;
}

.usuario_box-1{
   text-align: center;
}

.perfil_box-1 img{
   text-align: center;
   filter: invert(100%) sepia(13%) saturate(100%) hue-rotate(130deg) brightness(100%) contrast(100%);
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
   margin-left: 0em;
   margin-top: 2em;
}

.botao_voltar button{
   color: #ffffff;
   font-size: 15px;
   font-family: Montserrat-Regular;
   background-color: #7E00FC;

   border-radius: 30px;
   border: 1px solid #7E00FC;

   padding: 5px 30px 5px 30px;
   margin-right: 3em;
}

.botao_desativar button{
   color: #ffffff;
   font-size: 15px;
   font-family: Montserrat-Regular;
   background-color: transparent;
   border: 0;
   text-decoration: underline;
   padding-left: 9em;
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
  opacity: 0.7;
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
   color: white;
   opacity: 0.7;
   text-align: left;
   padding-left: 6em;
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


.alterar button{
   font-family: fonte-100;
   font-size: 15px;
   color: white;
   position: relative;
   background-color: #373737;
   opacity: 0.9;
   border: none;
   width: 30em;
   height: 3em;
   margin-top: 2.5em;
   border: none;
}

.alterar button:hover{
   cursor: pointer;
}

.alterar button::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 15px;
   height: 15px;
   overflow: hidden;
   border-top: 2px solid white;
   border-left: 2px solid white;
   transition: 0.5s;
   opacity: 0.9;
}

.alterar button:hover::before{
   width: 99%;
   height: 97%;
}

.alterar button::after{
   content: '';
   position: absolute;
   bottom: 0;
   right: 0;
   width: 15px;
   height: 15px;
   border-bottom: 2px solid white;
   border-right: 2px solid white;
   transition: 0.5s;
   opacity: 0.9;
}

.alterar button:hover::after{
   width: 99%;
   height: 95%;
}

.campo-nome{
   margin: 3em 0px 0px 0em;
   text-align: center;
   opacity: 0.9;
  
  }

.campo-usuario, .campo-biografia, .campo-email, .campo-telefone, .campo-genero{
   margin: 1em 0px 0px 0em;
   text-align: center;
   opacity: 0.9;
  }
  
  .campo-nome input, .campo-usuario input, .campo-biografia input, .campo-email input, .campo-telefone input, .campo-genero input{
  position: relative;
   background-color: #373737;
   border: none;
  font: 1em fonte-100;
  color: white;
  padding: 15px 60px 15px 15px;
  background-repeat: no-repeat;
  }

  @media screen and (max-width: 768px) {

   .box-1{
      padding: 2em 2em 2em 2em;
   }


   .perfil_box-1 img{
      height: 70px;
      width: 70px;
   }

   .alterar button{
      font-size: 10px;
   }
     
     .campo-nome input, .campo-usuario input, .campo-biografia input, .campo-email input, .campo-telefone input, .campo-genero input{
     font: 0.5em fonte-100;
     padding: 15px 60px 15px 15px;
     }

     .botoes_box-1{
      display: flex;
      flex-direction: row;
      text-align: center;
      margin-left: 0em;
      margin-top: 2em;
   }
   
   .botao_voltar button{
      font-size: 10px;
      padding: 5px 30px 5px 30px;
      margin-right: 3em;
   }
   
   .botao_desativar button{
      font-size: 10px;
      padding-left: 9em;
   }

   .box-1:hover{
      box-shadow: 0px 0px 0px #A245FF;
   }

   }

`

export { Cabecalho }