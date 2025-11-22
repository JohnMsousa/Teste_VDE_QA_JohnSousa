import { BasePage } from "./BasePage";

export class CronogramaPage extends BasePage {
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

    excluirCronograma() {
        cy.get(".h-4.lucide.lucide-trash2").click();
        cy.get(".cursor-pointer.font-medium.text-gray-600").click();
        cy.contains("button", "Excluir").click();
        cy.contains("button", "Excluir").click();
        return this;
    }
}

export default new CronogramaPage();
