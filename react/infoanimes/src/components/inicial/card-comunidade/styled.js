import styled from "styled-components";

const Card = styled.div`

    display: flex;
    align-items: flex-start;
    width: 380px;
    height: 360px;
    padding: 2rem 1rem;
    background: white;
    border-radius: 5px;
    position: relative;
    transition: 0.5s ease-in-out;
    color: white;
    text-decoration: none;
    border: none;
    background: #530194;
    box-shadow: 0px 4px 10px #A64FFD;
    border-radius: 20px;
    position: absolute;
    width: 100px;
    height: 30px;
    text-align: center;
    margin-top: 2em;
    padding: 4.8px;
    width: 110px;
    height: 40px;
    margin-left: .5em;
    padding: 3px;
    margin-top: 1em;
    text-decoration: none;
    color: white;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 20px;
    background:transparent;
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s all;

    :hover {
    opacity: 1;
    transform: translateY(0px);
}
    

    :hover{
    transform: translateY(20px);
    transform: scale(1.1);
    z-index: 1;
    }

    :before{
    display: block;
    width: 155%;
    height: 100%;
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.63);
    border-radius: 5px;
    box-shadow: 0 0 5em rgba(255, 255, 255, 0.726);
    top: 0px;
    left: 0px;
    z-index: 2;
    transition: 0.5s all;
    opacity: 0;
}

:hover::before{
    opacity: 1;
}


.info .btn{
    color: white;
    text-decoration: none;
    border: none;
    background: #530194;
    box-shadow: 0px 4px 10px #A64FFD;
    border-radius: 20px;
    position: absolute;
    width: 100px;
    height: 30px;
    text-align: center;
    margin-top: 2em;
    padding: 4.8px;
}



.info{
    opacity: 1;
    transform: translateY(0px);
}




.info h1{
    margin-top: 1em;
}

img{
    width: 380px;
    height: 360px;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    border-radius: 5px;
    position: absolute;
    object-fit: cover;
}

.info{
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s all;
}

`

export {Card}