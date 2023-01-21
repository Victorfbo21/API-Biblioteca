import express from 'express'
import App from "./src/App.js"


const port =8080;


  App.listen(port , (req , res) =>{

    console.log(`Ouvindo em http://localhost:${port}`)
  })
  