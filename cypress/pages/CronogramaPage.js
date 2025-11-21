import { BasePage } from "./BasePage";

/**
 * CronogramaPage - Page Object para a página de cronograma
 */
export class CronogramaPage extends BasePage {
    /**
     * Clica no botão "Mais" de um dia específico
     * @param {string} dia - Nome do dia (ex: "Segunda", "Terça", etc.)
     * @param {number} vezes - Quantidade de cliques (padrão: 4)
     */
    clicarMaisNoDia(dia, vezes = 4) {
        cy.contains("p", dia)
            .parents("div.flex.flex-col.gap-2")
            .within(() => {
                for (let i = 0; i < vezes; i++) {
                    cy.get("button").eq(2).click();
                }
            });
        return this;
    }
}

export default new CronogramaPage();
