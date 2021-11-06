import db from './db.js';
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());




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





app.listen(process.env.PORT,
    x => console.log(`>> Subiu esse caralho na porta ${process.env.PORT}`))
