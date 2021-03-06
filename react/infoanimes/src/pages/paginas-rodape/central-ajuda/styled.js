import styled from 'styled-components';

const CentralAjudaComp = styled.div`
body{
    margin: 0px !important;
    color: #ffffff;
    font-family: Montserrat-Regular;
}

.seta{
    margin: 2em 0em 2em 4em;
}

.caixa_pergunta_resposta{
    background-color: #747474;

    padding: 3em 3em 0em 3em;
    margin-left: 3em;
    margin-right: 3em;
}

.caixa_pergunta_resposta svg{
    transform: rotate(90deg);
    margin-left: 18px;
    margin-bottom: 9px;
}

.duvida{
    display: flex;
    flex-direction: row;

    font-weight: bold;
}

.resposta{
    font-family: Montserrat-Regular;

    margin-bottom: 1em;
}

.curtidas{
    display: flex;
    flex-direction: row;

    margin-bottom: 1em;
}

.like {
    margin-right: 1em;
}

.like img{
    margin-right: 1em;
}

.deslike{
    display: flex;
    flex-direction: row;
}

.deslike img{
    margin-right: 1em;
    padding-top: 5px;
}

.cont_deslike{
    padding: 0px !important;
    margin-top: 3px;
}

hr{
    height: 2px;
    border: 1px solid #fff;

    margin-left: 1em;
    margin-right: 1em;
}

.caixa_pergunta{
    background-color: #1E1E1E;

    margin-left: 3em;
    margin-right: 3em;
    padding: 2em 3em 0em 3em;
}

.caixa_pergunta svg{
    transform: rotate(270deg);

    margin-left: 18px;
    margin-bottom: 2em;
}
`

export {CentralAjudaComp}