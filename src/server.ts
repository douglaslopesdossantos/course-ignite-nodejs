import express from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import './database'
import './shared/container'
import { router } from './routes'

const app = express();
const port = process.env.PORT || 3333

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)

app.listen(port, () => console.log(`server is running! ${port}`))