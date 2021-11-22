import styled from "styled-components";

const Comunidade = styled.div`

    
    margin: 15px;
    width: 270px;
    



    .titulo{
    margin-left: .2em;
    font-family: fonte-200;
    font-size: small;
    color: #7E00FC;
}

.descricao{
    margin-top: .6em;
}

.bt{
    font-family: fonte-100;
    font-size:x-small;
    text-decoration: none;
    color: white;
    background: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 20px;
    padding: 3px;
    margin-left: .5em;
}

.imagem img{
    width: 270px;
    border-radius: 5px;
    margin-top: 1em;
  }

  .comunidade .acao{
    background: #323232;
}

acao{
    width: 200px;
}

.like img{
    width: 25px;
  }

  .compartilhar img{
    width: 25px;
  }

  .chat img{
    width: 25px;
  }

  .imagem img{
      display: flex;
      justify-content: center;
      
  }

`

export {Comunidade}