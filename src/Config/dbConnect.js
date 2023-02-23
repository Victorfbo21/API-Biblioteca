import mongoose from "mongoose";

mongoose.connect("mongodb+srv://victorfbo486:123@luubot.md5lw74.mongodb.net/?retryWrites=true&w=majority");
let db = mongoose.connection;

export default {
    db,
    


} ;