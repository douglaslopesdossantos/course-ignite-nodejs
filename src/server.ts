import express from 'express';
import { router } from './routes'


const app = express();
const port = process.env.PORT || 3333

app.use(express.json());
app.use(router)


app.listen(port, () => console.log(`server is running! ${port}`))