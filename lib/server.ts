import express, { Request, Response, NextFunction } from "express";
require("dotenv").config();

const PORT = process.env.PORT as string | number;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.json({ TeamName: "Betaoverflow" });
});

app.listen(PORT, () => {
  console.log("Server running at: " + PORT);
});
