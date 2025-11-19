# Projeto de Testes Automatizados - Cypress

Projeto de testes end-to-end (E2E) utilizando Cypress seguindo o padrão **Page Objects**.

**URL da aplicação:** https://betaconcursos.metodovde.com.br/entrar

## 📋 Pré-requisitos

-   Node.js (versão 14 ou superior)
-   npm ou yarn

## 🚀 Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

## 🏗️ Estrutura do Projeto

```
.
├── cypress/
│   ├── e2e/                    # Testes end-to-end
│   │   ├── example.cy.js      # Exemplo de teste
│   │   └── login.cy.js        # Testes da página de login
│   ├── fixtures/              # Dados de teste (JSON, etc)
│   │   ├── example.json
│   │   ├── users.json         # Dados de usuários para testes
│   │   └── loginData.json     # Dados para testes de login
│   ├── pages/                 # Page Objects
│   │   ├── BasePage.js        # Classe base com métodos comuns
│   │   ├── HomePage.js        # Page Object da página inicial
│   │   └── LoginPage.js       # Page Object da página de login
│   ├── support/               # Arquivos de suporte
│   │   ├── commands.js        # Comandos customizados
│   │   └── e2e.js             # Configurações globais
│   ├── screenshots/           # Screenshots de falhas (gerado automaticamente)
│   └── videos/                # Vídeos dos testes (gerado automaticamente)
├── cypress.config.js          # Configuração do Cypress
├── package.json
└── README.md
```

## 🎯 Padrão Page Objects

O projeto utiliza o padrão **Page Objects** para organizar os testes:

-   **BasePage**: Classe base com métodos comuns reutilizáveis
-   **Page Objects específicos**: Cada página da aplicação tem sua própria classe
-   **Encapsulamento**: Seletores e ações são encapsulados nas classes

### Exemplo de uso:

```javascript
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

describe("Meus Testes", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    it("Deve fazer login", () => {
        homePage.visit();
        homePage.clickLoginButton();
        loginPage.login("usuario", "senha");
    });
});
```

## 🧪 Executando os Testes

### Abrir o Cypress Test Runner (modo interativo):

```bash
npm run cy:open
```

### Executar todos os testes (modo headless):

```bash
npm run cy:run
```

### Executar em navegador específico:

```bash
npm run cy:run:chrome
npm run cy:run:firefox
npm run cy:run:edge
```

## ⚙️ Configuração

O arquivo `cypress.config.js` está configurado com:

-   `baseUrl`: https://betaconcursos.metodovde.com.br
-   `viewportWidth`: 1280px
-   `viewportHeight`: 720px
-   `defaultCommandTimeout`: 10000ms

Para ajustar outras configurações, edite o arquivo `cypress.config.js`.

## 📝 Criando Novos Testes

1. Crie uma nova Page Object em `cypress/pages/` se necessário
2. Crie o arquivo de teste em `cypress/e2e/` com extensão `.cy.js`
3. Importe as Page Objects necessárias
4. Escreva os testes seguindo o padrão Page Objects

### Exemplo de nova Page Object:

```javascript
import { BasePage } from "./BasePage";

export class MinhaPage extends BasePage {
    elements = {
        meuBotao: '[data-testid="meu-botao"]',
    };

    visit() {
        super.visit("/minha-rota");
        return this;
    }

    clicarBotao() {
        this.click(this.elements.meuBotao);
        return this;
    }
}
```

## 🔧 Comandos Customizados

Comandos customizados podem ser adicionados em `cypress/support/commands.js`:

```javascript
Cypress.Commands.add("meuComando", (parametro) => {
    // Implementação do comando
});
```

## 📚 Boas Práticas

1. **Use Page Objects**: Sempre encapsule seletores e ações em Page Objects
2. **Seletores**: Prefira `data-testid` para seletores estáveis
3. **Asserções**: Use asserções claras e específicas
4. **Organização**: Mantenha os testes organizados e legíveis
5. **Reutilização**: Aproveite a classe BasePage para métodos comuns
6. **Nomenclatura**: Use nomes descritivos para testes e métodos

## 📦 Dependências

-   **cypress**: Framework de testes E2E

## 👤 Autor

John Sousa - Teste Técnico QA Pleno

## 📄 Licença

ISC
