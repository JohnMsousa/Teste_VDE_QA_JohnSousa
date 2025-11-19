/**
 * BasePage - Classe base para todas as Page Objects
 * Contém métodos comuns que podem ser reutilizados
 */
export class BasePage {
  /**
   * Visita a URL especificada
   * @param {string} path - Caminho relativo à baseUrl
   */
  visit(path = '') {
    cy.visit(path)
  }

  /**
   * Aguarda elemento estar visível
   * @param {string} selector - Seletor do elemento
   * @param {number} timeout - Timeout em milissegundos
   */
  waitForElement(selector, timeout = 10000) {
    cy.get(selector, { timeout }).should('be.visible')
    return this
  }

  /**
   * Clica em um elemento
   * @param {string} selector - Seletor do elemento
   */
  click(selector) {
    cy.get(selector).should('be.visible').click()
    return this
  }

  /**
   * Preenche um campo de input
   * @param {string} selector - Seletor do campo
   * @param {string} value - Valor a ser preenchido
   */
  type(selector, value) {
    cy.get(selector).should('be.visible').clear().type(value)
    return this
  }

  /**
   * Verifica se elemento contém texto
   * @param {string} selector - Seletor do elemento
   * @param {string} text - Texto esperado
   */
  shouldContainText(selector, text) {
    cy.get(selector).should('contain', text)
    return this
  }

  /**
   * Verifica se elemento está visível
   * @param {string} selector - Seletor do elemento
   */
  shouldBeVisible(selector) {
    cy.get(selector).should('be.visible')
    return this
  }

  /**
   * Verifica se elemento não está visível
   * @param {string} selector - Seletor do elemento
   */
  shouldNotBeVisible(selector) {
    cy.get(selector).should('not.be.visible')
    return this
  }

  /**
   * Aguarda um tempo específico (use com moderação)
   * @param {number} milliseconds - Tempo em milissegundos
   */
  wait(milliseconds) {
    cy.wait(milliseconds)
    return this
  }

  /**
   * Faz scroll até o elemento
   * @param {string} selector - Seletor do elemento
   */
  scrollTo(selector) {
    cy.get(selector).scrollIntoView()
    return this
  }

  /**
   * Verifica URL atual
   * @param {string} url - URL esperada
   */
  shouldHaveUrl(url) {
    cy.url().should('include', url)
    return this
  }
}

