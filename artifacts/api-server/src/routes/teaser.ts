import { Router, type IRouter } from "express";
import path from "node:path";
import fs from "node:fs";

const router: IRouter = Router();

const HTML_PATH = "/home/runner/workspace/attached_assets/ACUD_Teaser_v1_1779096197073.html";

router.get("/teaser", (_req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  fs.createReadStream(HTML_PATH).pipe(res);
});

router.get("/teaser/download", (_req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="ACUD_Teaser_v1.html"',
  );
  fs.createReadStream(HTML_PATH).pipe(res);
});

export default router;
