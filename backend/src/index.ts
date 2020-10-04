import  express from 'express';
import  routes from './routes';
import bodyParser from 'body-parser';



const app: express.Application = express();

const server = require('http').Server(app);

app.use(bodyParser.json());
app.use(routes);


server.listen(3333);