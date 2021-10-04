import styled from 'styled-components'

const Cabecalho = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #1e1e1e;
    color: white;
    padding-left: 1em;
    padding-top: 1em;
    



    .item:hover{
cursor: pointer;
color: #7e00fc;
}

*{
    margin: 0px;
    box-sizing: border-box;
}

.item-favorito, .item-lupa, .item-usuario, .item-logo:hover{
cursor: pointer;
}

.item-logo img{
    height: 2.5em;
    padding-right: 14em;
}

.item{
    margin: 0.8em 0.8em 1.4em 0.8em;
    font-size: 1em;
    font: 14px Montserrat-Regular;
}

.item, .item-favorito img{
 margin-right: 0.5em
}

.item-favorito{
    margin: 0.6em 0.8em 1.2em 0.8em;
    font-size: 1em;
    font: 14px Montserrat-Regular;
}

.item-lupa svg{
    margin-left: 17em;
}

.item-usuario{
    height: 1.8em;
    margin-left: 2em;
}
`

export {Cabecalho}