import express from 'express';

import { readFileSync } from 'fs';

import { cwd } from 'process';

import cors from 'cors';

const dir = cwd();

const PORT = 8080;

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

const data = JSON.parse(readFileSync(`${dir}/data.json`).toString());

app.get('/', (req, res) => {

    return res.status(200).json(data);

});

app.post('/', (req, res) => {

    console.log('Stuff works', req.body);

    return res.status(200).json({});

});

app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
})
