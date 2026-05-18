import { Router, type IRouter } from "express";
import healthRouter from "./health";
import teaserRouter from "./teaser";

const router: IRouter = Router();

router.use(healthRouter);
router.use(teaserRouter);

export default router;
