var kilometri = prompt ("Quanti km vuoi percorrere?")
var età = prompt ("Quanti anni hai?")
var prezzoxkm = 0.21

if (età < 18) {
  prezzoTot = ((prezzoxkm * 0.8) * kilometri)
} if else (età > di 65){
  prezzoTot = ((prezzoxkm - 0.6) * kilometri)
} else {
  prezzoTot = (prezzoxkm * kilometri)
}

console.log prezzoTot
