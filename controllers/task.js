import Task from "../models/task.js";

export const newTask = async(req, res) => {
    try{
        const {title,description,user} = req.body;
        await Task.create({title, description, user: req.user});
        res.status(201).json({message: "Task Created"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
    
}

export const getAllTask = async(req,res) =>{
    try{
        const tasks = await Task.find({user: req.user._id})
        res.json(tasks);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

export const deleteTask = async(req,res) =>{
    try{
        const task = await Task.findById(req.params.id);
        await task.deleteOne();
        res.json({message: "Task Deleted"});
    }catch(err){
        res.status(500).json({message: "Task not found"});
    }
}

export const updateTask = async(req,res) =>{
    try{
        const {id} = req.params;
        const task = await Task.findById(id);
        task.isCompleted = !task.isCompleted;
        await task.save();
        res.json({message: "Task Updated"});
    }catch(err){
        res.status(500).json({message: "Task not found"});
    }
}