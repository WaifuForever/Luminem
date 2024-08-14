import Koa from "koa";
import 'dotenv/config'
import router from "./routes/products.route";

const app = new Koa();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

app.use(router.routes())  .use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port http://localhost:${PORT}/`);
});