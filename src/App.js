import express from 'express';
import mongoose from "mongoose";
import db from "./Config/dbConnect.js";
import routes from './routes/index.js';

db.on("err", console.log.bind(console,'Error de conexão'));
db.once('open', ()=>{
  console.log('conexão com o banco feita com sucesso')
});

const App = express();

App.use(express.json());
mongoose.set('strictQuery', true);

routes(App);

export default App ;

