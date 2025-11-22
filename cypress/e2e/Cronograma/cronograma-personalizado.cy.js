import LoginPage from "../../pages/LoginPage";
import CronogramaPage from "../../pages/CronogramaPage";

describe("Cronograma Personalizado", () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login();
        cy.get('[href="/cronograma"] > .gap-2').click();
        cy.contains("p", "Personalizado").click();
        cy.get('button[role="combobox"]').click();
        cy.contains("Auditor Fiscal").should("be.visible").click();
        cy.get("div.grid.grid-cols-2").scrollIntoView();
    });

    it("deve criar cronograma personalizado com horas suficientes", () => {
        const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];
        dias.forEach((dia) => {
            CronogramaPage.clicarMaisNoDia(dia);
        });

        cy.contains("button", "Gerar Cronograma").click();

        cy.contains("Estamos gerando o seu cronograma...", { timeout: 30000 })
            .should("be.visible")
            .then(() => {
                cy.contains("Estamos gerando o seu cronograma...", { timeout: 30000 })
                    .should("not.exist");
            });

        cy.contains("Cronograma personalizado gerado!")
            .should("be.visible")
            .and("exist");

        CronogramaPage.excluirCronograma();
    });

    it("deve criar cronograma personalizado com horas insuficientes", () => {
        const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];
        dias.forEach((dia) => {
            CronogramaPage.clicarMaisNoDia(dia, 1);
        });

        cy.contains("button", "Gerar Cronograma").click();

        cy.contains("O tempo especificado não cobre todos os tópicos no período informado")
            .should("be.visible")
            .and("exist");

        cy.contains("button", "Continuar Mesmo Assim").click();

        cy.contains("Estamos gerando o seu cronograma...", { timeout: 30000 })
            .should("be.visible")
            .then(() => {
                cy.contains("Estamos gerando o seu cronograma...", { timeout: 30000 })
                    .should("not.exist");
            });

        cy.contains("Cronograma personalizado gerado!")
            .should("be.visible")
            .and("exist");

        CronogramaPage.excluirCronograma();
    });
});

