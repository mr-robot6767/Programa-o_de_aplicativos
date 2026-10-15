import { Epi } from './Epi.js';
import {
  cadastrarEpi,
  listarEpis,
  buscarEpiPorIndice,
  atualizarEpi,
  excluirEpi
} from './epiRepository.js';

export function controllerCadastrarEpi(codigo, nome, ca, quantidadeInicial) {
  const novoEpi = new Epi(codigo, nome, ca, quantidadeInicial);
  cadastrarEpi(novoEpi);
  console.log(` EPI "${nome}" cadastrado com sucesso!`);
}

export function controllerListarEpis() {
  const lista = listarEpis();
  
  if (lista.length === 0) {
    console.log(" Nenhum EPI cadastrado no estoque.");
    return;
  }

  console.log("\n---  LISTA DE EPIS EM ESTOQUE ---");
  for (let i = 0; i < lista.length; i++) {
    const epi = lista[i];
    console.log(`Indice: ${i} | Codigo: ${epi.codigo} | Nome: ${epi.nome} | CA: ${epi.ca} | Qtd: ${epi.quantidade}`);
  }
  console.log("-----------------------------------\n");
}

export function controllerBuscarEpi(indice) {
  const epi = buscarEpiPorIndice(indice);
  
  if (!epi) {
    console.log(` Erro: Não existe EPI no indice ${indice}.`);
    return;
  }

  console.log(` EPI Encontrado [Indice ${indice}]: Codigo: ${epi.codigo}, Nome: ${epi.nome}, CA: ${epi.ca}, Estoque: ${epi.quantidade}`);
}

export function controllerAtualizarEpi(indice, codigo, nome, ca, quantidadeInicial) {
  const epiExistente = buscarEpiPorIndice(indice);
  
  if (!epiExistente) {
    console.log(` Erro: Não existe EPI no indice ${indice} para ser atualizado.`);
    return;
  }

  const epiAtualizado = new Epi(codigo, nome, ca, quantidadeInicial);
  atualizarEpi(indice, epiAtualizado);
  console.log(` EPI do indice ${indice} atualizado com sucesso!`);
}

export function controllerExcluirEpi(indice) {
  const epiExistente = buscarEpiPorIndice(indice);
  
  if (!epiExistente) {
    console.log(` Erro: Não existe EPI no indice ${indice} para ser excluido.`);
    return;
  }

  excluirEpi(indice);
  console.log(` EPI do indice ${indice} removido com sucesso!`);
}

export function controllerAdicionarQuantidade(indice, valor) {
  const epi = buscarEpiPorIndice(indice);
  
  if (!epi) {
    console.log(` Erro: Não existe EPI no indice ${indice} para adicionar quantidade.`);
    return;
  }

  const sucesso = epi.adicionarQuantidade(valor);
  if (sucesso) {
    console.log(` Adicionadas ${valor} unidades ao EPI "${epi.nome}". Novo total: ${epi.quantidade}`);
  } else {
    console.log(` Falha ao adicionar: O valor informado (${valor}) deve ser maior que zero.`);
  }
}

export function controllerRetirarQuantidade(indice, valor) {
  const epi = buscarEpiPorIndice(indice);
  
  if (!epi) {
    console.log(` Erro: Não existe EPI no indice ${indice} para retirar quantidade.`);
    return;
  }

  const sucesso = epi.retirarQuantidade(valor);
  if (sucesso) {
    console.log(` Retiradas ${valor} unidades do EPI "${epi.nome}". Novo total: ${epi.quantidade}`);
  } else {
    console.log(` Falha ao retirar: Verifique se o valor (${valor}) e maior que zero e não supera o estoque atual (${epi.quantidade}).`);
  }
}