import mongoose from "mongoose";


mongoose.connect(MONGO_URL);
let db = mongoose.connection;

export default {
    db,
    


} ;