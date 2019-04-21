import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';
var AlunosComponent = /** @class */ (function () {
    function AlunosComponent(alunoService) {
        this.alunoService = alunoService;
        this.aluno = new Aluno();
        this.cpfduplicado = false;
    }
    AlunosComponent.prototype.criarAluno = function (a) {
        if (this.alunoService.criar(a)) {
            this.alunos.push(a);
            this.aluno = new Aluno();
        }
        else {
            this.cpfduplicado = true;
        }
    };
    AlunosComponent.prototype.onMove = function () {
        this.cpfduplicado = false;
    };
    AlunosComponent.prototype.ngOnInit = function () {
        this.alunos = this.alunoService.getAlunos();
    };
    AlunosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './alunos.component.html',
            styleUrls: ['./alunos.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AlunoService])
    ], AlunosComponent);
    return AlunosComponent;
}());
export { AlunosComponent };
//# sourceMappingURL=alunos.component.js.map