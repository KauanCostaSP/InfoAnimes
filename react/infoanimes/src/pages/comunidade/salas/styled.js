import styled from "styled-components";

const Container = styled.div`
background-image: url(/assets/images/fundo-sala.jpeg);
    box-shadow: 0px 4px 20px #ffffff;
    background-size: 100%;
    padding: 41.5px;
    color: #ffffff;

    .cabecalho-chat{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.itens-direita{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.menu{
    color: #ffffff;
    font-size: 33px;
    font-weight: 700;
    transform: rotate(90deg);
    cursor: pointer;
    margin-left: 30px;
    margin-right: 10px;
}


input{
   
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        color: #ffffff;
    
}

.pessoas img{
    width: 50px;
}

.buscar {
    background-color: #323232BF;
    border: none;
    border-radius: 5px;
    height: 28px;
    
    padding-right: 3px;
}

.buscar input{
    background-color: transparent;
    border: none;
    border-radius: 5px;
    height: 28px;
}

.buscar img {
    width: 20px;
    
    height: auto;
}

.foto-usu img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.conteudo{
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    margin-left: 2.5em;
}

.usuarios-on{
    background: rgba(50, 50, 50, 0.3);
    box-shadow: 0px 4px 20px #A245FF;
    border-radius: 5px;
    overflow: auto;
    width: 280px;
    height: 537px;
    max-width: 100%;
    max-height: 450px;
    margin-bottom: 34px;
    padding-left: 5px;
    padding-top: 15px;
}


.nome{
    font: 18px fonte-100;
}

.usuarios-on::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: none;
}

.usuarios-on::-webkit-scrollbar
{
	width: 7px;
	background-color: none;
    border-radius: 10px;
}

.usuarios-on::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 1px rgba(0,0,0,.3);
	background-color: transparent;
    border: 1px solid white;
}

.blocos-usu{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 265px;
    padding-top: 5px;
}

.bloco-destaque{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    width: 265px;
    padding-top: 5px;
    background-color: #6908ca88;
}

.mensagens{
    margin-left: 40px;
    margin-top: 7px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    height: 390px;
    width: 58em;
    overflow-y: auto;
    
}

.usuario-mensagem{
    font: 18px fonte-100;
}

.mensagem{
    background-color: #5301946E;
    border-radius: 6px;
    width: 476px;
    height: 45px;
    margin-bottom: 10px;
    flex-wrap: wrap;
    overflow-x: none;
}



.texto-mensagem{
    padding-right: 70px;
    font: 17px fonte-100;
    font-weight: 400;
    
    display: flex;
    flex-wrap: wrap;
    
    
}

.mensagens::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px #323232;
	border-radius: 10px;
	background-color: none;
}

.mensagens::-webkit-scrollbar
{
	width: 7px;
	background-color: none;
    border-radius: 10px;
}

.mensagens::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 1px rgba(0,0,0,.3);
	background-color: #7E00FC;
    
}

.digite-mensagem input{
    margin-left: 80px;
    background: transparent;
    border: 3px solid #1E1E1E;
    width: 59em;
    height: 35px;
    border-radius: 20px;
}
`

export {Container}