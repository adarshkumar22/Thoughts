import express, { Router } from "express";
import { getThoughts, postThought, updateThought, deleteThought, likeThought } from "../controllers/thoughts.js";
const router = express.Router();

router.get('/', getThoughts);
router.post('/', postThought);
router.patch('/:id', updateThought);
router.delete('/:id', deleteThought);
router.patch('/:id/likeThought', likeThought);

export default router;