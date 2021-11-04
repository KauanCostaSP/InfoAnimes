import styled from "styled-components";

const Container = styled.div`
    
    
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

`

export {Container}