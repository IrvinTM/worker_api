import express from 'express';
import { G4F } from 'g4f'
import cors from 'cors'

const app = express();
const port = 3000 ?? process.env.PORT;


app.use(express.json());
app.use(cors())
app.use(express.text());

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

    app.post("/image", (req, res) => {
        const imagePrompt = req.body
        const g4f = new G4F();
        try{
      (async () => {
        const base64Image = await g4f.imageGeneration(imagePrompt, {
          debug: true,
          provider: g4f.providers.ProdiaStableDiffusion,
          providerOptions: {
            model: "epicrealism_naturalSinRC1VAE.safetensors [90a4c676]",
            samplingSteps: 20,
            cfgScale: 30,
            height: 1024,
            width: 1024,
          },
        });
        const imageBuffer = Buffer.from(base64Image, "base64");

        res.writeHead(200, {
          "Content-Type": "image/jpeg",
          "Content-Length": imageBuffer.length,
        });

        res.end(imageBuffer);

      })();}
      catch (error){
        console.error(error)
      }
}

);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:3000 port ${port}`);
    });