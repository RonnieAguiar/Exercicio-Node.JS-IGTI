var carlist = require('./car-list.json');

// Retorna as marcas e seus quantitativos de modelos
function totalVeiculo(list) {
    var _list = list.map(e => {
        return { marca: e.brand, total: e.models.length }
    });
    return _list;
}

// Realiza a ordenação pelo quantitavo de modelos
function ordenaQuantidade(list){
    var _ordenado = [...list];
    _ordenado.sort(
        function(a, b){
            if (a.total > b.total)
                return 1;
            if (a.total < b.total)
                return -1;
            return 0;
        }
    )
    return _ordenado;
}

// faz ordenação descrescente de uma lista
const ordenaQuantidadeDesc = list => [...list].reverse();

// seleciona certa quantidade da lista
const topVeiculos = (list, quantidade) => list.slice(0, quantidade);

// retorna todos que possuem o mesmo total de veiculos do primeiro elemento da lista
const filtro = (list) =>{
    var x = list[0].total;
    const _filtro = (el) => el.total == x;
    var _filtrado = list.filter(_filtro);
    return _filtrado;
}

var modelos = totalVeiculo(carlist);
var ordemAsc = ordenaQuantidade(modelos);
var ordemDesc = ordenaQuantidadeDesc(ordemAsc);
var os4Mais = topVeiculos(ordemDesc, 4);
var os4Menos = topVeiculos(ordemAsc, 4);
var topMais = filtro(ordemDesc);
var topMenos = filtro(ordemAsc);

console.log(os4Mais);
console.log(os4Menos);
console.log(topMais);
console.log(topMenos);