import express from "express";
import cors from 'cors';

const app = express();

app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("Hello from our API")
})

app.listen(port, () => {
    console.log (`Listening on port ${port}`)
})