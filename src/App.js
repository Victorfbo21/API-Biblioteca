import express from 'express';
import mongoose from "mongoose";
import routes from './routes/index.js';


const App = express();

App.use(express.json());
mongoose.set('strictQuery', false);



routes(App);

export default App ;

