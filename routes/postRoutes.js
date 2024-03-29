const express = require("express");
const PostRoutes = new express.Router();
const auth = require("../middleware/auth");

const {
  addPost,
  addComment,
  getPostByID,
  removeComment,
  removePost,
  getPostsFromMentors,
  getPostsFromMentees
} = require("../controller/PostController");

PostRoutes.post("/posts/addPost", auth, addPost);
PostRoutes.get("/posts/getPostsFromMentors", auth, getPostsFromMentors);
PostRoutes.get("/posts/getPostsFromMentees", auth, getPostsFromMentees);
PostRoutes.post("/posts/removePost/:postId", auth, removePost);
PostRoutes.post("/posts/addComment/:postId", auth, addComment);
PostRoutes.post("/posts/removeComment/:postId/:commentId", auth, removeComment);
PostRoutes.get("/posts/:postId", auth, getPostByID);

module.exports = PostRoutes;
