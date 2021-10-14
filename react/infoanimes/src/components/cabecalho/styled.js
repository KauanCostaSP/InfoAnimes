import styled from 'styled-components'

const CabecalhoComp = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #1e1e1e;
    color: white;
    padding-left: 1rem;
    padding-top: 1rem;
    justify-content: space-between;
   



    .item:hover{
    cursor: pointer;
    color: #7e00fc;
    }

    .item-favorito :hover{
        cursor: pointer;
    color: #7e00fc;
    }

.itens{
    display: flex;
    flex-direction: row;
}


.item-favorito, .item-lupa, .item-usuario, .item-logo:hover{
cursor: pointer;
}

.item-logo img{
    height: 2.5em;
    padding-right: 14em;
}

.itens{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.item{
    margin: 0.8em 0.8em 1.4em 0.8em;
    font-size: 1em;
    font: 14px Montserrat-Regular;
}

.item, .item-favorito img{
 margin-right: 8px;
}

.item-favorito{
    margin: 0.6em 0.8em 1.2em 0.8em;
    font-size: 1em;
    font: 14px Montserrat-Regular;
}

.item-lupa svg{
    margin-left: 17em;
    fill: #ffffff;
    width: 31px;
    height: 31px;
}

.item-usuario{
    height: 1.8em;
    margin-left: 2em;
}

.item{
    text-decoration: none;
    color: #ffffff;
}

.itens-end{
    display: flex;
    flex-direction: row;
    margin-right: 30px;
}
`

export {CabecalhoComp}