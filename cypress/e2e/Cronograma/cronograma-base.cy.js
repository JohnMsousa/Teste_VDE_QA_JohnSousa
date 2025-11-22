import LoginPage from "../../pages/LoginPage";
import CronogramaPage from "../../pages/CronogramaPage";

describe("Cronograma Base - Teste Data-Driven", () => {
    const periodos = [
        { meses: "8", texto: "Cronograma 8 meses" },
        { meses: "12", texto: "Cronograma 12 meses" },
        { meses: "18", texto: "Cronograma 18 meses" },
    ];

    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login();
        cy.get('[href="/cronograma"] > .gap-2').click();
        cy.contains("p", "Base").click();
    });

    periodos.forEach((periodo) => {
        it(`deve criar cronograma base de ${periodo.meses} meses`, () => {
            cy.contains("p", periodo.texto).click();
            cy.contains("button", "Gerar Cronograma").click();

            cy.contains("Estamos gerando o seu cronograma...", { timeout: 30000 })
                .should("be.visible")
                .then(() => {
                    cy.contains("Estamos gerando o seu cronograma...", { timeout: 30000 }).should("not.exist");
                });

            cy.contains("Cronograma base gerado!").should("be.visible").and("exist");
            CronogramaPage.excluirCronograma();
        });
    });
});
