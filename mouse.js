area_de_dibujo.addEventListener("mouseup", parar_dibujo);
area_de_dibujo.addEventListener("mousedown", iniciar_dibujo);
area_de_dibujo.addEventListener("mousemove", mover_dibujo);
var color = document.getElementById("colorcito");
var ancho = document.getElementById("ancho_li");
var cuadrito = document.getElementById("area_de_dibujo");
var lienzo = cuadrito.getContext("2d");
var estado = 0;
var y;
var x;

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function iniciar_dibujo(evento)
{
    estado = 1;
    x = evento.x;
    y = evento.y;
    x_f = evento.layerX;
    y_f = evento.layerY;
    dibujarLinea(color, x - 7, y - 7, x_f, y_f, lienzo);
    console.log(evento);
}

function mover_dibujo(evento)
{
    if (estado == 1)
    {
        dibujarLinea(color, evento.x - 7, evento.y - 7, evento.layerX, evento.layerY, lienzo);
    }

}

function parar_dibujo()
{
    if (estado == 1)
    {
        estado = 0;
    }

}

dibujarLinea("red", 0, 0, 300, 0, lienzo);
dibujarLinea("red", 300, 0, 300, 300, lienzo);
dibujarLinea("red", 300, 300, 0, 300, lienzo);
dibujarLinea("red", 0, 300, 0, 0, lienzo);
dibujarLinea("red", x, y, x, y, lienzo);