import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    
    async logar(email, senha) {
        let r = await api.post(`/login`, { email, senha })
        return r.data;
    }

    async cadastrar(nome, email, senha) {
        let r = await api.post(`/usuario`, {nome, email, senha})
        return r.data;
    }




    //perfil 

    async alterarInformacoes(id, nome, biografia, telefone, genero ) {
        let r = await api.put(`/usuario/${id}`, {nome, biografia, telefone, genero })
        return r.data;
    }






    async excluirperfil(id) {
        let r = await api.delete(`/usuario/${id}`)
        return r.data;
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



    async adicionarcatalogo( nome, classificacao, temporadas, genero, sinopse, sobre, enredo, capa, ano, video1, video2, imagem) {
        let r = await api.post(`/catalogo`, { nome, classificacao, temporadas, genero, sinopse, sobre, enredo, capa, ano, video1, video2, imagem })
        return r.data;
    }




    // comentarios



    async adicionarcoment(comentario, idAnime) {

        let r = await api.post(`/comentarios`, {comentario, idAnime} )
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



    async adicionarcomunidade(capa, nome, id_usu, descricao, ) {
        let r = await api.post(`/comunidade`, {capa, nome, id_usu, descricao})
        return r.data;
    }






    //chat





    async listarmensagens(id) {
        let r = await api.get(`/chat${id}`)
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

   





//Favoritos


    async mostrarFavoritos (usuario) {
        let v = await api.get(`/favorito/?usuario=${usuario}`)
        return v.data;
    }

    async adicionarFavoritos(usuario, anime) {
        let v = await api.post('/favorito', {
            usuario,
             anime
        });
        return v.data;
    }

    async deletarFavorito(id) {
        let v = await api.delete('/favorito/' + id)
        return v.data;
    }
}