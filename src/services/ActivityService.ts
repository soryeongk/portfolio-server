import { ActivityCreateDto } from "../interfaces/activity/ActivityCreateDto";
import { ActivityResponseDto } from "../interfaces/activity/ActivityResponseDto";
import Activity from "../models/Activity";

const createActivity = async (commentCreateDto: ActivityCreateDto) => {
  try {
    const activity = new Activity({
      ...commentCreateDto,
    });

    await activity.save();

    const data = {
      _id: activity._id,
    };

    return data;
  } catch (error) {
    console.log("📌 soryeongk error", error);
    throw error;
  }
};

const getActivities = async () => {
  try {
    const activities: ActivityResponseDto[] = await Activity.find();
    const today = new Date();

    return activities.sort((a, b) =>
      a.date.to < b.date.to ? 1 : (a.date.from || today) < (b.date.from || today) ? 1 : -1,
    );
  } catch (error) {
    console.log("📌 soryeongk error", error);
    throw error;
  }
};

const deleteActivity = async (activityId: string) => {
  try {
    await Activity.findByIdAndDelete(activityId);
  } catch (error) {
    console.log("📌 soryeongk error", error);
    throw error;
  }
};

export default { createActivity, getActivities, deleteActivity };
