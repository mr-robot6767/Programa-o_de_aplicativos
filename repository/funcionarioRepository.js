const funcionarios = [];

export function cadastrarFuncionario(funcionario) {
  funcionarios.push(funcionario);
}

export function listarFuncionarios() {
  return funcionarios;
} 

export function buscarFuncionarioPorIndice(indice) {
  return funcionarios[indice];
} 

export function atualizarFuncionario(indice, funcionario) {
  if (indice >= 0 && indice < funcionarios.length) {
    funcionarios[indice] = funcionario;
    return true;
  }
    return false;
}

export function excluirFuncionario(indice) {
  if (indice >= 0 && indice < funcionarios.length) {
    funcionarios.splice(indice, 1);
    return true;
  }
  return false;
}