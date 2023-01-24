import { Request, Response } from "express";

import { ActivityCreateDto } from "../interfaces/activity/ActivityCreateDto";
import { ActivityResponseDto } from "../interfaces/activity/ActivityResponseDto";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import responseMessage from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import ActivityService from "../services/ActivityService";

/**
 * @route POST /activity
 * @desc Create Activity
 * @access Public
 */
const createActivity = async (req: Request, res: Response) => {
  const activityCreateDto: ActivityCreateDto = req.body;

  try {
    const data: PostBaseResponseDto = await ActivityService.createActivity(activityCreateDto);

    res
      .status(statusCode.CREATED)
      .send(util.success(statusCode.CREATED, responseMessage.CREATE_COMMENT_SUCCESS, { activity: data }));
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  }
};

/**
 * @route READ /activity
 * @desc Read Activities sort by date
 * @access Public
 */
const getActivities = async (_req: Request, res: Response) => {
  try {
    const data: ActivityResponseDto[] = await ActivityService.getActivities();

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, responseMessage.READ_COMMENTS_SUCCESS, { activities: data }));
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  }
};

/**
 * @route DELETE /activity/:activityId
 * @desc Delete Activity
 * @access Public
 */
const deleteActivity = async (req: Request, res: Response) => {
  const { activityId } = req.params;

  try {
    await ActivityService.deleteActivity(activityId);

    res.status(statusCode.NO_CONTENT).send();
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  }
};

export default {
  createActivity,
  getActivities,
  deleteActivity,
};
