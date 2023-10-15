import express from 'express';
import cors from 'cors';
import Router from './routes/route.js';
import bodyParser from 'body-parser';
import { connection } from './database/db.js';
import DefaultData from './default.js';
import path from 'path';

const __dirname = path.resolve();
const app = express();

connection();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function (err) {

        res.status(500).send(err);

    })
})

const PORT = process.env.PORT || 8000;
DefaultData();

app.listen(PORT, () => console.log("App is running"));

