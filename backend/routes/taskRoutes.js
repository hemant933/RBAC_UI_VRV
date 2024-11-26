const express = require("express");
const router = express.Router();
const { getTasks, createTask, getTaskById, updateTask, DeleteTask } = require("../controllers/tasksControllers");
const { protect } = require("../middlewares/authMiddleware");
router.route('/').get(protect, getTasks);
router.route('/create').post(protect,createTask);
    router.route('/:id').get(getTaskById).put(protect, updateTask).delete(protect, DeleteTask);



module.exports = router;