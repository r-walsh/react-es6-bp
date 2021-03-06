import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

app.listen( port, () => console.log(`Listening on ${ port }`));