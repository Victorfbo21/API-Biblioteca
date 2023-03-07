import App from "./src/App.js"
import { config } from 'dotenv'

config({
  path: '.env'
})

const port = 8080;

  App.listen(port , (req , res) =>{

    console.log(`Ouvindo em http://localhost:${port}`)
  
  })
  