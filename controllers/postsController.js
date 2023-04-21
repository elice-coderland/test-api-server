const { Post } = require('../models');
const asyncHandler = require('../utils/asyncHandler');

exports.getAllPosts = asyncHandler(async (req, res) => {
  const allPosts = await Post.find({});
  if (allPosts.length < 1) throw new Error('There is no post');

  res.send(allPosts);
});

exports.getPostById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOne({ _id: id });
  if (!post) throw new Error('There is no such post with the id.');

  res.send(post);
});

exports.createNewPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content || title.trim() === '' || content.trim() === '') {
    res.status(400).send('Title and content are required.');
    return;
  }
  console.log(title, content);
  const newPost = await Post.create({ title, content });
  
  res.status(204).send();
});

exports.updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndUpdate({ _id: id });

  res.status(204).send('A Post Updated');
});

exports.deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id)
  await Post.findByIdAndDelete({ _id: id });

  res.status(204).send('A Post Deleted');
});