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




app.listen(process.env.PORT,
    x => console.log(`>> Server up at port ${process.env.PORT}`))
