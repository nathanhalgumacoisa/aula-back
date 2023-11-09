import express from "express";
import { config } from "dotenv";

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {

    res.status(200).json({message: "Hello World!"});
})

app.listen(port, () => {
    console.log('sever started on http://localhost:${port}')
})