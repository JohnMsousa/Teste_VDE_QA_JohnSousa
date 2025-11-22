# Projeto de Testes Automatizados - Cypress

Projeto de testes end-to-end (E2E) utilizando Cypress seguindo o padrão **Page Objects** com testes data-driven.

**URL da aplicação:** https://betaconcursos.metodovde.com.br/entrar

---

## 📋 Pré-requisitos

-   Node.js (versão 14 ou superior)
-   npm ou yarn

---

## 🚀 Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

---

## ⚙️ Configuração Inicial

### 🔐 Configurar Credenciais de Login

**IMPORTANTE:** Antes de executar os testes, você precisa configurar suas credenciais válidas.

1. Abra o arquivo `cypress/pages/LoginPage.js`
2. Localize o método `login()` (linha 9)
3. Substitua os valores:
    - `SEU_EMAIL_AQUI@exemplo.com` → seu email válido
    - `SUA_SENHA_AQUI` → sua senha válida

```javascript
login() {
    const email = "seu-email@exemplo.com";  // ← Adicione seu email aqui
    const password = "sua-senha";           // ← Adicione sua senha aqui

    // ... resto do código
}

## 🏗️ Estrutura do Projeto

```
.
├── cypress/
│   ├── e2e/                    # Testes end-to-end
│   │   ├── Login/             # Testes de login
│   │   │   └── 01-login.cy.js
│   │   ├── Cronograma/         # Testes de cronograma
│   │   │   ├── cronograma-base.cy.js
│   │   │   └── cronograma-personalizado.cy.js
│   │   └── Questões/          # Testes de questões
│   │       ├── 01-reponder-questao.cy.js
│   │       └── 02-filtrar-questao.cy.js
│   ├── fixtures/              # Dados de teste (JSON)
│   │   ├── example.json
│   │   ├── loginData.json     # Dados para testes de login
│   │   ├── users.json         # Dados de usuários para testes
│   │   └── disciplinas.json  # Dados para testes data-driven
│   ├── pages/                 # Page Objects
│   │   ├── BasePage.js        # Classe base com métodos comuns
│   │   ├── HomePage.js        # Page Object da página inicial
│   │   ├── LoginPage.js       # Page Object da página de login
│   │   ├── CronogramaPage.js  # Page Object da página de cronograma
│   │   └── QuestoesPage.js    # Page Object da página de questões
│   ├── support/               # Arquivos de suporte
│   │   ├── commands.js        # Comandos customizados
│   │   └── e2e.js             # Configurações globais
│   ├── screenshots/           # Screenshots de falhas (gerado automaticamente)
│   ├── videos/                # Vídeos dos testes (gerado automaticamente)
│   └── reports/               # Relatórios gerados
├── cypress.config.js          # Configuração do Cypress
├── package.json
└── README.md
```

---

## 🎯 Padrão Page Objects

O projeto utiliza o padrão **Page Objects** para organizar os testes:

-   **BasePage**: Classe base com métodos comuns reutilizáveis
-   **Page Objects específicos**: Cada página/funcionalidade tem sua própria classe
-   **Encapsulamento**: Seletores e ações são encapsulados nas classes
-   **Reutilização**: Métodos podem ser reutilizados em múltiplos testes

### Exemplo de uso:

```javascript
import LoginPage from "../pages/LoginPage";
import QuestoesPage from "../pages/QuestoesPage";

it("Deve filtrar questões", () => {
    LoginPage.visit();
    LoginPage.login();
    QuestoesPage.navegarParaQuestoes();
    QuestoesPage.filtrarPorDisciplina("Administrativo");
    QuestoesPage.verificarResultadosFiltro("Administrativo");
});
```

---

## 🧪 Executando os Testes

### Modo Interativo (Recomendado para desenvolvimento)

Abre o Cypress Test Runner com interface gráfica:

```bash
npm run cy:open
```

### Modo Headless

```bash
npm run cy:run:chrome    # Chrome
npm run cy:run:firefox   # Firefox
npm run cy:run:edge      # Edge
```

### Executar Testes Específicos

```bash
# Executar apenas testes de questões
npx cypress run --spec "cypress/e2e/Questões/**/*.cy.js"

# Executar apenas testes de cronograma
npx cypress run --spec "cypress/e2e/Cronograma/**/*.cy.js"

# Executar apenas testes de login
npx cypress run --spec "cypress/e2e/Login/**/*.cy.js"

# Executar um arquivo específico
npx cypress run --spec "cypress/e2e/Questões/02-filtrar-questao.cy.js"
```

---

## 📊 Gerar Relatório de Testes

### Relatório com Mochawesome

Gera um relatório HTML completo com estatísticas e detalhes dos testes:

```bash
npm run cy:report
```

O relatório será gerado em: `mochawesome-html/mochawesome.html`

---

## 🔄 CI/CD - GitHub Actions

O workflow executa automaticamente em push/PR na `main`, schedule diário (06:00 UTC) e manualmente. Executa os testes, gera o relatório Mochawesome e publica no GitHub Pages.

⚠️ **Requisito:** Configure os GitHub Secrets (`TEST_USER` e `TEST_PASSWORD`)

### Publicar Relatório no GitHub Pages

**Para ativar:**

1. Vá em **Settings → Pages** no repositório
2. Selecione **"Deploy from a branch"** → Branch: `gh-pages` → Root: `/ (root)`
3. O workflow publica automaticamente na branch `gh-pages` após cada execução

O relatório estará disponível em:
`https://johnmsousa.github.io/Teste_VDE_QA_JohnSousa/`

---

## ⚙️ Configuração do Cypress

Principais configurações em `cypress.config.js`:

-   `baseUrl`: https://betaconcursos.metodovde.com.br
-   `viewportWidth`: 1280px / `viewportHeight`: 720px
-   `defaultCommandTimeout`: 10000ms
-   `video`: false / `screenshotOnRunFailure`: true

---

## 📝 Criando Novos Testes

1. **Crie uma nova Page Object** em `cypress/pages/` se necessário
2. **Crie o arquivo de teste** em `cypress/e2e/` com extensão `.cy.js`
3. **Importe as Page Objects** necessárias
4. **Escreva os testes** seguindo o padrão Page Objects

### Exemplo de estrutura de teste:

```javascript
import LoginPage from "../pages/LoginPage";
import NovaPage from "../pages/NovaPage";

describe("Nova Funcionalidade", () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login();
    });

    it("Deve realizar ação X", () => {
        NovaPage.navegar();
        NovaPage.realizarAcao();
        NovaPage.verificarResultado();
    });
});
```

---

## 🔧 Comandos Customizados

Comandos customizados podem ser adicionados em `cypress/support/commands.js`:

```javascript
Cypress.Commands.add("meuComando", (parametro) => {
    // Implementação do comando
});
```

---

## 📚 Boas Práticas

1. ✅ Use Page Objects para encapsular seletores e ações
2. ✅ Prefira `data-testid` para seletores estáveis (quando disponível no sistema)
    - **Nota:** Neste projeto, foi necessário usar outros seletores (atributos HTML, classes CSS, etc.) devido à ausência de `data-testid` no sistema testado
3. ✅ Use asserções claras e específicas
4. ✅ Mantenha os testes organizados e legíveis
5. ✅ Utilize testes data-driven para validar múltiplos cenários
6. ✅ Sempre limpe dados criados nos testes
7. ✅ Nunca faça commit de credenciais reais

---

## 📦 Dependências

-   **cypress**: ^14.5.4 - Framework de testes E2E
-   **mochawesome**: ^7.1.4 - Gerador de relatórios
-   **mochawesome-merge**: ^4.4.1 - Merge de relatórios
-   **mochawesome-report-generator**: ^6.3.2 - Gerador HTML de relatórios

---

## 🐛 Troubleshooting

### Problemas Comuns

1. **Testes falhando por timeout**

    - Solução: Aumente o `defaultCommandTimeout` no `cypress.config.js`

2. **Elementos não encontrados**

    - Verifique se os seletores estão corretos
    - Verifique se há elementos dinâmicos que precisam de wait

3. **Problemas de login**

    - Verifique se as credenciais estão configuradas corretamente no `LoginPage.js`
    - Confirme se o email e senha são válidos na aplicação

4. **Erro ao executar testes**
    - Verifique se todas as dependências foram instaladas: `npm install`
    - Verifique se o Node.js está na versão 14 ou superior

---

## 👤 Autor

**John Sousa** - Teste Técnico QA Pleno

---
