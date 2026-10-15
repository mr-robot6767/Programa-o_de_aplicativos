import {
  controllerCadastrarEpi,
  controllerListarEpis,
  controllerBuscarEpi,
  controllerAdicionarQuantidade,
  controllerRetirarQuantidade,
  controllerAtualizarEpi,
  controllerExcluirEpi
} from './epiController.js';


import {
  controllerCadastrarFuncionario,
  ControllerListarFuncionarios,
  ControllerBuscarFuncionario,
  ControllerDesativarFuncionario,
  ControllerAtivarFuncionario,
  ControllerAtualizarFuncionario,
  ControllerExcluirFuncionario
} from './funcionarioController.js';

console.log(" INICIANDO OS TESTES DO SISTEMA DE EPIs ");
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
console.log("=== TESTES DE EPIs FINALIZADOS COM SUCESSO ===\n");


console.log("=============================================");
console.log("=== INICIANDO OS TESTES DE FUNCIONÁRIOS ===");
console.log("=============================================\n");

console.log("--- 1. Cadastrando pelo menos três funcionários ---");
controllerCadastrarFuncionario(101, "Ana Silva", "TI", "Desenvolvedora");
controllerCadastrarFuncionario(102, "Bruno Costa", "Segurança", "Técnico");
controllerCadastrarFuncionario(103, "Carla Souza", "RH", "Analista");

console.log("\n--- 2. Listando todos os funcionários ---");
ControllerListarFuncionarios();

console.log("\n--- 3. Buscando um funcionário pelo índice (Índice 1) ---");
ControllerBuscarFuncionario(1);

console.log("\n--- 4. Desativando um funcionário pelo índice (Índice 1) ---");
ControllerDesativarFuncionario(1);

console.log("\n--- 5. Mostrando novamente o status desse funcionário ---");
ControllerListarFuncionarios(); 

console.log("\n--- 6. Ativando o mesmo funcionário (Índice 1) ---");
ControllerAtivarFuncionario(1);

console.log("\n--- 7. Atualizando os dados de um funcionário pelo índice (Índice 2) ---");
ControllerAtualizarFuncionario(2, { matricula: 103, nome: "Carla Souza Silva", setor: "RH", cargo: "Gerente de RH" });

console.log("\n--- 8. Excluindo um funcionário pelo índice (Índice 0) ---");
ControllerExcluirFuncionario(0);

console.log("\n--- 9. Listando novamente os funcionários após as alterações ---");
ControllerListarFuncionarios();

console.log("=== TESTES DE FUNCIONÁRIOS FINALIZADOS COM SUCESSO ===");
