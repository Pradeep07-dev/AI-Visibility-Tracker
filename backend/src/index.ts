import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import analyzeRoute from "./routes/analyze";

const app = express();

app.use(express.json());
const port = Number(process.env.PORT) || 3000;

const allowedOrigins = process.env.FRONTEND_URL;

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use("/api/analyze", analyzeRoute);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error.stack);

  res
    .status(500)
    .json({ error: "Something went wrong. Please try again later." });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
