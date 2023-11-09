import express from "express";
import { config } from "dotenv";

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    const nome = req.query.nome;
    const qualquerNome = req.query.anime;
    const page = req.query.page;
    const limit = req.query.limit;
    res.status(200).json({ message: `Hello, ${nome}!`, anime: qualquerNome, page: page, limit: limit });
})

app.get("/:nome/:sobrenome/:idade/:status", (req, res) => {
    const nome = req.params.nome;
    const sobrenome = req.params.sobrenome;
    const idade = req.params.idade;
    const status = req.params.status;
    res.status(200)
        .json({ message: `Ola eu sou ${nome}, meu sobrenome é ${sobrenome}, tenho ${idade} anos e estou ${status}.` });
})

app.post("/", (req, res) => {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const idade = req.body.idade;
    res.status(200)
        .json({
            nome: nome,
            sobrenome: sobrenome,
            idade: idade
        })
})

app.delete("/", (req, res) => {
    res.status(200).json({ message: "Hello DELETE!" })
})

app.put("/", (req, res) => {
    res.status(200).json({ message: "Hello PUT!" })
})

app.listen(port, () => {
    console.log('sever started on http://localhost:${port}')
})