import { Router } from "express";

import ActivityController from "../controllers/ActivityController";

const router: Router = Router();

router.get("/", ActivityController.getActivities);
router.post("/", ActivityController.createActivity);
router.delete("/:activityId", ActivityController.deleteActivity);

export default router;
