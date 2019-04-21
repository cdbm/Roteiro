import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var AlunoService = /** @class */ (function () {
    function AlunoService() {
        this.alunos = [];
    }
    AlunoService.prototype.criar = function (aluno) {
        aluno = aluno.clone();
        var result = null;
        if (this.cpfNaoCadastrado(aluno.cpf)) {
            this.alunos.push(aluno);
            result = aluno;
        }
        return result;
    };
    AlunoService.prototype.cpfNaoCadastrado = function (cpf) {
        return !this.alunos.find(function (a) { return a.cpf == cpf; });
    };
    AlunoService.prototype.atualizar = function (aluno) {
        aluno = aluno.clone();
        for (var _i = 0, _a = this.alunos; _i < _a.length; _i++) {
            var a = _a[_i];
            if (a.cpf == aluno.cpf) {
                a.metas = aluno.metas;
            }
        }
    };
    AlunoService.prototype.getAlunos = function () {
        var result = [];
        for (var _i = 0, _a = this.alunos; _i < _a.length; _i++) {
            var a = _a[_i];
            result.push(a.clone());
        }
        return result;
    };
    AlunoService = tslib_1.__decorate([
        Injectable()
    ], AlunoService);
    return AlunoService;
}());
export { AlunoService };
//# sourceMappingURL=aluno.service.js.map