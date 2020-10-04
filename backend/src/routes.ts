import  express from 'express';
const ProductController = require('./controllers/product');



const routes = express.Router()

routes.get('/', (req: express.Request, res: express.Response) => {
    return res.json({ message: "Hello World"});

});


routes.post('/product/post', ProductController.store);



export default routes;