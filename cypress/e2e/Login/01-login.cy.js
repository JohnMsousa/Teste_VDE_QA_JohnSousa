import LoginPage from "../../pages/LoginPage";

describe("Página de Login - Beta Concursos", () => {
    it("deve realizar login com sucesso", () => {
        LoginPage.visit();
        LoginPage.login();

        cy.get("span.flex.gap-x-2.items-center").should("contain.text", "Olá,").and("contain.text", "John!");
    });

    it("deve exibir mensagem de email inválido", () => {
        LoginPage.visit();
        LoginPage.preencherEmail("email-invalido");
        LoginPage.clicarProximo();
        LoginPage.verificarMensagemEmailInvalido();
    });

    it("deve exibir mensagem de email não cadastrado", () => {
        LoginPage.visit();
        LoginPage.preencherEmail("naocadastrado@teste.com");
        LoginPage.clicarProximo();
        LoginPage.verificarMensagemEmailNaoCadastrado();
    });

    it("deve exibir mensagem de campo vazio", () => {
        LoginPage.visit();
        LoginPage.clicarProximo();
        LoginPage.verificarMensagemCampoVazio();
    });

    it("deve exibir mensagem de senha incorreta", () => {
        LoginPage.visit();
        LoginPage.preencherEmail("johnmsousa@gmail.com"); 
        LoginPage.clicarProximo();
        LoginPage.preencherSenha("senhaIncorreta123");
        LoginPage.clicarEntrar();
        LoginPage.verificarMensagemSenhaIncorreta();
    });
});
