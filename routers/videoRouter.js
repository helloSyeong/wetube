import express from "express";
import routes from "../routes";
import { getUpload, postUpload, videoDetail, deleteVideo, getEditVideo, postEditVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// videoRouter.get(routes.videos, videos);
// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.get(routes.editVideo(), postEditVideo);

// Delete
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;