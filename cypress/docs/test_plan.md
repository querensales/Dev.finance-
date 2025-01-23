# Roteiro de Testes - Dev Finance

## Objetivo
Garantir que as funcionalidades do Dev Finance estejam funcionando conforme o esperado.

## Escopo
- Página inicial
- Cadastro de transações
- Exibição do saldo
- Exclusão de transações

## Cenários de Teste

### Cenário 1: Carregar a página inicial
**Passos:**
1. Navegar até a URL: `https://dev-finance-git-testecypress-querensales-projects.vercel.app/`
2. Verificar se o título "Dev Finance" está presente.

**Resultado esperado:** A página carrega corretamente e exibe o título.

---

### Cenário 2: Adicionar uma transação
**Passos:**
1. Clicar no botão "Nova Transação".
2. Preencher os campos:
   - Nome: "Freelance"
   - Valor: "5000"
   - Data: "01/01/2025"
3. Clicar no botão "Salvar".

**Resultado esperado:** A nova transação aparece na tabela e o saldo é atualizado.

---
### Cenário 3: adicionar transação negativa
2. Preencher os campos:
   - Nome: "Dizimo"
   - Valor: "- 500"
   - Data: "01/01/2025"
3. Clicar no botão "Salvar".

### Cenário 4: Excluir uma transação
**Passos:**
1. Clicar no ícone de lixeira ao lado de uma transação.
2. Confirmar a exclusão.

**Resultado esperado:** A transação é removida da tabela e o saldo é atualizado.
