import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());



app.post('/login', async (req, resp) => {
    const email = req.body.email
    const senha = req.body.senha 

    let u = await db.infod_tif_usuario.findOne({
        where: {
            ds_email: email,
            ds_senha: senha
        }
     });

    if (u == null) {
        return resp.send({ erro: 'credenciais invalidas'})
    }

    resp.send(u)
})

app.listen(process.env.PORT,
x => console.log(`Server up at port ${process.env.PORT}`))
