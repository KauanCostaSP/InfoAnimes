import db from './db.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());




//Endpoints /login




app.post('/login', async (req, resp) => {
    try {
        let { email, senha } = req.body;
    
    let i = await db.infod_tif_usuario.findOne({
        where: {
            ds_email: email,
            ds_senha: senha
        },
        raw : true
    })

    if (i == null) {
        return resp.send({ erro: 'preenche direito abestalhado' });
    }
    resp.send(i);
    } catch (e) {
        resp.send({ erro : e.toString() })
    }
})







//Endpoints /cadastrar






app.post('/cadastrar', async (req, resp) => {
    try {
        let { nome, email, senha} = req.body;

        let h = await db.infod_tif_usuario.create({
            where: {
                nm_nome: nome,
                ds_email: email,
                ds_senha: senha
            },
            raw : true
        })

        if (h == null) {
            return resp.send({ erro: 'ah vai pa bosta amigo, preenche de novo' });
        }
        resp.send(h);
    } catch (e) {
        resp.send({ erro : e.toString() })
    }
})







//Endpoints /usuario 








app.get('/usuario', async (req, resp) => {
try{
    
    let r = await db.infod_tif_usuario.findAll()

    resp.send(r)

} catch (e) {
    resp.send({ error: e.toString() })
}
})




app.post('/usuario', async (req, resp) => {
    try {
        
        let { nome, email, senha, telefone, criacao, online, perfil } = req.body;

        let r = await db.infod_tif_usuario.create({
            nm_usuario: nome,
            ds_email: email,
            ds_senha: senha,
            ds_telefone: telefone,
            dt_criacao: criacao,
            bt_online: online,
            ds_perfil: perfil
        })

        resp.send(r)

    } catch (e) {
        resp.send({ error: e.toString() })
    }
})






app.put('/usuario', async (req, resp) => {
    try {
        
        let { nome, email, senha, telefone, criacao, online, perfil } = req.body;

        let r = await db.infod_tif_usuario.update({
            nm_usuario: nome,
            ds_email: email,
            ds_senha: senha,
            ds_telefone: telefone,
            dt_criacao: criacao,
            bt_online: online,
            ds_perfil: perfil
        })

        resp.send(r)

    } catch (e) {
        resp.send({ error: e.toString() })
    }
})





app.delete('/usuario/:id', async (req, resp) => {
    try {

        let r = await db.infod_tif_usuario.destroy({ where: {id_usuario: req.params.id } })

        resp.sendStatus(200)
        
    } catch (e) {
        resp.send({ error: e.toString() })
    }

})








//endpoints /catalogo









app.get('/catalogo', async (req, resp) => {
    try {
        
        let r = await db.infod_tif_animes.findAll()

        resp.send(r)

    } catch (e) {
        resp.send({ error: e.toString() })
    }
})


app.get('/catalogo/:id', async (req, resp) => {
    try {
        
        let r = await db.infod_tif_animes.findOne({where: {id_anime: req.params.id}})

        resp.send(r)

    } catch (e) {
        resp.send({ error: e.toString() })
    }
})



app.post('/catalogo', async (req, resp) => {
    try {
        let { anime, classificacao, temporadas, genero, estrelando, sinopse, sobre, enredo, capa, postagem, ano, video1, video2 } = req.body;

    let a = await db.infod_tif_animes.create({
        nm_anime: anime,
        ds_classificação: classificacao,
        ds_temporadas: temporadas,
        ds_genero: genero,
        ds_estrelando: estrelando,
        ds_sinopse: sinopse,
        ds_sobre: sobre,
        ds_enredo: enredo,
        ds_capa: capa,
        dt_postagem: postagem,
        dt_ano: ano,
        ds_video1: video1,
        ds_video2: video2      
    })

    resp.send(a);

}   catch(b) {
        resp.send({erro: b.toString() })
    }
})





app.put('/catalogo/:id', async (req, resp) => {
    try {
        
        let { anime, classificacao, temporadas, genero, estrelando, sinopse, sobre, enredo, capa,  ano, video1, video2 } = req.body;

    let a = await db.infod_tif_animes.update({
        nm_anime: anime,
        ds_classificação: classificacao,
        ds_temporadas: temporadas,
        ds_genero: genero,
        ds_estrelando: estrelando,
        ds_sinopse: sinopse,
        ds_sobre: sobre,
        ds_enredo: enredo,
        ds_capa: capa,
        dt_ano: ano,
        ds_video1: video1,
        ds_video2: video2      
    },
    {
        where: { id_anime: req.params.id }
    })

    resp.send(a);

    } catch(b) {
        resp.send({erro: b.toString() })
    }
})






app.delete('/catalogo/:id', async (req, resp) => {
    try {
        
        let r = await db.infod_tif_animes.destroy({ where: {id_anime: req.params.id } });

        resp.sendStatus(200)

    } catch (e) {
        resp.send({ error: e.toString() })
    }
})





//endpoints /comentarios



app.get('/comentarios/:anime', async (req, resp) => {
    try {
        
        let anime = await db.infod_tif_animes.findOne({ where: { nm_anime: req.params.anime } })

        let comentarios = await db.infod_tif_comentario.findAll({ where: { id_anime: anime.id_anime } })
        
        resp.send(comentarios)

    } catch (e) {
        resp.send({error: e.toString()})
    }
})





app.post('/comentarios', async (req, resp) => {
    try {

        
        let comentario = req.body;
        
        let anime = await db.infod_tif_animes.findOne({ where: { nm_anime: comentario.anime.nome } })
        let usuario = await db.infod_tif_usuario.findOne({where: {nm_usuario: comentario.usuario.nome}})
        

        let r = {
            id_usuario: usuario.id_usuario,
            id_anime: anime.id_anime,
            ds_comentario: comentario.comentario,
            dt_comentario: new Date()

        }

        let resultado = await db.infod_tif_comentario.create(r);
        resp.send(resultado);


    } catch (e) {
        resp.send({error: e.toString()})
    }
})




//endpoints / comunidade




app.get('/comunidade', async (req, resp) => {
    try {
        
        let comunidades = await db.infod_tif_comunidade.findAll()

        resp.send(comunidades)

    } catch (e) {
        resp.send({error: e.toString()})
    }
})




app.post('/comunidade', async (req, resp) => {
    try {

        let { capa, nome, id_usu } = req.body;

        let r = await db.infod_tif_comunidade.create(
            {
                ds_capa: capa,
                id_usuario: id_usu,
                nm_comunidade: nome,
                dt_criacao: new Date()
            }
        )

        resp.send(r)

    } catch (e) {
        resp.send({error: e.toString()})
    }

})





//endpoints / chat






app.post('/chat', async (req, resp) => {
    try {
        let { id_comuni, id_usu, mensagem} = req.body;

        let r =  await db.infod_tif_chat.create(
            {
                id_comunidade: id_comuni,
                id_usuario: id_usu,
                ds_mensagem:  mensagem,
                dt_mensagem: new Date()
            }
        )
        resp.send(r)

    } catch (e) {
        resp.send({error: e.toString()})
    }
})





app.listen(process.env.PORT,
    x => console.log(`>> Subiu esse caralho na porta ${process.env.PORT}`))
