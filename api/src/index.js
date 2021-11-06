import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());



app.post('/login', async (req, resp) => {
    try {
        
        let { email, senha } = req.body;

        let r = await db.infod_tif_usuario.create({
            ds_email: email,
            ds_senha: senha
        })

        resp.send(r)

    } catch (e) {
        resp.send({ error: e.toString() })
    }
})




app.post('/catalogo', async (req, resp) => {
    try {
        let { anime, classificacao, temporadas, genero, estrelando, sinopse, sobre,enredo, capa, postagem, ano, video1, video2 } = req.body;

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




app.listen(process.env.PORT,
    x => console.log(`>> Subiu esse caralho na porta ${process.env.PORT}`))
