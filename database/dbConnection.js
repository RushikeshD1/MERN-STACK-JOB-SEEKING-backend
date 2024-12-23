import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL , {
        dbName : "MERN_STACK_JOB_SEEKING_WEBAPP"
    }).then(() => {
        console.log("Successfully connected to database")
    }).catch((e) => {
        console.log(`Error while connecting to database ${e}`)
    })
}

