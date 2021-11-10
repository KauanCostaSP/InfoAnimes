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

.item-1, .item-2, .item-3, .item-4, .item-5, .item-6{
    margin: 0.8em 0.8em 1.4em 0.8em;
    font-size: 1em;
    font: 14px Montserrat-Regular;
}

.item-1, .item-2, .item-3, .item-4, .item-5, .item-6, .item-favorito img{
 margin-right: 8px;
}

.item-favorito{
    margin: 0.6em 0.8em 1.2em 0.8em;
    font-size: 1em;
    font: 14px Montserrat-Regular;
}

#divBusca {
    display: flex;
    flex-direction: row;
    background-color: #2F4F4F;
    border: solid 1px;
    border-radius: 3em;
    padding: 0.5em 1em 0em 0.5em ;
    height: 2.4em;
    width: 300px;
}
  
#txtBusca {
    float: left;
    background-color: trasparent !important;
    padding-left: 5px;
    font-style: italic;
    font-size: 18px;
    border: none;
    height: 20px;
    width: 240px;
}

input {
    background-color: transparent;
    outline: none;
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

.item-1, .item-2, .item-3, .item-4, .item-5, .item-6{
    text-decoration: none;
    color: #ffffff;
}

.itens-end{
    display: flex;
    flex-direction: row;
    margin-right: 30px;
}


@media screen and (max-width: 768px) {

        display: flex;
        flex-direction: column;

        .item-logo{
            display: flex;
            justify-content: center;
        }

    .item-logo img{
        height: 3.5em;
        padding-right: 0em;

    }


    .itens{
    justify-content: none;
    margin: 0;
    padding: 0;
    }


    .item-1, .item-2, .item-3, .item-4, .item-5, .item-6{
        font: 12px Montserrat-Regular;
    }


    .itens-end{
        padding-right: 100px;
        display: flex;
        justify-content: center;
        align-itens: center;
        padding-left: 9em; 
    }


    .item-2{
        display: none;
    }

    .item-lupa{
        margin-right: 15em;
    }

    .item-lupa svg{
        margin: 0;
        padding: 0;
        viewBox="0 0 0 0"
    }

    .item-usuario, item-usuario img{
        margin: 0;
        padding: 0;
    }

    .item-usuario img{
        height: 1.5em;
    }


}



`

export {CabecalhoComp}