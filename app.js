import express from 'express'
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {config} from 'dotenv';
import { errorMiddleware } from './middlewares/error.js';

//app config 
const app = express();
config({path: './config.env'});

//middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: [process.env.CLIENT_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}))

//routes
app.use("/users/api/v1",userRouter);
app.use("/tasks/api/v1",taskRouter);


export default app;
