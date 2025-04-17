import express, { urlencoded } from 'express';
import jobRoute from './routes/jobRoutes.js';
import connectDb from './db.js';
import cors from 'cors';

const app = express();

connectDb();
app.use(cors({
    origin:"http://localhost:3000", // Allow frontend URL
    credentials: true,  // Allow cookies & authentication
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api',jobRoute);

const PORT = process.env.PORT || 8080;
app.listen( PORT ,() => {
    console.log(`server runnig on ${process.env.DEV_MODE} mode on ${PORT}`)
})
