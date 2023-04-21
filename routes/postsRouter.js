const { Router } = require('express');
const { 
  getAllPosts, 
  getPostById, 
  createNewPost, 
  updatePost, 
  deletePost 
} = require('../controllers/postsController');

const router = Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createNewPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;