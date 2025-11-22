// Arquivo de suporte do Cypress - carregado automaticamente antes de cada teste
// Configurações globais e comportamentos que modificam o Cypress

// Importa comandos customizados (se necessário)
import "./commands";

// Tratamento de exceções JavaScript não capturadas
// Previne que erros JS da aplicação interrompam os testes
Cypress.on("uncaught:exception", (err, runnable) => {
    // Retorna false para ignorar erros não capturados
    // Isso evita que testes falhem por erros externos da aplicação
    return false;
});
