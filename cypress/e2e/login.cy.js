import LoginPage from "../pages/LoginPage";

describe("Página de Login - Beta Concursos", () => {
    it("Deve realizar login com sucesso", () => {
        LoginPage.visit();
        LoginPage.login();
        cy.get("span.flex.gap-x-2.items-center").should("contain.text", "Olá,").and("contain.text", "John!");
    });
});
