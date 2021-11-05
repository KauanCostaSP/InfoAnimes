import styled from "styled-components";

const Container = styled.div`
    margin: 0px !important;
    width: 100vw;
    height: 100vh;
    padding-top: 50px;
    background-color: #0E0E0E;  
    

   

    .login{
    background-color: #7E00FC14;
    text-align: center !important;
    padding: 2em 0em 0em 0em;
    display: flex;
    flex-direction: column;
    width: 400px;
    margin-left: 500px;
    justify-content: center ;
    align-items: center;
    margin-bottom: 40px;
    border-radius: 25px;
    box-shadow: 0 0 2em #A245FF;
    
}

.em_sen input{
    background-color: #ffffff;
    color: #000000;
    outline: none;
    border-radius: 3px;
    border: 0px transparent;
    height: 25px;
    width: 320px;

    margin-top: 8px;
    margin: 0.5em 1em 0em 1em;
    padding-left: 12px;
}

input::placeholder {
    color: black;
}

.or{

    margin-top: 25px;
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 15px;
}

hr{
    border: 1px solid #ffffff;
    width: 2em  ;
}

.login_por{
    border-radius: 3px;
    background-color: #ffffff;
    height: 32px;
    margin: 0.5em 1.6em 0em 1.6em;
}

.login_por img{
    margin-top: 2px;
}

.login_por input{
    border-radius: 3px;
    height: 20px;
    outline: none;
    background: #ffffff;
    border: 0px transparent;
    padding-left: 0px;
    width: 250px;
    margin: 0em 1em 0em 1em;
}

.login_por button {
    background: #ffffff;
    border: 0px transparent;
}

.item:hover{
    color: #7e00fc;
}

.botao_login button{
    color: #ffffffff;
    font-size: 16px;
    font-weight: bold;
    background-color: #530194;

    border-radius: 6px;
    border: 0px transparent;
    cursor: pointer;
    width: 120px;
    height: 30px;
    margin-top: 3em;
    margin-bottom: 2em;
    

    
}

.botao_login button:hover{
    background: #FFFF;
    color: #561DFA;
    box-shadow: 0 0 50px #561DFA;
}

.botoes{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0px 20px 0px 20px;
}

.esqueceu_senha button{
    background-color: transparent;
    border: none;
    color: #561DFA;
    box-shadow: 0 0 50px #561DFA;
}

.esqueceu_senha{
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
}

.cadastrar button:hover{
    background: #FFFF;
    color: #561DFA;
    box-shadow: 0 0 50px #561DFA;
}

.cadastrar button{
    color: #ffffffff;
    font-size: 16px;
    font-weight: bold;
    background-color: #530194;

    border-radius: 6px;
    border: 0px transparent;
    cursor: pointer;
    width: 120px;
    height: 30px;
    margin-left: 40px;
    margin-top: 15px;
}
`

export {Container}