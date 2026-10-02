import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "EventHub API fonctionne !:)",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`EventHub API démarrée sur le port ${PORT}`);
});
