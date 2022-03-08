var carlist = require('./car-list.json');

function totalVeiculo(list) {
    var _list = list.map(e => {
        return { marca: e.brand, total: e.models.length }
    });
    return _list;
}

function maisModelo(list) {
    var _mais = list.reduce(
        (acc, value) => acc = acc.total > value.total
            ? acc
            : value
    );
    return _mais;
}

function menosModelo(list) {
    var _menos = list.reduce(
        (acc, value) => acc = acc.total < value.total
            ? acc
            : value,
    );
    return _menos;
}

function ordenaMaisDecrescente(list, itens) {
    list.sort(
        function (a, b) {
            if (a.total > b.total)
                return 1;
            if (a.total < b.total)
                return -1;
            return 0;
        }
    )
    return list.reverse().slice(0, itens);
}

var modelos = totalVeiculo(carlist);
var menos = menosModelo(modelos);
var mais = maisModelo(modelos);
var listaMais = ordenaMaisDecrescente(modelos, 5);
console.log(`A marca ${mais.marca} tem o total de ${mais.total} modelos.`)
console.log(`A marca ${menos.marca} tem o total de ${menos.total} modelos.`);
console.log('As Top mais:');
listaMais.forEach(element => {
    console.log(`Marca ${element.marca} com ${element.total} modelos.`);
});