
import express from 'express'

const App = express();

App.use(express.json())

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
  ]

const autores = [
    { id: 1 , "Autor" : "Fulano"} ,
    { id: 2 , "Autor" : "Sicrano"}
]

  App.get('/', (req, res) => {

    res.status(200).send('Server Online')
  })

  App.get('/livros', (req, res) => {

    res.status(200).json(livros)
  })
  
  App.get('/autores ' , (req,res) => {
    res.status(200).json(autores)
  })

  App.post('/livros', (req,res) =>{
    livros.push(req.body);

    res.status(201).send('O Livro Foi Cadastrado com Sucesso  !!')
  })

  App.get('/livros/:id', (req,res) => {

    let index = BuscaLivro(req.params.id);
    
    res.json(livros[index]);
})

  const BuscaLivro = (id) => {

    return livros.findIndex( livro => livro.id == id )
    
  }

  
  App.put('/livros/:id', (req,res) => {

    let index = BuscaLivro(req.params.id);
    
    livros[index].titulo = req.body.titulo
  
    res.status(200).json(livros).send('O Livro foi Alterado com sucesso')
})
  
    App.delete('/livros/:id', (req,res) => {

        let {id} = req.params;
        let index = BuscaLivro(id);
        livros.splice(index )
        res.json(livros);

        res.send(` Livro ${id} removido com sucesso `)
    
      })

  export default App ;

