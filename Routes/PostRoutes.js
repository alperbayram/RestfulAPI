const PostController = require("../Controller/PostController");

const express = require("express");

const router = express.Router();

router.route("/").post(PostController.createPost);
router.route("/").get(PostController.getallPost);
router.route("/:id").get(PostController.getPost);
router.route("/:id").patch(PostController.updatePost);
router.route("/:id").delete(PostController.deletePost);

module.exports = router;
