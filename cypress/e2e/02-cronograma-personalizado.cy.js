import LoginPage from "../pages/LoginPage";
import CronogramaPage from "../pages/CronogramaPage";

it("criar cronograma personalizado com horas suficientes", function () {
    LoginPage.visit();
    LoginPage.login();
    cy.get('[href="/cronograma"] > .gap-2').click();
    cy.contains("p", "Personalizado").click();
    cy.get('button[role="combobox"]').click();
    cy.contains("Auditor Fiscal").should("be.visible").click();
    cy.get("div.grid.grid-cols-2").scrollIntoView();
    const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];
    dias.forEach((dia) => {
        CronogramaPage.clicarMaisNoDia(dia);
    });
    cy.contains("button", "Gerar Cronograma").click();
    cy.contains("Estamos gerando o seu cronograma...").should("be.visible");
    cy.contains("Cronograma personalizado gerado!").should("be.visible");
});
