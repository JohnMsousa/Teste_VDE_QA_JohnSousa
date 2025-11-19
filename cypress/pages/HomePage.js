import { BasePage } from './BasePage'

/**
 * HomePage - Page Object para a página inicial
 * Exemplo de implementação seguindo o padrão Page Objects
 */
export class HomePage extends BasePage {
  // Seletores da página
  elements = {
    // Exemplo de seletores - ajuste conforme necessário
    logo: '[data-testid="logo"]',
    searchInput: '[data-testid="search-input"]',
    searchButton: '[data-testid="search-button"]',
    menuButton: '[data-testid="menu-button"]',
    loginButton: '[data-testid="login-button"]',
  }

  /**
   * Visita a página inicial
   */
  visit() {
    super.visit('/')
    return this
  }

  /**
   * Verifica se a logo está visível
   */
  verifyLogoIsVisible() {
    this.shouldBeVisible(this.elements.logo)
    return this
  }

  /**
   * Realiza uma busca
   * @param {string} searchTerm - Termo de busca
   */
  search(searchTerm) {
    this.type(this.elements.searchInput, searchTerm)
    this.click(this.elements.searchButton)
    return this
  }

  /**
   * Clica no botão de login
   */
  clickLoginButton() {
    this.click(this.elements.loginButton)
    return this
  }

  /**
   * Clica no botão de menu
   */
  clickMenuButton() {
    this.click(this.elements.menuButton)
    return this
  }
}

