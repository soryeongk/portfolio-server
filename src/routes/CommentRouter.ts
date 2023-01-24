import { Router } from "express";

import { CommentController } from "../controllers";

const router: Router = Router();

router.post("/", CommentController.createComment);
router.get("/", CommentController.getComments);
router.delete("/:commentId", CommentController.deleteComment);

export default router;
