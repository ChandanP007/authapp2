import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt.js';


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const loginUser = async (req, res) => {
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email: email});
        if(!user){
            res.send("User not found").status(404);
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.send("Invalid credentials").status(400);
        }else{
            generateToken(user,res,"User logged in successfully",200); 
            // res.send("User logged in successfully").status(200);
        }
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const logoutUser = async (req, res) => {
    try{
        res.clearCookie("token");
        res.status(200).json({message: "User logged out successfully"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const registerUser = async (req, res) => {
    try{
        const {name,email,password} = req.body;
        let user = await User.findOne({email: email})
        if(user){
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({name,email,password: hashedPass});
        await newUser.save()

        generateToken(newUser,res,"User created successfully",201);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getMyProfile = async (req, res) => {
    try{
        res.status(200).json({user: req.user.name});
    }catch(err){
        res.status(500).json({message: err.message});
    }   
}

