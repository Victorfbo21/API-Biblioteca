import autores from "../Model/Autor.js";

class AutorController {

    static listarAutor = (req,res) =>{
        autores.find((err, autores) => {
            res.status(200).json(autores)
          })
    }

    static listarAutorid = (req,res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({message : `${err.message} - Id do Autor não encontrado`})
            }
            else{
                res.status(200).send(autores);
            }
        });

    }

    static cadastrarAutor = (req,res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao Cadastrar Autor`})
            }
            else{
                res.status(201).send(autor.toJSON())
            }

        });
    }

    static atualizarAutor = (req,res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set : req.body}, (err)=>{
            if(!err){
                res.status(200).send({message : 'O autor foi atualizado com sucesso'})
            }
            else{
                res.status(500).send({message : err.message })
            }
        });

    }

    static removerAutor = (req,res) => {
        const id = req.params.id;
        autores.findByIdAndRemove(id , (err)=> {
            if(!err){
                res.status(200).send({message : 'Autor Excluido com sucesso'})
            }
            else{
                res.status(500).send({message : err.message})
            }
        })
    }


}


export default AutorController;