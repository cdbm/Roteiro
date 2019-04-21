import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
var AlunoService = /** @class */ (function () {
    function AlunoService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.taURL = 'http://localhost:3000';
    }
    AlunoService.prototype.criar = function (aluno) {
        return this.http.post(this.taURL + "/aluno", JSON.stringify(aluno), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            if (res.json().success) {
                return aluno;
            }
            else {
                return null;
            }
        })
            .catch(this.tratarErro);
    };
    AlunoService.prototype.atualizar = function (aluno) {
        return this.http.put(this.taURL + "/aluno", JSON.stringify(aluno), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            if (res.json().success) {
                return aluno;
            }
            else {
                return null;
            }
        })
            .catch(this.tratarErro);
    };
    AlunoService.prototype.getAlunos = function () {
        return this.http.get(this.taURL + "/alunos")
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.tratarErro);
    };
    AlunoService.prototype.tratarErro = function (erro) {
        console.error('Acesso mal sucedido ao serviço de alunos', erro);
        return Promise.reject(erro.message || erro);
    };
    AlunoService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], AlunoService);
    return AlunoService;
}());
export { AlunoService };
//# sourceMappingURL=aluno.service.js.map