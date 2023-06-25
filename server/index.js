import express  from "express";
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./mongodb/connect.js";

import postRoutes from './routes/postRoutes.js'
import AIImaginatorRoutes from './routes/AIImaginatorRoutes.js'


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit : '20mb'}));


app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', AIImaginatorRoutes);


app.get('/', async (req, res) => { 
    res.send("Hello From AI Imaginator");
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => {console.log("server has satrted")})
    } catch (error) {
        console.log(error)
    }
    
}

startServer();