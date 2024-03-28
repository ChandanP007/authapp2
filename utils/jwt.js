import jwt from "jsonwebtoken"

export const generateToken = (newUser,res,message,status) => {
const token = jwt.sign({_id: newUser.id},process.env.JWT_SECRET)
res.status(status).cookie("token",token,
{
    httpOnly: true,
    maxAge: 15*60*1000,
    sameSite: "none",
    // secure: process.env.NODE_ENV === "DEVELOPMENT" ? "false" : "true",
    secure: "false"
}).json({message: message})}

