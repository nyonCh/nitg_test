function dibujarlinea(color,x_inicial,y_inicial,x_final,y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_final);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}


var d;
var lienzo;
d = document.getElementById("dibujito");
lienzo = d.getContext("2d");
console.log(d);
console.log(lienzo);
dibujarlinea("red",100,100,200,200);
dibujarlinea("blue",20,10,100,120);
