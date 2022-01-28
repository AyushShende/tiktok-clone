import express from "express";
import mongoose from "mongoose";
import Videos from "./dbModel.js";

//App config
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

//Db config
const connection_url =
  "mongodb+srv://admin:mLeu9f1dMkCRpvEr@cluster0.vllcc.mongodb.net/tiktok?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
