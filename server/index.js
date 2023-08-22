import express from 'express';
import cors from 'cors';
import Router from './routes/route.js';
import bodyParser from 'body-parser';
import { connection } from './database/db.js';
import DefaultData from './default.js';



const app = express();

connection();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);
DefaultData();

app.listen(8000, () => console.log("App is running"));

