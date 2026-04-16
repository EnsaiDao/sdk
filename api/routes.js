import express from "express";
import { analyze } from "../modules/analyzer.js";

const router = express.Router();

router.post("/analyze", (req, res) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: "Input is required" });
  }

  const result = analyze(input);

  res.json({
    status: "success",
    data: result,
  });
});

export default router;
