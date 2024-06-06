
import { G4F } from 'g4f';

export class model {

  static async chat(messages) {
    console.log(messages);
    const g4f = new G4F();

    try {
      const results = await g4f.chatCompletion(messages);
      const result = JSON.stringify(results);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  static async getEpicRealism(imagePrompt) {
    const g4f = new G4F();
    try {
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

      if (base64Image) {
        const image = Buffer.from(base64Image, "base64");
        console.log("se va retornar la imagen de el modelo con exito");
        return image;
      }
    } catch (error) {
      console.error(error);
    }
  }
  static async getAbsoluteReality(imagePrompt) {
    const g4f = new G4F();
    try {
      const base64Image = await g4f.imageGeneration(imagePrompt, {
        debug: true,
        provider: g4f.providers.ProdiaStableDiffusion,
        providerOptions: {
          model: "absolutereality_v181.safetensors [3d9d4d2b]",
          samplingSteps: 20,
          cfgScale: 30,
          height: 1024,
          width: 1024,
        },
      });

      if (base64Image) {
        const image = Buffer.from(base64Image, "base64");
        console.log("se va retornar la imagen de el modelo con exito");
        return image;
      }
    } catch (error) {
      console.error(error);
  }
  }
}
