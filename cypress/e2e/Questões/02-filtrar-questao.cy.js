import LoginPage from "../../pages/LoginPage";
import QuestoesPage from "../../pages/QuestoesPage";

describe("Filtros de Questões", () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login();
        QuestoesPage.navegarParaQuestoes();
    });

    it("deve filtrar questões por disciplina", () => {
        QuestoesPage.filtrarPorDisciplina("Administrativo");
        QuestoesPage.verificarResultadosFiltro("Administrativo");
        cy.contains("p", "Administrativo").should("be.visible").and("contain", "Administrativo");
    });

    it("deve limpar filtros aplicados", () => {
        QuestoesPage.filtrarPorDisciplina("Administrativo");
        QuestoesPage.limparFiltros();
        QuestoesPage.verificarBotaoFiltrarDesabilitado();
    });
});
