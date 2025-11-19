import { BasePage } from "./BasePage";

/**
 * LoginPage - Page Object para a página de login
 * Página: https://betaconcursos.metodovde.com.br/entrar
 */
export class LoginPage extends BasePage {
    /**
     * Visita a página de login
     */
    visit() {
        cy.visit("https://betaconcursos.metodovde.com.br/entrar");
        return this;
    }

    /**
     * Realiza o login completo com credenciais padrão
     * Método reutilizável para outros testes
     */
    login() {
        const email = "johnmsousasantos@gmail.com";
        const password = "VDE@Concursos";

        cy.get("[type='email']").type(email);
        cy.get('button[type="submit"]').click();
        cy.get("[type='password']").type(password);
        cy.get('button[type="submit"]').click();

        return this;
    }
}

// Exportação da classe e instância padrão para facilitar o uso
export default new LoginPage();
