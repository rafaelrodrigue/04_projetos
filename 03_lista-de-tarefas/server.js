const express = require('express');
const mongoose = require('mongoose');

const AlunoSchema = require('./schemas/AlunoSchema');

const server = express();

server.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@cluster0.zjzuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

server.post('/aluno', async (req, res) => {

  /*const name = req.body.name;
  const matricula = req.body.matricula;
  const disciplina = req.body.disciplina;*/

  const {name, matricula, disciplina} = req.body;

  const aluno = await AlunoSchema.create({nome: name, matricula: matricula, disciplina: disciplina});

  res.status(201).json(aluno);

})

server.get('/aluno', async (request, response) =>{

    const alunos = await AlunoSchema.find();

  return response.status(200).json(alunos);
});

server.listen(3003, () => console.log('Servidor iniciado na porta http://localhost:3003',))  