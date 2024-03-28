
export const errorMiddleware = (err,req,res,next)=>{
    err.message = err.message || "Internal Server Error";
    return res.status(err.status || 500).json({message: err.message});
}