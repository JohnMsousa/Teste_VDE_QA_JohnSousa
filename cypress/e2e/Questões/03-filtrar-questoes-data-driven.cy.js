import LoginPage from "../../pages/LoginPage";
import QuestoesPage from "../../pages/QuestoesPage";

describe("Filtrar questões - Teste Data-Driven", () => {
    const disciplinas = [
        { nome: "Administrativo", esperado: "Administrativo" },
        { nome: "Constitucional", esperado: "Constitucional" },
        { nome: "Tributário", esperado: "Tributário" }
    ];

    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login();
        QuestoesPage.navegarParaQuestoes();
    });

    disciplinas.forEach((disciplina) => {
        it(`deve filtrar questões por disciplina: ${disciplina.nome}`, () => {
            QuestoesPage.filtrarPorDisciplina(disciplina.nome);
            QuestoesPage.verificarResultadosFiltro(disciplina.esperado);

            cy.contains("p", disciplina.esperado)
                .should("be.visible")
                .and("contain", disciplina.esperado);

            cy.contains("p", "Foram encontradas")
                .should("be.visible")
                .and("exist");

            QuestoesPage.limparFiltros();
        });
    });
});

