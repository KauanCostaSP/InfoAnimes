import styled from "styled-components";

const Container = styled.div`
.card{
    display: flex;
    align-items: flex-start;
    width: 250px;
    height: 360px;
    padding: 2rem 1rem;
    background: white;
    border-radius: 5px;
    position: relative;
    transition: 0.5s ease-in-out;
    justify-content: center;
}

.card:hover{
    transform: translateY(20px);
    transform: scale(1.1);
    z-index: 3;
}

.card::before{
    display: block;
    width: 154%;
    height: 100%;
    max-width: 155%;
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.63);
    border-radius: 5px;
    box-shadow: 0 0 5em rgba(255, 255, 255, 0.726);
    top: 0px;
    left: 0px;
    z-index: 3;
    transition: 0.5s all;
    opacity: 0;
}

.card:hover::before{
    opacity: 1;
}

.card img{
    width: 377px;
    height: 100%;
    top: 0px;
    left: 0px;
    border-radius: 5px;
    position: absolute;
    object-fit: cover;
}

.card .informacoes{
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s all;
}

.card:hover .informacoes{
    opacity: 1;
    transform: translateY(0px);
    
}

.card .informacoes .btn{
    color: white;
    text-decoration: none;
    border: none;
    background: #530194;
    
    border-radius: 20px;
    position: absolute;
    width: 100px;
    height: 30px;
    text-align: center;
    margin-top: 2em;
    padding: 4.8px;
}

.card .informacoes .btn:hover{
    background: #FFFF;
    color: #561DFA;
    box-shadow: 0 0 50px #561DFA;
}

.card .informacoes .bt{
    width: 110px;
    height: 40px;
    margin-left: .5em;
    padding: 3px;
    
    text-decoration: none;
    color: white;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 20px;
    background:transparent
}

.card .informacoes h1{
    margin-top: 1em;
}

.card .informacoes p{
    margin-top: 1em;
}


    img{
    width: 377px;
    height: 100%;
    top: 0px;
    left: 0px;
    border-radius: 5px;
    position: absolute;
    object-fit: cover;
}

.informacoes{
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s all;
}

:hover .informacoes{
    opacity: 1;
    transform: translateY(0px);
}

.informacoes .btn{
    color: white;
    text-decoration: none;
    border: none;
    background: #530194;
    
    border-radius: 20px;
    position: absolute;
    width: 100px;
    height: 30px;
    text-align: center;
    margin-top: 2em;
    padding: 4.8px;
}
`



export{Container}