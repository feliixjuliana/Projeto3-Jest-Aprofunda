import express from 'express';
import { createPost, listPosts, updatePost, deletePost} from '../controllers/biblioteca-controller';

var router = express.Router();

router.post('/books', createPost);
router.get('/books', listPosts);
router.patch('/book/:id', updatePost);
router.delete('/book/:id', deletePost);

export default router; 