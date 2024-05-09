const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Apply auth middleware to protect all routes
router.use(authMiddleware);

router.post('/', postController.createPost);
router.get('/', postController.getPosts);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.get('/', postController.getPost);
module.exports = router;
