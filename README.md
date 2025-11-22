# Projeto de Testes Automatizados - Cypress

Projeto de testes end-to-end (E2E) utilizando Cypress seguindo o padrão **Page Objects** com testes data-driven.

**URL da aplicação:** https://betaconcursos.metodovde.com.br/entrar

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

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
│   │   ├── Login/             # Testes de login
│   │   ├── Cronograma/         # Testes de cronograma
│   │   └── Questões/          # Testes de questões
│   │       ├── 01-reponder-questao.cy.js
│   │       ├── 02-filtrar-questao.cy.js
│   │       └── 03-filtrar-questoes-data-driven.cy.js  # Teste data-driven
│   ├── fixtures/              # Dados de teste (JSON, etc)
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
│   └── videos/                # Vídeos dos testes (gerado automaticamente)
├── cypress.config.js          # Configuração do Cypress
├── package.json
└── README.md
```

## 🎯 Padrão Page Objects

O projeto utiliza o padrão **Page Objects** para organizar os testes:

- **BasePage**: Classe base com métodos comuns reutilizáveis
- **Page Objects específicos**: Cada página/funcionalidade tem sua própria classe
- **Encapsulamento**: Seletores e ações são encapsulados nas classes
- **Reutilização**: Métodos podem ser reutilizados em múltiplos testes

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

### Executar testes específicos:

```bash
# Executar apenas testes de questões
npx cypress run --spec "cypress/e2e/Questões/**/*.cy.js"

# Executar apenas testes de cronograma
npx cypress run --spec "cypress/e2e/Cronograma/**/*.cy.js"

# Executar um arquivo específico
npx cypress run --spec "cypress/e2e/Questões/03-filtrar-questoes-data-driven.cy.js"
```

### Gerar relatório com Mochawesome:

```bash
npm run cy:report
```

Este comando executa todos os testes e gera um relatório HTML completo em `cypress/reports/report.html` com:
- Estatísticas de execução
- Detalhes de cada teste
- Screenshots de falhas
- Tempo de execução
- Status de cada teste

### Publicar relatório no GitHub Pages:

O workflow do GitHub Actions executa automaticamente quando há push na branch `main`:
- Executa todos os testes
- Gera o relatório Mochawesome
- Publica automaticamente no GitHub Pages

O relatório estará disponível em:
`https://johnmsousa.github.io/Teste_VDE_QA_JohnSousa/`

**Para ativar:**
1. Vá em Settings → Pages no repositório
2. Selecione "GitHub Actions" como source
3. Faça push na branch `main` e o workflow executará automaticamente


## 📊 Testes Data-Driven

O projeto inclui testes data-driven que executam o mesmo cenário com múltiplos dados de entrada, reduzindo duplicação de código e facilitando manutenção.

**Exemplo:** `03-filtrar-questoes-data-driven.cy.js`

Este teste valida o filtro de questões utilizando diferentes disciplinas:

```javascript
const disciplinas = [
    { nome: "Administrativo", esperado: "Administrativo" },
    { nome: "Constitucional", esperado: "Constitucional" },
    { nome: "Tributário", esperado: "Tributário" }
];

disciplinas.forEach((disciplina) => {
    it(`deve filtrar questões por disciplina: ${disciplina.nome}`, () => {
        QuestoesPage.filtrarPorDisciplina(disciplina.nome);
        QuestoesPage.verificarResultadosFiltro(disciplina.esperado);
    });
});
```

## ⚙️ Configuração

O arquivo `cypress.config.js` está configurado com:

- `baseUrl`: https://betaconcursos.metodovde.com.br
- `viewportWidth`: 1280px
- `viewportHeight`: 720px
- `defaultCommandTimeout`: 10000ms

Para ajustar outras configurações, edite o arquivo `cypress.config.js`.

## 📝 Criando Novos Testes

1. Crie uma nova Page Object em `cypress/pages/` se necessário
2. Crie o arquivo de teste em `cypress/e2e/` com extensão `.cy.js`
3. Importe as Page Objects necessárias
4. Escreva os testes seguindo o padrão Page Objects

## 🔧 Comandos Customizados

Comandos customizados podem ser adicionados em `cypress/support/commands.js`:

```javascript
Cypress.Commands.add("meuComando", (parametro) => {
    // Implementação do comando
});
```

## 📚 Boas Práticas

1. Use Page Objects para encapsular seletores e ações
2. Prefira `data-testid` para seletores estáveis
3. Use asserções claras e específicas
4. Mantenha os testes organizados e legíveis
5. Utilize testes data-driven para validar múltiplos cenários
6. Sempre limpe dados criados nos testes

## 📦 Dependências

- **cypress**: ^14.5.4 - Framework de testes E2E

## 🐛 Troubleshooting

### Problemas comuns:

1. **Testes falhando por timeout**: Aumente o `defaultCommandTimeout` no `cypress.config.js`
2. **Elementos não encontrados**: Verifique se os seletores estão corretos e se há elementos dinâmicos
3. **Problemas de login**: Verifique se as credenciais estão corretas no `LoginPage.js`

## 👤 Autor

John Sousa - Teste Técnico QA Pleno

