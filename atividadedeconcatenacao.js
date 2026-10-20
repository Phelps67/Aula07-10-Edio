// const resultado = 5 + 3 ;
// console.log(resultado);
// console.log(typeof resultado);      //Se vc trocar o "typeof por number a conta da certo"
// alert(resultado)

// ------------------------------------------------

// console.log(Boolean(0));            //false
// console.log(Boolean(""));           //false
// console.log(Boolean(100));          //true
// console.log(Boolean("Gato"));       //true 

// -------------------------------------------------

// let saldo = 100
// saldo += 50
// saldo -= 20
// saldo *= 2 
// saldo /= 4
// saldo += 2
// console.log("Saldo Final:, saldo")
// alert(saldo)

// -------------------------------------------------

// const idade = 110
// const mensagem = idade >18 ? 'Pode' : 'Nao'
// alert(mensagem)

// -------------------------------------------------

// const color = 'vermelho';
// switch (color) {
//     case 'vermelho': alert('Pare')
//     break;
//     case 'amarelo': alert('Atenção');
//     break;
//     case 'verde': alert('Siga');
//     break;
// }

// -------------------------------------------------

// const frutas = ['uva', 'pera', 'maçã'];
// for (const fruta of frutas) {
//     console.log("Fruta de vez:", fruta);
// }

// -------------------------------------------------

// let j = 0;
// while (j < 3) {
//     console.log("Valor de j:", j);
//     j++;
// }

// -------------------------------------------------

// let contador = 10;
// while (contador > 0) {
//     console.log("Contagem:", contador);
//     contador--;
// }
// console.log("Decolar!");

// -------------------------------------------------

// const nums = [1, 2, 3, 4];
// const triplo = nums.map(n => n * 3);
// console.log(triplo);

// const idades = [12, 17, 18, 22, 15, 30];
// const maiores = idades.filter(i => i >= 18);
// console.log(maiores);

// -------------------------------------------------

const comidas = ["banana", "maçã", "uva", "limão", "abobora", "beterraba", "rabanete"];
const comidafruta = ["banana", "maçã", "uva", "limão"];
const frutas = comidas.map();
const legumes = comidas.map();
console.log("frutas", frutas);
console.log("legumes", legumes);

// const salarios = [1200, 50, 100, 1350, 300, 1450];
// const salariosAlto = salarios.filter(salario => salario >= 1000);
// const salariosBaixo = salarios.filter(salario => salario < 999);
// console.log("Salarios Altos", salariosAlto)
// console.log("Salarios Baixos", salariosBaixo)