import { Router } from "express";
import { AnalyzeRequest, AnalyzeResponse } from "../types";
import buildPrompts from "../services/promptBuilder";
import { callAI } from "../services/aiClient";
import analyzeResponses from "../services/analyzer";

const router = Router();

router.post("/", async (req, res) => {
  const body = req.body as AnalyzeRequest;

  if (!body.category || !body.brands?.length) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const prompts = buildPrompts(body.category);

  const aiResponses: { prompt: string; response: string }[] = [];

  for (const prompt of prompts) {
    const response = await callAI(prompt);
    aiResponses.push({ prompt, response });
  }

  const result: AnalyzeResponse = analyzeResponses(aiResponses, body.brands);

  res.json(result);
});

export default router;
