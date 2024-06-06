import { routes } from './routes/routes.js';
import  express from "express"
import cors from 'cors'

const app = express();
const port = 3000 ?? process.env.PORT;


app.use(express.json());
app.use(cors())
app.use(express.text());
app.disable('x-powered-by')

app.options('*', cors()) 
app.use('/', routes )

app.listen(port, () => {
    console.log(`Server is running on http://localhost:3000 port ${port}`);
    });
