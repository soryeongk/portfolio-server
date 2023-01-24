import { Router } from "express";

import ActivityRouter from "./ActivityRouter";
import CommentRouter from "./CommentRouter";

const router = Router();

router.use("/comment", CommentRouter);
router.use("/activity", ActivityRouter);

export default router;
