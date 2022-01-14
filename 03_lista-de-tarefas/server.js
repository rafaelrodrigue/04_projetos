const express = require('express');
const mongoose = require('mongoose');

const AlunoSchema = require('.schemas/AlunoSchemas');

const server = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.zjzuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

server.post('/aluno', async (req, res) => {

  const aluno = await AlunoSchema.create();

})

/*server.get('/aluno', (request, response) => {

  return response.json({message:'Hello World!'})

});*/

server.listen(3003, () => console.log('Servidor iniciado na porta http://localhost:3003',))  