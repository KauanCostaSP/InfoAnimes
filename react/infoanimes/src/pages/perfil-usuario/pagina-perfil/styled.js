import styled from "styled-components";

const Container=styled.div`

*{
    margin: 0px;
    box-sizing: border-box;
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

.item-sobre{
    margin: 0.8em 0.8em 1.4em 0.8em;
    color: #7E00FC !important;
    font-size: 15px;
    font-family: Montserrat-Regular !important;
    font-weight: bold;
}

.item-sobre a{
    color: #7E00FC;
    font-size: 15px;
}
`

export {Container}