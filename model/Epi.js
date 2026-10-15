export class Epi {
    codigo
    nome
    Ca
    #qntdEstoque
    constructor(codigo, nome, Ca, qntdEstoque) {
       this.codigo = codigo;
       this.nome = nome;
       this.Ca = Ca;
       this.#qntdEstoque =  qntdEstoque;
    }
    get qntdEstoque(){
        return this.#qntdEstoque;
    }
     adicionarQuantidade(valor) {
    if (valor > 0) {
      this.#quantidade += valor;
      return true;
    }
    return false;
  }
  
    retirarQuantidade(valor) {
    if (valor > 0 && valor <= this.#quantidade) {
      this.#quantidade -= valor;
      return true;
    }
    return false;
  }
}