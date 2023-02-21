import express from 'express';
import autores from './autorRoutes.js';
import livros from './livrosRoutes.js'

const routes = (App) => {
    App.route('/').get((req,res)=>{
        res.status(200).send({titulo : 'Server Online'})
    })

    App.use(
        express.json(),
        livros,
        autores
    )
}

export default routes;