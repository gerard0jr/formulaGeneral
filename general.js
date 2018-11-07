function General(a,b,c){
this.a = a
this.b = b
this.c = c
this.multr = 0
this.restaRaiz = 0
this.raiz = 0
this.suma = 0
this.resta = 0
this.divSuma = 0
this.divResta = 0


this.mult1 = function (){
  this.multr = 4 * this.a * this.c
}

this.resRaiz = function (){
  this.restaRaiz = (this.b * this.b) - this.multr
}

this.resuelveRaiz = function(){
  if(this.restaRaiz >= 0){
    this.raiz = Math.sqrt(this.restaRaiz)
  }else
  return "La raíz es negativa :( no quiero trabajar con complejos"
} 

this.laSuma = function(){
  this.suma = - this.b + this.raiz
}

this.laResta = function(){
  this.resta = - this.b - this.raiz
}

this.resSuma = function(){
  this.divSuma = this.suma / (2 * this.a)
}

this.resResta = function(){
  this.divResta = this.resta / (2 * this.a)
}

}


var solucion = new General(3,-11,-4)
solucion.mult1()
solucion.resRaiz()
solucion.resuelveRaiz()
solucion.laSuma()
solucion.laResta()
solucion.resSuma()
solucion.resResta()

console.log("x1= ",solucion.divSuma)
console.log("x2= ",solucion.divResta)
