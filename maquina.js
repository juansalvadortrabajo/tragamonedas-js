//array de entrada
const fichas = ["🍒","🍎","🍇"];

//seleccionar elementos del DOM
const boton = document.getElementById("jugar");
const casilla1 = document.querySelector(".casilla1");
const casilla2 = document.querySelector(".casilla2");
const casilla3 = document.querySelector(".casilla3");
const monedas = document.getElementById('monedas');
const saldo = document.querySelector('.saldo');
const mensaje = document.getElementById('mensaje');

//funcion para calcular un numero aleatorio en el tamaño del array
function calcularaleatorio (fichas) {
    return Math.floor(Math.random() * fichas.length);
}




//sustituir las fichas de las casillas por otras aleatorias
const sustituir =() => {
    casilla1.textContent = fichas [calcularaleatorio(fichas)];
    casilla2.textContent = fichas [calcularaleatorio(fichas)];
    casilla3.textContent = fichas [calcularaleatorio(fichas)];
}

//escuchar el evento click del boton y ejecutar la funcion sustituir
boton.addEventListener('click', (boton) => {
    sustituir();
    juego();
})



//logica del juego
const juego = () => {

    let saldoactual = Number(saldo.textContent);

    if (saldoactual < 1) {
        mensaje.textContent = ('!No tienes creditos!, recarga creditos para seguir jugando')
        return;
    }

    if (casilla1.textContent === casilla2.textContent && casilla2.textContent === casilla3.textContent) {
        mensaje.textContent = ('!Felicidades, has ganado!');
        saldoactual += 5;
        monedas.textContent = "🪙".repeat(saldoactual);
        saldo.textContent = saldoactual;
        console.log(saldoactual);
    } else {
        mensaje.textContent = ('!Sigue intentando!');
        saldoactual -= 1;
        monedas.textContent = "🪙".repeat(saldoactual);
        saldo.textContent = saldoactual;
        console.log(saldoactual);

    }


}


