import 'dotenv/config';
import mongoose from "mongoose";

const env = process.env.NODE_ENV || "development";
const DB_URL =
    env === "container" ? process.env.DB_URL_TEST :
        env === "production" ? process.env.DB_URL_PROD :
            env === "development" ? process.env.DB_URL_DEV :
                process.env.DB_URL_DEV;

const db = mongoose.connect("mongodb+srv://sandberg-g:jLx6i4RujUt84k4@cluster0.mjmat.mongodb.net/mern-auth?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((connection) => {
        console.log("Connected to MongoDB Successful");
    })
    .catch(err => {
        console.log("Database url: " + DB_URL);
        console.log(err);
    })

export default db;