import ThoughtsMsg from "../models/thoughtsMsg.js";
import mongoose from 'mongoose';

export const getThoughts = async (req, res) => {
    try{
        const thoughtsMsgs = await ThoughtsMsg.find();
        res.status(200).json(thoughtsMsgs);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

export const postThought = async(req, res) => {
    const { title, message, creator, tags } = req.body;
    const newThought = new ThoughtsMsg({ title, message, creator, tags });
    try{
        await newThought.save();
        res.status(201).json(newThought);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}

export const updateThought = async(req, res) => {
    const { id } = req.params;
    const { title, message, creator, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedThought = { creator, title, message, tags, _id: id };

    await ThoughtsMsg.findByIdAndUpdate(id, updatedThought, { new: true });

    res.json(updatedThought);
}

export const deleteThought = async(req, res) => { 
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await ThoughtsMsg.findByIdAndRemove(id);

    res.json({ message: 'Thought deleted successfully' })
}

export const likeThought = async(req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const thought = await ThoughtsMsg.findById(id);
    const updatedThought = await ThoughtsMsg.findByIdAndUpdate(id, {likeCount: thought.likeCount+1}, {new: true});
    res.json(updatedThought);
}