import express from 'express';
import {newTask, getAllTask, deleteTask, updateTask} from '../controllers/task.js';
import {isAuthenticated} from '../middlewares/auth.js';


const router = express.Router();

router.post('/new', isAuthenticated, newTask);
router.get('/all',isAuthenticated, getAllTask)
router.route('/:id').delete(isAuthenticated, deleteTask).put(isAuthenticated,updateTask);


export default router;