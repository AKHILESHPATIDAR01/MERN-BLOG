import express from "express";
import {
  createComment,
  deleteComment,
  editComment,
  getPostsComments,
  likeComment,
} from "../controllers/comment.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostsComments);
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComment);
router.delete("/deleteComment/:commentId", verifyToken, deleteComment);

export default router;
