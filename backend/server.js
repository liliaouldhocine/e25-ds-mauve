import express from "express";
import cors from "cors";
import morgan from "morgan";

import fs from "fs";

const app = express();

const accueilPage = fs.readFileSync("views/index.html", "utf-8");

app.use(cors());
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(accueilPage);
});

app.get("/salut", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("Salut !");
});

app.post("/connexion", (res, req) => {
  res.json(req.body);
});

app.listen(4737, () => {
  console.log("Serveur démarré sur http://localhost:4747");
});
