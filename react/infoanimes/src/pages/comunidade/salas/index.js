import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

import BoxMsg from "../../../components/comunidade1/sala/box-mensagem"

import { Container } from "./styled"
import UsersOn from "../../../components/comunidade1/sala/box-users-on"
import { useRef, useState } from "react"
import api from "../../../service/api"
const Api = new api();

export default function Salas() {
    
   
    return (
        <Container>
            <ToastContainer />
           
        <div className="cabecalho-chat">
            <div className="seta-sair" > <img src="../../../assets/images/Arrow 1.svg" alt="" /></div>
            <div className="itens-direita">
                <div className="buscar"><input type="text" placeholder="Buscar..." /> </div>
                <div className="menu">...</div>
                <div className="pessoas" ><img src="../../../assets/images/pessoas-img.PNG" alt=""/></div>
            </div>
        </div>


        <div className="conteudo">
            <UsersOn />
           
            <BoxMsg />
            
        </div>
    </Container>
    )
}