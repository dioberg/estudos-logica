
// const alunos = [
//     {
//         nome : 'joão',
//         nota : 5,
//         turma : '1a'
//     },
//     {
//         nome : 'gabi',
//         nota : 9,
//         turma : '1a'
//     },
//     {
//         nome: 'paulo',
//         nota : 6,
//         turma : '1c'
//     },
//     {
//         nome: 'ana',
//         nota : 3,
//         turma : '1c'
//     }
// ];


// function alunosAprovados(arr, media) {
//     let aprovados = [];

//     for(let i = 0; i < arr.length; i++) {

//         const {nota, nome} = arr[i];

//         if(nota >= media) {
//             aprovados.push(nome)
//         }
//     }

//     return aprovados
// }

// console.log(alunosAprovados(alunos, 7));





function calcularIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa = {
    nome :'maria',
    idade : 30
}

const pessoa2 = {
    nome : 'diobergue',
    idade : 30
}

const animal = {
    nome : 'carla',
    idade : 1,
    raca : "pit"

}

//console.log(calcularIdade.call(pessoa, 2))

console.log(calcularIdade.apply(pessoa, [2]))