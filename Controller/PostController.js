const express = require("express");

const Posts = require("../models/Posts");

exports.createPost = async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    const post = await newPost.save();
    if (!post) throw Error("Something went wrong with the post");
    res.status(200).json(post);
  } catch {
    res.status(400).json({ msg: error });
  }
};

exports.getallPost = async (req, res) => {
  try {
    const posts = await Posts.find();
    if (!posts) throw Error("No Items");
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) throw Error("No Items");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ mesg: err });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    if (!post) throw Error("Something went wrong while updating the post");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ mesg: err });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if (!post) throw Error("No post found!");
    res.status(200).json({ success: true });
  } catch (error) {}
};
