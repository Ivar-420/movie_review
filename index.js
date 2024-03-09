import app from "./server.js";
import {MongoClient} from "mongodb";
import connectDB from "./connectdb.js";
import ReviewsDAO from "./reviews.DAO.js";

const port = 9000;

const url = "mongodb+srv://kushalpatel0265:Kushal2018@cluster0.b0nwiel.mongodb.net/"
MongoClient.connect(url)
    .then(client => {
        const result =  ReviewsDAO.injectDB(client);
        if(result){
            console.log("true");
        }else{
            console.log("false");
        }
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })

    })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    });