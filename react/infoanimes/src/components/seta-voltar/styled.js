import styled from 'styled-components'

const CabecalhoComp = styled.div`
.voltar-home{
   position: absolute;
   padding-left: 1em;
   padding-top: 1em;
}

.voltar-home img{
    height: 1.5em;
    filter: invert(100%) sepia(13%) saturate(100%) hue-rotate(130deg) brightness(100%) contrast(100%);
    transition: 0.3s;
}

.voltar-home img:hover{
    height: 2em;
    transition: 0.3s;
}

`

export {CabecalhoComp}