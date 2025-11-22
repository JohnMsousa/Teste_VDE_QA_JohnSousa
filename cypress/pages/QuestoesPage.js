import { BasePage } from "./BasePage";

export class QuestoesPage extends BasePage {
    navegarParaQuestoes() {
        cy.get('[href="/questoes"] > .gap-2').click();
        return this;
    }

    filtrarPorDisciplina(disciplina) {
        cy.contains("button", "Disciplina").click();
        cy.contains("span.truncate", disciplina)
            .should("be.visible")
            .click();
        cy.contains("p", "Filtrar questões").click();
        return this;
    }

    verificarResultadosFiltro(disciplina) {
        cy.contains("p", "Foram encontradas").should("be.visible");
        cy.contains("p", disciplina).should("be.visible");
        return this;
    }

    abrirFiltros() {
        cy.contains("p", "Filtros").click();
        return this;
    }

    limparFiltros() {
        this.abrirFiltros();
        cy.contains("p", "Limpar filtros").click();
        return this;
    }

    verificarBotaoFiltrarDesabilitado() {
        cy.contains("p", "Filtrar questões")
            .closest("button")
            .should("have.class", "bg-gray-300");
        return this;
    }

    selecionarQuestao(titulo) {
        cy.contains("div.cursor-pointer", titulo)
            .scrollIntoView()
            .click({ force: true });
        return this;
    }

    responderQuestao() {
        cy.contains("p", "Responder")
            .scrollIntoView()
            .click({ force: true });
        return this;
    }

    verificarRespostaCorreta() {
        cy.contains("p", "Você acertou a resposta")
            .scrollIntoView()
            .should("exist");
        return this;
    }

    verificarQuestaoVisivel(disciplina, descricao) {
        cy.contains("p", disciplina)
            .scrollIntoView()
            .should("exist");
        cy.contains("p", descricao)
            .scrollIntoView()
            .should("exist");
        return this;
    }
}

export default new QuestoesPage();

