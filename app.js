import {controllerCadastrarEpi,controllerListarEpis,controllerBuscarEpi,controllerAdicionarQuantidade,controllerRetirarQuantidade,controllerAtualizarEpi,controllerExcluirEpi} from './epiController.js';

console.log("=== INICIANDO OS TESTES DO SISTEMA DE EPIs ===\n");

console.log("--- 1. Cadastrando EPIs ---");
controllerCadastrarEpi("EPI-001", "Capacete de Seguranca", "12345", 10);
controllerCadastrarEpi("EPI-002", "Luva Nitrilica", "54321", 50);
controllerCadastrarEpi("EPI-003", "Oculos de Protecao", "67890", 25);

console.log("\n--- 2. Listando todos os EPIs ---");
controllerListarEpis();

console.log("--- 3. Buscando EPI pelo indice (Indice 1) ---");
controllerBuscarEpi(1);

console.log("\n--- 4. Adicionando unidades ao estoque (Indice 0 +15 unidades) ---");
controllerAdicionarQuantidade(0, 15);

console.log("\n--- 5. Retirando unidades do estoque (Indice 2 -10 unidades) ---");
controllerRetirarQuantidade(2, 10);

console.log("\n--- 6. Testando regra: Retirar quantidade maior que a disponivel (Indice 2 -30 unidades) ---");
controllerRetirarQuantidade(2, 30);

console.log("\n--- 7. Atualizando um EPI pelo indice (Indice 1) ---");
controllerAtualizarEpi(1, "EPI-002-REV", "Luva Nitrilica de Alta Resistencia", "99999", 100);

console.log("\n--- 8. Excluindo um EPI pelo indice (Indice 0) ---");
controllerExcluirEpi(0);

console.log("\n--- 9. Listando novamente os EPIs apos as alteracoes ---");
controllerListarEpis();

console.log("=== TESTES FINALIZADOS COM SUCESSO ===");
