function dibujarlinea(color,x_inicial,y_inicial,x_final,y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = 30;
  var l = 0;
  var texto = document.getElementById("texto_lineas");
  var boton = document.getElementById("html_boton");
/*
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
*/

}


var d;
var lienzo;
boton.addEventListener("click", dibujoPorClick);




d = document.getElementById("dibujito");
lienzo = d.getContext("2d");
console.log(d);
console.log(lienzo);

while(l < lineas)
{
 dibujarlinea("blue",0,l*10,(l+1)*10,300);
 console.log("dibujando " + l);
 l++;
}
l = 0;
while(l < lineas)
{
 dibujarlinea("blue",l*10,300,300,(300-10*(l+1)));
 console.log("dibujando 2" + l);
 l++;
}
dibujarlinea("blue",0,0,0,300);
dibujarlinea("blue",0,300,300,300);
dibujarlinea("blue",300,300,300,0);
dibujarlinea("blue",300,0,0,0);
