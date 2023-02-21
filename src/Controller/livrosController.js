import livros from "../Model/Livro.js";

class LivroController {

    static listarLivros = (req,res) =>{
        livros.find()
          .populate('autor')
          .exec((err, livros) => {
            res.status(200).json(livros)
          })
    }

    static listarLivroId = (req,res) => {
        const id = req.params.id;
        livros.findById(id)
            .populate('autor','nome')
            .exec((err, livros) => {
                if(err){
                    res.status(400).send({message : `${err.message} - Id do livro não encontrado`})
                }
                else{
                    res.status(200).send(livros);
                }
            });

    }

    static cadastrarLivro = (req,res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao Cadastrar Livro`})
            }
            else{
                res.status(201).send(livro.toJSON())
            }

        });
    }

    static atualizarLivro = (req,res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set : req.body}, (err)=>{
            if(!err){
                res.status(200).send({message : 'O livro foi atualizado com sucesso'})
            }
            else{
                res.status(500).send({message : err.message })
            }
        });

    }

    static removerLivro = (req,res) => {
        const id = req.params.id;
        livros.findByIdAndRemove(id , (err)=> {
            if(!err){
                res.status(200).send({message : 'Livro Excluido com sucesso'})
            }
            else{
                res.status(500).send({message : err.message})
            }
        })
    }

    static listarLivroPorEditora = (req,res) =>{
        const editora = req.query.editora;

        livros.find({'editora': editora}, {}, (err,livros) =>{
           if(!err){
                res.status(200).send(livros);
           }
           else{
            res.status(400).send({message: err.message})
           }
        });

        

    }


}


export default LivroController;

