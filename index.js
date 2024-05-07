import express from 'express';
import { G4F } from 'g4f'
import cors from 'cors'

const app = express();
const port = 3000 ?? process.env.PORT;


app.use(express.json());
app.use(cors())

app.options('*', cors()) 
app.post('/', async (req, res) => {
    console.log(req.body)
    const g4f = new G4F();
        
        const messages = req.body.messages
    try{
        const results = await g4f.chatCompletion(messages);
        res.send(JSON.stringify(results));
    }
    catch (error){
        console.error(error)
    }
    });

    app.get('/', (req, res) => {
        res.send('Hello World');
    }
    );

app.listen(port, () => {
    console.log(`Server is running on http://localhost:3000 port ${port}`);
    });