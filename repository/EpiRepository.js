const epis = [];

export function cadastrarEpi(epi) {
  epis.push(epi);
}

export function listarEpis() {
  return epis;
}

export function buscarEpiPorIndice(indice) {
  return epis[indice];
}

export function atualizarEpi(indice, epi) {
  if (indice >= 0 && indice < epis.length) {
    epis[indice] = epi;
    return true;
  }
  return false;
}

export function excluirEpi(indice) {
  if (indice >= 0 && indice < epis.length) {
    epis.splice(indice, 1);
    return true;
  }
  return false;
}