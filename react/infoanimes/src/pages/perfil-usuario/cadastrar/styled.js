import styled from "styled-components";

const Container = styled.div`
    background-color: #0E0E0E;
    padding-top: 50px;
    
        

    .cadastrar{
        box-shadow: 0 0 2em #A245FF;
    border-radius: 2em;
        background-color: #7E00FC14;
        display: flex;
        flex-direction: column;
        align-items: center;
    padding: 2em 1em 1em 1em;
    width: 18em;
    display: flex;
    flex-direction: column;
    align-items: center ;
    margin-left: 550px;
    margin-bottom: 40px;
    }

    .form_preenchimento input{
    background-color: #ffffff;
    color: #000000;
    outline: none;
    border-radius: 3px;
    border: 0px transparent;
    height: 25px;
    width: 240px;

    margin-top: 8px;
    
    padding-left: 12px;
}

input::placeholder {
    color: black;
}

.botao_cadastrar button{
    color: #ffffffff;
    font-size: 16px;
    font-weight: bold;
    background-color: #530194;

    border-radius: 6px;
    border: 0px transparent;

    padding: 8px 8px 8px 8px;
    margin-top: 3em;
    margin-bottom: 2em;
    

    width: 11em;
}

.botao_cadastrar button:hover{
    background: #FFFF;
    color: #561DFA;
    box-shadow: 0 0 50px #561DFA;
}
`

export {Container}