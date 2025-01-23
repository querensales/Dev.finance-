# **Projeto de Gerenciamento de Finanças Pessoais**

Este projeto é um aplicativo de gerenciamento de finanças pessoais que permite aos usuários adicionar, visualizar e remover transações financeiras, com o objetivo de monitorar entradas e saídas financeiras de forma eficiente.

## **Funcionalidades Principais**
- **Adicionar transações**: Registrar entradas e saídas financeiras.
- **Visualizar transações**: Listar todas as transações cadastradas.
- **Remover transações**: Excluir transações desnecessárias ou incorretas.
- **Gerar relatórios detalhados**: Acompanhar o histórico financeiro.

---

## **Testes Automatizados com Cypress**

O projeto utiliza o [Cypress](https://www.cypress.io/) para realizar testes automatizados de ponta a ponta, garantindo que as funcionalidades essenciais do aplicativo funcionem corretamente.

### **Estrutura dos Testes**
Os testes estão organizados em cenários que simulam o uso real da aplicação. Exemplos de cenários testados:
1. **Carregar a página inicial**: Verifica se o título da aplicação está visível.
2. **Adicionar uma transação**: Testa o fluxo de cadastro de uma transação de entrada ou saída.
3. **Remover uma transação**: Garante que transações podem ser removidas com sucesso.

---

## **Integrações Utilizadas**

### **Mochawesome para Relatórios**
O [Mochawesome](https://www.npmjs.com/package/mochawesome) é utilizado para gerar relatórios detalhados sobre os testes executados. Ele fornece informações como:
- Quantidade de testes bem-sucedidos e falhos.
- Descrição de cada cenário testado.
- Capturas de tela em caso de falhas.

#### **Configuração do Mochawesome**
O Mochawesome é configurado no arquivo `cypress.config.js` e integrado com o Cypress através do `reporter`:

```javascript
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Eventos personalizados podem ser configurados aqui.
    },
    baseUrl: 'http://localhost:3000',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
});
```

Para gerar os relatórios, rode o comando:
```bash
npx cypress run
```

Os relatórios serão gerados na pasta `cypress/reports`.

---

### **Cypress Cloud**
O Cypress Cloud permite monitorar a execução dos testes em diferentes ambientes e compartilhar os resultados com a equipe. Ele facilita a integração dos testes com pipelines de CI/CD e oferece:
- **Histórico de testes**: Acompanhar mudanças no comportamento do sistema ao longo do tempo.
- **Paralelismo**: Executar testes simultaneamente para reduzir o tempo total de execução.
- **Gravação de vídeos**: Registros visuais das execuções de testes, úteis para debugar falhas.

#### **Configuração**
Para utilizar o Cypress Cloud:
1. Crie uma conta no [Cypress Dashboard](https://dashboard.cypress.io/).
2. Configure o projeto para o Cypress Cloud:
   ```bash
   npx cypress open --cloud
   ```
3. Adicione a chave do projeto no arquivo de configuração.

---

## **Como Rodar o Projeto e os Testes**

### **1. Instalar Dependências**
Certifique-se de ter o Node.js instalado em sua máquina. Depois, instale as dependências:
```bash
npm install
```

### **2. Rodar o Projeto**
Para iniciar o servidor localmente:
```bash
npm start
```

Acesse o projeto no navegador em: [http://localhost:3000](http://localhost:3000).

### **3. Executar os Testes**
- **Abrir o Cypress para execução interativa**:
   ```bash
   npx cypress open
   ```
- **Executar os testes no modo headless e gerar relatórios com Mochawesome**:
   ```bash
   npx cypress run
   ```

### **4. Gerar Relatório HTML**
Após a execução dos testes, o relatório estará disponível na pasta `cypress/reports`. Abra o arquivo `.html` no navegador para visualizar o relatório.

---

## **Contribuição**
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias ou correções.

---

## **Tecnologias Utilizadas**
- **Cypress**: Framework para testes end-to-end.
- **Mochawesome**: Relatórios detalhados dos testes.
- **Cypress Cloud**: Integração e monitoramento em nuvem.

---
