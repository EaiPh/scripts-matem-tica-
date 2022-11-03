// a1 = primeiro termo da PA 
// an = Último termo da PA
// r = raio
// n = quantos termos a PA tem

let a1= 1
let an= 13
let r= 3
let n= 5
let s= 0

//QUANTOS TERMOS TEM A PA
function howManyTerm(a1, an, r) {
   let counter= 0
   for (let a= a1; a <= an; a+= r) {
      counter++
      console.log(`n= ${counter} termos`)
   }
}
howManyTerm(a1, an, r)

// SOMA DOS TERMOS DA PA
// n(a1 + 23) / 2 
function sumTermPA(n, a1, an) {
   return n * (a1 + an) / 2
}
console.log(sumTermPA(n, a1, an) + "Soma dos termos")

// ÚLTIMO TERMO DA PA
//an = a1 + (n-1) * r
function lastTerm(a1, n, r) {
   return r * (n-1) + a1
}
console.log(lastTerm(a1, n, r) + "Último termo da PA")