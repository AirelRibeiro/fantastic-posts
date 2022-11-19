const PostService = require('../services/Post.service');

const PostController = {
  insert: async (req, res) => {
    const post = await PostService.insert(req.body);
    return res.status(201).json(post);
  },

  findAll: async (_req, res) => {
    const posts = await PostService.findAll();
    return res.status(200).json(posts);
  },

};

module.exports = PostController;