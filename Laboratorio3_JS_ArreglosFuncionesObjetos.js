/* ===========================================================
   Laboratorio: Arreglos, Funciones y Objetos
   Completa cada TODO. Prueba cada función con console.log
   antes de avanzar a la siguiente parte.
   =========================================================== */

/* ---------------- PARTE 1: ARREGLOS ---------------- */

// Parte 1, 1.1.a

console.log("-----Ejercicio 1.1.a-----\n");

const inventario = ["teclado", "mouse", "monitor", "audífonos"];
let elementos = inventario.length;
console.log("El último elemento del inventario es: " + inventario[elementos-1] + "\n");

//Parte 1, 1.1.b

console.log("-----Ejercicio 1.1.b-----\n");

function agregarItems(arr, alInicio, alFinal) {
    if (alInicio) {
        arr.unshift(alInicio);
    }
    if (alFinal) {
        arr.push(alFinal);
    }
    return arr;
}

const nuevoInventario = agregarItems(inventario, "cable HDMI", "webcam");
let elementosNuevoInventario = nuevoInventario.length;

console.log("Inventario actualizado: \n");
for (let i = 0; i <= elementosNuevoInventario-1; i++) {
    if (i === elementosNuevoInventario-1) {
        console.log("- Elemento " + (i+1) + ": " + nuevoInventario[i] + "\n");
    }
    else {
        console.log("- Elemento " + (i+1) + ": " + nuevoInventario[i]);
    }
}

// Parte 1, 1.2.a

console.log("-----Ejercicio 1.2.a-----\n");

const temperaturas = [18, 22, 25, 30, 15, 29, 27];

function aFahrenheit(arr) {
    return arr.map(temp => (temp * 9/5) + 32);
}

const temperaturasFahrenheit = aFahrenheit(temperaturas);
console.log("Temperaturas en Fahrenheit:");
for (let i = 0; i < temperaturasFahrenheit.length; i++) {
    if (i === temperaturasFahrenheit.length-1) {
        console.log("- Temperatura " + (i+1) + ": " + temperaturasFahrenheit[i] + "\n");
    }
    else {
        console.log("- Temperatura " + (i+1) + ": " + temperaturasFahrenheit[i]);
    }   
}

// Parte 1, 1.2.b

console.log("-----Ejercicio 1.2.b-----\n");

function diasCalurosos(arr, umbral) {
    return arr
    .map((temp, index) => ({ dia: index + 1, temp }))
    .filter(({temp}) => temp > umbral);
}

const diasCalurososArr = diasCalurosos(temperaturas, 25);
console.log("Días calurosos (temperatura > 25°C):");
for (let i = 0; i < diasCalurososArr.length; i++) {
    if (i === diasCalurososArr.length-1) {
        console.log("- Día " + diasCalurososArr[i].dia + ": " + diasCalurososArr[i].temp + "°C\n");
    }
    else {
        console.log("- Día " + diasCalurososArr[i].dia + ": " + diasCalurososArr[i].temp + "°C");
    }
}

// Parte 1, 1.2.c

console.log("-----Ejercicio 1.2.c-----\n");

function promedio(arr) {
    const suma = arr.reduce((acumulado, temp) => acumulado + temp, 0);
    return suma / arr.length;
}

const temperaturaPromedio = promedio(temperaturas);
console.log("El promedio de las temperaturas es: " + temperaturaPromedio + "°C\n");


// Parte 1, 1.2.d

console.log("-----Ejercicio 1.2.d-----\n");

function temperaturaMaxima(arr) {
    return Math.max(...arr);
}

const temperaturaMax = temperaturaMaxima(temperaturas);
console.log("La temperatura máxima de la semana es: " + temperaturaMax + "°C\n");

// Parte 1, 1.3.a

console.log("-----Ejercicio 1.3.a-----\n");

function buscarPrimerMayorA(arr, valor) {
    return arr.find(temp => temp > valor);
}

const primerMayor = buscarPrimerMayorA(temperaturas, 24);
console.log("El primer valor mayor a 24°C es: " + primerMayor + "°C\n");

// Parte 1, 1.3.b

console.log("-----Ejercicio 1.3.b-----\n");

function ordenarDescendente(arr) {
    const copia = [...arr];
    return copia.sort((a, b) => b - a);
}

const temperaturasDescendentes = ordenarDescendente(temperaturas);
console.log("Temperaturas ordenadas de mayor a menor:");
for (let i = 0; i < temperaturasDescendentes.length; i++) {
    if (i === temperaturasDescendentes.length-1) {
        console.log("- Posición " + (i+1) + ": " + temperaturasDescendentes[i] + "°C\n");
    }
    else {
        console.log("- Posición " + (i+1) + ": " + temperaturasDescendentes[i] + "°C");
    }
}


/* ---------------- PARTE 2: FUNCIONES ---------------- */

// Parte 2, 2.1

console.log("-----Ejercicio 2.1-----\n");

function procesarLista(arr, accion) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(accion(arr[i]));
    }
    return resultado;
}

// Duplicar cada número de un arreglo
const numeros = [1, 2, 3, 4];
const numerosDuplicados = procesarLista(numeros, (num) => num * 2);
console.log("Números duplicados:");
for (let i = 0; i < numerosDuplicados.length; i++) {
    if (i === numerosDuplicados.length-1) {
        console.log("- " + numeros[i] + " x 2 = " + numerosDuplicados[i] + "\n");
    }
    else {
        console.log("- " + numeros[i] + " x 2 = " + numerosDuplicados[i]);
    }
}

// Convertir cada palabra de un arreglo de strings a mayúsculas
const palabras = ["hola", "mundo", "javascript"];
const palabrasMayusculas = procesarLista(palabras, (palabra) => palabra.toUpperCase());
console.log("Palabras en mayúsculas:");
for (let i = 0; i < palabrasMayusculas.length; i++) {
    if (i === palabrasMayusculas.length-1) {
        console.log("- " + palabras[i] + " -> " + palabrasMayusculas[i] + "\n");
    }
    else {
        console.log("- " + palabras[i] + " -> " + palabrasMayusculas[i]);
    }
}

// Reflexión 2.1: procesarLista se parece a .map porque ambos recorren el arreglo y
// devuelven un arreglo nuevo aplicando una acción a cada elemento. El lenguaje ya trae
// .map incorporado para no escribir ese recorrido a mano cada vez.

// Parte 2, 2.2

console.log("-----Ejercicio 2.2-----\n");

function crearMultiplicador(factor) {
    return (numero) => numero * factor;
}

const porTres = crearMultiplicador(3);
console.log("porTres(10) = " + porTres(10) + "\n");

// ¿Qué es un closure? Es cuando una función "recuerda" las variables del lugar donde
// fue creada, aunque la función externa ya haya terminado de ejecutarse. Aquí la arrow
// function recuerda el valor de "factor" (3), por eso porTres(10) devuelve 30.

// Parte 2, 2.3

console.log("-----Ejercicio 2.3-----\n");

function dividirSeguro(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero.");
    }
    return a / b;
}

// Caso exitoso
try {
    console.log("Caso exitoso: 10 / 2 = " + dividirSeguro(10, 2));
} catch (error) {
    console.log("Ocurrió un error: " + error.message);
}

// Caso de error
try {
    console.log("Caso de error: 10 / 0 = " + dividirSeguro(10, 0));
} catch (error) {
    console.log("Error capturado: " + error.message);
}

// Revisión 2: mostramos un caso exitoso y un caso de error capturado con try/catch.
console.log("");


/* ---------------- PARTE 3: OBJETOS ---------------- */

// Parte 3, 3.1

console.log("-----Ejercicio 3.1-----\n");

const producto = {
    nombre: "Teclado mecánico",
    precio: 45,
    stock: 12,
    aplicarDescuento(porcentaje) {
        const descuento = this.precio * (porcentaje / 100);
        return this.precio - descuento;
    },
};

console.log("Producto: " + producto.nombre);
console.log("Precio original: $" + producto.precio);
console.log("Precio con 10% de descuento: $" + producto.aplicarDescuento(10));
console.log("Precio original después del descuento: $" + producto.precio + "\n");

// Parte 3, 3.2

console.log("-----Ejercicio 3.2-----\n");

const catalogo = [
    { nombre: "Teclado", precio: 45, categoria: "periféricos", stock: 12 },
    { nombre: "Monitor", precio: 180, categoria: "pantallas", stock: 5 },
    { nombre: "Mouse", precio: 20, categoria: "periféricos", stock: 30 },
    { nombre: "Silla", precio: 150, categoria: "mobiliario", stock: 0 },
];

function productosDisponibles(catalogo) {
    return catalogo.filter((prod) => prod.stock > 0);
}

function nombresPorCategoria(catalogo, categoria) {
    // Desestructuración en el callback: sacamos la categoría y el nombre directamente.
    return catalogo
        .filter(({ categoria: cat }) => cat === categoria)
        .map(({ nombre }) => nombre);
}

function valorTotalInventario(catalogo) {
    return catalogo.reduce((total, prod) => total + prod.precio * prod.stock, 0);
}

function productoMasCaro(catalogo) {
    let masCaro = catalogo[0];
    for (let i = 1; i < catalogo.length; i++) {
        if (catalogo[i].precio > masCaro.precio) {
            masCaro = catalogo[i];
        }
    }
    return masCaro;
}

const productosDisponiblesArr = productosDisponibles(catalogo);
console.log("Productos disponibles (stock > 0):");
for (let i = 0; i < productosDisponiblesArr.length; i++) {
    if (i === productosDisponiblesArr.length-1) {
        console.log("- " + productosDisponiblesArr[i].nombre + " (stock: " + productosDisponiblesArr[i].stock + ")\n");
    }
    else {
        console.log("- " + productosDisponiblesArr[i].nombre + " (stock: " + productosDisponiblesArr[i].stock + ")");
    }
}

const nombresPerifericos = nombresPorCategoria(catalogo, "periféricos");
console.log("Nombres de la categoría 'periféricos':");
for (let i = 0; i < nombresPerifericos.length; i++) {
    if (i === nombresPerifericos.length-1) {
        console.log("- " + nombresPerifericos[i] + "\n");
    }
    else {
        console.log("- " + nombresPerifericos[i]);
    }
}

console.log("Valor total del inventario: $" + valorTotalInventario(catalogo));
console.log("Producto más caro: " + productoMasCaro(catalogo).nombre + " ($" + productoMasCaro(catalogo).precio + ")\n");

// Parte 3, 3.3
// La desestructuración hace el código más legible porque extrae directamente la
// propiedad que se necesita (por ejemplo "categoria" o "nombre") en el parámetro del
// callback, sin tener que escribir "producto.categoria" en el cuerpo de la función.

/* ---------------- PARTE 4: RETO INTEGRADOR ---------------- */

console.log("-----Parte 4: Reto integrador-----\n");

const ventas = [
    { producto: "Teclado", cantidad: 3, precioUnitario: 45 },
    { producto: "Monitor", cantidad: 1, precioUnitario: 180 },
    { producto: "Mouse", cantidad: 5, precioUnitario: 20 },
    { producto: "Teclado", cantidad: 2, precioUnitario: 45 },
    { producto: "Silla", cantidad: 1, precioUnitario: 150 },
];

function generarReporte(ventas) {
    // Pista 1: agrupar las ventas por producto con reduce y un objeto acumulador.
    const agrupado = ventas.reduce((acumulador, venta) => {
        const { producto, cantidad, precioUnitario } = venta;

        if (!acumulador[producto]) {
            acumulador[producto] = { producto: producto, cantidadTotal: 0, ingresoTotal: 0 };
        }

        acumulador[producto].cantidadTotal += cantidad;
        acumulador[producto].ingresoTotal += cantidad * precioUnitario;
        return acumulador;
    }, {});

    // Pista 2: convertir el objeto agrupado en un arreglo con Object.values.
    const resumenPorProducto = Object.values(agrupado);

    // Total vendido: suma de cantidad * precioUnitario de todas las ventas.
    const totalVendido = ventas.reduce(
        (total, venta) => total + venta.cantidad * venta.precioUnitario,
        0
    );

    // Número de transacciones.
    const numeroTransacciones = ventas.length;

    // Pista 3: ordenar una copia del resumen para encontrar el producto con más ventas.
    const resumenOrdenado = [...resumenPorProducto];
    resumenOrdenado.sort((a, b) => b.cantidadTotal - a.cantidadTotal);
    const productoTopVentas = resumenOrdenado[0].producto;

    return {
        totalVendido: totalVendido,
        numeroTransacciones: numeroTransacciones,
        productoTopVentas: productoTopVentas,
        resumenPorProducto: resumenPorProducto,
    };
}

// Descomenta para probar cuando termines:
console.log(JSON.stringify(generarReporte(ventas), null, 2));
console.log("");

/* ===========================================================
   PREGUNTAS DE CIERRE
   =========================================================== */

// 1. ¿Qué diferencia hay entre map y forEach? ¿Cuándo usarías cada uno?
//    map recorre el arreglo y devuelve un NUEVO arreglo con los resultados, por lo que
//    sirve para transformar datos. forEach solo recorre el arreglo para ejecutar una
//    acción (por ejemplo imprimir), pero no devuelve un arreglo nuevo. Usaría map cuando
//    quiera transformar los elementos y forEach cuando solo quiera recorrerlos.

// 2. ¿Por qué reduce se considera el método "más general" entre los métodos vistos?
//    Porque con reduce se puede obtener casi cualquier resultado a partir de un arreglo
//    (una suma, un promedio, un máximo, agrupar datos, construir un objeto, etc.).
//    De hecho, map y filter podrían implementarse usando reduce.

// 3. Da un ejemplo real (fuera de este laboratorio) donde modelarías datos como un
//    arreglo de objetos.
//    Una lista de estudiantes de un colegio, donde cada estudiante es un objeto con
//    nombre, edad, nota y correo. Así se puede recorrer la lista para calcular promedios
//    o buscar a los que aprobaron.

// 4. ¿Qué ventaja tiene evitar mutar arreglos y objetos directamente?
//    Evita efectos secundarios y errores difíciles de encontrar, porque el dato original
//    se mantiene igual aunque se use varias veces o en varias funciones. Así el código es
//    más fácil de entender y de probar.
