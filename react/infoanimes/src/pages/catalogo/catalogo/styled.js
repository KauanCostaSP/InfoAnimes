import styled from "styled-components";

const Container = styled.div`
    body{
    margin: 0px;
    color: #fff;
    font-family: Montserrat-Regular;
}

body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #323232;
}
  
body::-webkit-scrollbar {
    width: 7px;
    border-radius: 10px;
    background-color: #323232;
}
  
body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #7E00FC;
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

.catalogo{
    background-image: linear-gradient(to bottom, #000000, #0d0d0d);
}

.adi_fav{
    display: block;
    right: 0;
    position: absolute;
    margin-right: 20px;
    margin-top: 30px;    
    
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid #aa8ed6;
    padding: 1em;
    padding-bottom: 0.5em;
}

.adi_fav img{

    width: 24px;
    height: 24px;
}

.info_basica{
    background-position: absolute;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-image: url('/assets/images/back_kakegurui.png');
    padding-left: 2em;
    padding-bottom: 3em;
}

.situacao{
    color: #7e00fc;
    font-size: 16px;
    font-family:  Montserrat-Medium;
    
    padding-top: 25em;
}

.info_b{
    display: flex;
    flex-direction: row;
    color: #ffffff;
    font-size: 18px;
    width: 70em;
    margin-top: 15px;
}

.classificacao{
    background-color: #ff0000;
    border-radius: 3px;
    padding: 4px 10px;
    margin: 0px 8px;
}

.produtora{
    margin-left: 6px;
}

.info_gerais{
    padding-left: 2em;
    padding-right: 5em;
    padding-top: 3.5em;
}

.gen_est{
    display: flex;
    flex-direction: row;
}

.genero{
    width: 500px;

    margin-right: 10em;
}

.tit_gen{
    font-family: Montserrat-Regular;
    font-size: 16px;
    font-weight: bold;
    color: #747474;

    margin-bottom: 2em;
}

.text_gen{
    font-family: Montserrat-Regular;
    font-size: 17px;
    color: #ffffff;

    margin-bottom: 3.8em;
}

.estrelando{
    width: px;
}

.atores{
    display: flex;
    flex-direction: row;
}

.est{
    height: 60px;

    margin-right: 3em;
}

.tit_est{
    font-family: Montserrat-Regular;
    font-size: 16px;
    font-weight: bold;
    color: #747474;

    margin-bottom: 2em;
}

.text_est{
    font-family: Montserrat-Regular;
    font-size: 17px;
    color: #ffffff;
}

.tit_s{
    display: flex;
    flex-direction: row;

    color: #747474;
    font-weight: bold;
    font-size: 19px;
    font-family: Montserrat-Regular;

    margin-bottom: 2em;
}

.linha_red{
    width: 0px;
    height: 30px;
    border: 2px solid #ff0000;

    margin-right: 30px;
}

.text_s{
    color: #ffffff;
    font-size: 16px;
    font-family: Montserrat-Regular;

    margin-bottom: 2.5em;
}

.videos{
    margin-left: 3em;
    margin-bottom: 6em;
}

.titulo_v{
    color: #747474;
    font-size: 19px;
    font-family: Montserrat-Regular;

    margin-bottom: 1.2em;
}

.nome_anime_v{
    color: #747474;
    font-size: 19px;

    margin-left: 8px;
}

.trailers{
    display: flex;
    flex-direction: row;
}

.trailer{
    margin-right: 3em;
}

.titulo_video{
    display: flex;
    flex-direction: row;

    color: #ffffff;
    font-size: 16px;
    font-family: Montserrat-Regular;

    margin-right: 3em;
}

.comentarios{
    margin-left: 5em;
}

.coment{
    font-family: Montserrat-Regular;
    font-size: 16px;
    color: #ffffff;

    margin-bottom: 1em;
}

.frase{
    font-family: Montserrat-Regular;
    font-size: 16px;
    color: #747474;

    margin-bottom: 2.4em;
    width: 650px;
}

.novo_coment{
    display: flex;
    flex-direction: row;

    margin-bottom: 3em;
}

.adicionar{
    color: rgb(255, 255, 255);
}

.adicionar hr{
    width: 555px;
    border-color: #7e00fc;
    margin-left: 1em;
}

.adicionar hr:hover{
    border-color: #ffffff;
}

.adicionar textarea{
    color: #ffffff;
    background-color: transparent;
    font-size: 14px;
    font-family: Montserrat-Medium;

    width: 555px;
    height: 22px;
    border: 0px transparent;
    outline: none;
    resize: none;

    margin-left: 1em;
    margin-bottom: 0.5em;
}

#adi:hover{
    text-decoration: underline;
}



.coment_postado{
    width: 650px;
}

.usuario_postado{
    display: flex;
    flex-direction: row;

    margin-bottom: 1em;
}

.usu_dat{
    margin-left: 1em;
}

.nick_postado{
    color: #ffffff;
    font-size: 14px;
    font-family: Montserrat-Medium;
    font-weight: bold;
}

.data_postado{
    color: #909090;
    font-size: 14px;
    font-family: Montserrat-Medium;
}

.responder{
    color: #747474;
    font-size: 16px;
    font-family: Montserrat-Regular;

    text-align: right;
}

.responder:hover{
    text-decoration: underline;
}

.comentario{
    color: #ffffff;
    font-size: 16px;
    font-family: Montserrat-Regular;

    width: 555px;
    margin-left: 5em;
    margin-bottom: 3em;
}

.ver_respostas{
    color: #7e00fc;
    font-size: 15px;
    font-family: Montserrat-Regular;
    justify-content: center;

    display: flex;
    flex-direction: row;

    margin-left: 4em;
}

.ver_respostas svg{
    transform: rotate(270deg);

    margin-top: 2px;
    margin-left: 10px;
}

.item:hover{
    color: #7e00fc;
}
`

export {Container}