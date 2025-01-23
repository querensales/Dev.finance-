
---

## **Relatório de Teste**

### **1. Informações Gerais**
- **Projeto:** Dev Finance
- **Objetivo:** Testar a funcionalidade de gerenciamento de transações na aplicação.
- **Data de Execução:** 23/01/2025
- **Ferramenta de Teste:** Cypress
- **Ambiente:** 
  - Navegador: Chrome (Versão mais recente)
  - URL Base: [Localhost ou ambiente configurado]

---

### **2. Cenários Testados**

#### **Cenário 1: Carregar a página inicial**
- **Descrição:** Verificar se a página inicial é carregada corretamente e o título (logo) está visível.
- **Passos:**
  1. Acessar a página inicial.
  2. Verificar se a imagem do cabeçalho (logo) está visível.
- **Resultado Esperado:** O título/logo deve ser exibido na tela inicial.
- **Status:** ✅ **Passou**

---

#### **Cenário 2: Adicionar transações (positivas e negativas)**
- **Descrição:** Testar a funcionalidade de adicionar transações no sistema.
- **Passos:**
  1. Clicar no botão "+ Nova Transação".
  2. Preencher os campos:
     - Descrição
     - Valor (positivo ou negativo)
     - Data
  3. Clicar no botão "Salvar".
  4. Verificar se a transação foi adicionada à tabela.
- **Casos Testados:**
  - Transação positiva:
    - Descrição: Freelance
    - Valor: 5000
    - Data: 23/01/2025
  - Transação negativa:
    - Descrição: Dízimo
    - Valor: -500
    - Data: 23/01/2025
- **Resultado Esperado:** Ambas as transações devem aparecer na tabela de transações.
- **Status:** ✅ **Passou**

---

#### **Cenário 3: Remover uma transação**
- **Descrição:** Verificar se uma transação pode ser removida corretamente.
- **Passos:**
  1. Adicionar uma transação com os seguintes valores:
     - Descrição: Teste Remoção
     - Valor: 500
     - Data: 23/01/2025
  2. Verificar se a transação foi adicionada à tabela.
  3. Clicar no botão de remover transação (ícone de lixeira).
  4. Verificar se a transação foi removida da tabela.
- **Resultado Esperado:** A transação deve ser removida com sucesso e não aparecer mais na tabela.
- **Status:** ✅ **Passou**

---

### **3. Resultados Resumidos**

| **Cenário**                     | **Descrição**                            | **Status** | **Observações**                                                                 |
|----------------------------------|------------------------------------------|------------|---------------------------------------------------------------------------------|
| Cenário 1: Carregar página       | Verificar o título/logo                  | ✅ Passou  | Página inicial carregada corretamente.                                         |
| Cenário 2: Adicionar transações  | Testar transações positivas e negativas  | ✅ Passou  | As transações foram adicionadas corretamente à tabela.                         |
| Cenário 3: Remover transação     | Adicionar e remover uma transação        | ✅ Passou  | Transação adicionada e removida com sucesso.                                   |

---

### **4. Observações**
- Os testes passaram com sucesso sem erros ou falhas.
- O tempo de carregamento da aplicação foi consistente e dentro do esperado.
- Os comandos customizados em Cypress ajudaram a reduzir a redundância no código de teste, tornando-o mais legível e reutilizável.
- A funcionalidade de remoção foi validada utilizando um fluxo completo de adicionar e, em seguida, remover transações.

---

### **5. Recomendação**
- Testar a aplicação em diferentes navegadores para garantir compatibilidade.
- Adicionar testes para casos de falha, como:
  - Campos obrigatórios não preenchidos.
  - Inserção de valores inválidos (ex.: letras no campo de valor).
- Incluir validações para múltiplas transações ao mesmo tempo.