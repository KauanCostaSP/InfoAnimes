import styled from 'styled-components'

const CabecalhoComp = styled.div`
.voltar-home{
    position: absolute;
   padding-left: 2em;
   padding-top: 2em;
}

.voltar-home img{
    height: 3em;
    filter: invert(100%) sepia(13%) saturate(100%) hue-rotate(130deg) brightness(100%) contrast(100%);
    transition: 0.3s;
}

.voltar-home img:hover{
    height: 3.5em;
    transition: 0.3s;
}

`

export {CabecalhoComp}