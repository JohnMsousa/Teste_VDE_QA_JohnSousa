import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    visit() {
        cy.visit("https://betaconcursos.metodovde.com.br/entrar");
        return this;
    }

    login() {
        const email = Cypress.env("TEST_USER") || "SEU_EMAIL_AQUI@exemplo.com";
        const password = Cypress.env("TEST_PASSWORD") || "SUA_SENHA_AQUI";

        cy.get("[type='email']").type(email);
        cy.contains("button", "Próximo").click();
        cy.get("[type='password']", { timeout: 10000 }).should("be.visible").type(password);
        cy.contains("button", "Entrar").should("be.visible").click();

        return this;
    }

    preencherEmail(email) {
        cy.get("[type='email']").type(email);
        return this;
    }

    clicarProximo() {
        cy.contains("button", "Próximo").click();
        return this;
    }

    preencherSenha(senha) {
        cy.get("[type='password']").type(senha);
        return this;
    }

    clicarEntrar() {
        cy.contains("button", "Entrar").click();
        return this;
    }

    verificarMensagemSenhaIncorreta() {
        cy.contains("senha incorreta.").should("be.visible");
        return this;
    }

    verificarMensagemEmailInvalido() {
        cy.contains("Insira um email válido!").should("be.visible");
        return this;
    }

    verificarMensagemEmailNaoCadastrado() {
        cy.contains("Email não cadastrado!").should("be.visible");
        return this;
    }

    verificarMensagemCampoVazio() {
        cy.contains("O campo de e-mail está vazio!").should("be.visible");
        return this;
    }
}

export default new LoginPage();
