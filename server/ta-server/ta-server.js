"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var cadastrodealunos_1 = require("./cadastrodealunos");
var app = express();
exports.app = app;
var alunos = new cadastrodealunos_1.CadastroDeAlunos();
app.use(bodyParser.json());
app.get('/alunos', function (req, res) {
    var aluno = JSON.stringify(alunos.getAlunos());
    res.send(aluno);
});
app.post('/aluno', function (req, res) {
    var aluno = req.body; //verificar se é mesmo Aluno!
    aluno = alunos.criar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi cadastrado com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser cadastrado" });
    }
});
app.put('/aluno', function (req, res) {
    var aluno = req.body;
    aluno = alunos.atualizar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi atualizado com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser atualizado" });
    }
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
