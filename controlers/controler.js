
import { model } from "../models/model.js";

export class controler {
  static async chat(req, res) {
    const messages = req.body.messages;
    const results = await model.chat(messages);
    if (results) {
      res.send(JSON.stringify(results));
      console.log(results);
    } else {
      res.send("there was an error");
    }
  }

  static async getRealistic(req, res) {
    const imagePrompt = req.body;
    try {
      const image = await model.getEpicRealism(imagePrompt);

      if (image) {
        res.writeHead(200, {
          "Content-Type": "image/jpeg",
          "Content-Length": image.length,
        });
        res.end(image);
      } else {
        res.status(500).send("Failed to generate image");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}
