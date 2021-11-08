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

    async alterarInformacoes(id, nome, email, senha, telefone, online, perfil) {
        let r = await api.put(`/usuario/${id}`, {nome, email, senha, telefone, online, perfil})
        return r.data;
    }






    async excluirperfil(id) {
        let r = await api.delete(`/usuario/${id}`)
    }



    // catalogo/animes


    async listaranimes() {
        let r = await api.get(`/catalogo`)
        return r.data;
    }


    async catalogoanime(idAnime) {
        let r = await api.get(`/catalogo/${idAnime}`)
        return r.data;
    }



    async adicionarcatalogo(id, anime, classificacao, temporadas, genero, estrelando, sinopse, sobre, enredo, capa, ano, video1, video2, imagem) {
        let r = await api.post(`/catalogo/${id}`, { anime, classificacao, temporadas, genero, estrelando, sinopse, sobre, enredo, capa, ano, video1, video2, imagem })
        return r.data;
    }




    // comentarios



    async adicionarcoment(idAnime, idUsuario, comentario) {

        let r = await api.post(`/comentarios/${idAnime}`, {idUsuario, comentario} )
        return r.data;
    }



    async listarcoment(Anime) {
        let r = await api.get(`/comentarios/${Anime}` )
        return r.data;
    }




    
    
    //comunidades






    async listarcomunidades() {
        let r = await api.get(`/comunidade`)
        return r.data;
    }



    async adicionarcomunidade(capa, nome, id_usu) {
        let r = await api.post(`/comunidade`, {capa, nome, id_usu})
        return r.data;
    }






    //chat





    async listarmensagens() {
        let r = await api.get(`/chat`)
        return r.data;
    }


    async adicionarmensagem(id_comuni, id_usu, mensagem) {
        let r = await api.post(`/chat`, { id_comuni, id_usu, mensagem })
        return r.data;
    }


    async alterarmensagem(id, mensagem) {
        let r = await api.put(`/chat/${id}`, { mensagem })
        return r.data;
    }



    async apagarmensagem(id) {
        let r = await api.delete(`chat/${id}`)
        return r.data;
    }
}
   