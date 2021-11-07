import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    
    async login(email, senha) {
        let r = await api.post(`/login`, { email, senha })
        return r.data;
    }


    async cadastrar(nome, email, senha) {
        let r = await api.post(`/cadastrar`, {nome, email, senha})
        return r.data;
    }




    //perfil 

    async adicionarInformacoes(nome, email, senha, telefone, criacao, online, perfil) {
        let r = await api.post(`/usuario`, {nome, email, senha, telefone, criacao, online, perfil})
        return r.data;
    }






    // catalogo/animes


    async listaranimes() {
        let r = api.get(`catalogo`)
        return r.data;
    }


    async catalogoanime(idAnime) {
        let r = api.get(`catalogo/${idAnime}`)
        return r.data;
    }








    // comentarios



    async adicionarcoment(idUsuario, idAnime, comentario) {
        let chat = {
            anime: {
                id: idAnime
            },
            usuario: {
                id: idUsuario
            },
            comentario: comentario
        }

        let r = await api.post(`/comentarios`, chat)
        return r.data;
    }



    async listarcoment(idAnime) {
        let r = await api.get(`comentarios`, {idAnime})
        return r.data;
    }
}
   