import styled from "styled-components";

const Container = styled.div`
    font-family: Montserrat-Regular;
    margin: 0px !important;

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

.item-favorito{
    margin: 0.8em 0.8em 1.4em 0.8em;
    color: #7E00FC !important;
    font-size: 15px;
    font-family: Montserrat-Regular !important;
    font-weight: bold;
}

.item-favorito a{
    color: #7E00FC;
    font-size: 15px;
}

.favoritos{
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-image: url(../../../assets/images/back_favoritos.png);
    background-size: 1359px;
}

.back{
    background-image: linear-gradient(to bottom, #5201949c, #0d0d0d);
    background-repeat: no-repeat;
}

.user{
    display: flex;
    flex-direction: row;

    margin-bottom: 3em;
    padding: 7em 0em 0em 6em;

}

.nick{
    position: relative;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    padding-top: 20px;
    padding-left: 10px;
}

.pontos{
    color: #ffffff;
    font-size: 38px;
    font-weight: 700;
    transform: rotate(90deg);
    cursor: pointer;

    text-align: right; 

    margin-left: 24em;
    margin-right: 10px;
}

.animes{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 0em 5em 2em 6em ;
}

.anime{
    margin-right: 2em;
    color: #ffffff;
    text-decoration: none;
}

.anime img:hover{
    box-shadow: 0 0 1.2em white;
    border-radius: 10px;
}

.titulo{
    color: #ffffff;
    font-size: 20px;
    font-family: Montserrat-Regular;
    font-weight: bold;

    white-space: nowrap;
    text-overflow: hidden;
    text-overflow: ellipsis;

    text-align: center;
    align-items: center;

    max-width: 167px;
    margin-bottom: 2.9em;
}

.item:hover{
    color: #7e00fc;
}
`

export {Container}