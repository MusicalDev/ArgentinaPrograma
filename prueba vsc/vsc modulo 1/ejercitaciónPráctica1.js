// // Ejercicio 1: Mostrar números en consola
// // Solicitar al usuario un número y mostrar en la consola todos los números desde 1 hasta el número ingresado.
// // Tip: puedes obtener inputs del usuario con el método prompt.

// let numero = prompt("Ingerse un número");
// for (let i = 1; i <= numero; i++) {
//   console.log(i);
// }

// // Ejercicio 2: FizzBuzz
// // Solicitar al usuario un número y mostrar en la consola los números del 1 al número ingresado, pero:
// // • Si el número es divisible por 3, imprimir "Fizz" en lugar del número.
// // • Si el número es divisible por 5, imprimir "Buzz" en lugar del número.
// // • Si el número es divisible tanto por 3 como por 5, imprimir "FizzBuzz" en lugar del número
// // • Si no es divisible por 3 ni por 5, mostrar el número.
// // Tip: el operador % nos puede ayudar a determinar si un número es divisible por otro.


// // resuelto con if //////////////////////////////////////////////////////////////////////////////////////////////////

// let numero = prompt("Ingerse un número");

// if (numero % 3 == 0 && numero % 5 == 0) {
//   console.log("FizzBuzz");
// } else if (numero % 3 == 0) {
//   console.log("Fizz");
// }
//   else if (numero % 5 == 0) {
//   console.log("Buzz");
// }
//   else {
//   for (let i = 1; i <= numero; i++) {
//     console.log(i);
//   }
// }

// // resuelto con switch ///////////////////////////////////////////////////////////////////////////////////////////////

// let numero = prompt("Ingerse un número");

// switch (numero) {
//   case (numero % 3 == 0 && numero % 5 == 0):
//     console.log("FizzBuzz");
//     break;
//   case (numero % 3 == 0):
//     console.log("Fizz");
//     break;
//   case (numero % 5 == 0):
//     console.log("Buzz");
//     break;
//   default: for (let i = 1; i <= numero; i++) {
//     console.log(i);
//   }
// }
// // Ejercicio 3: pirámide///////////////////////////////////////////////////////////////////////////////////////////
// // Imprimir una pirámide simple en la consola.El programa debe solicitar al usuario el número de filas de la pirámide y luego mostrarla en la consola utilizando asteriscos.Cada fila debe tener un asterisco más que la anterior.Por ejemplo, si el usuario ingresa 5, la pirámide se verá así:
// // Tip: recordar que podemos anidar bucles


// let numeroDeFilas = prompt("Ingerse el número de filas de su pirámide");


// for (let i = 0; i < numeroDeFilas; i++) {
//   asterisco = "";
//   for (let j = 0; j <= i; j++) {
//     asterisco += "* ";
//   }
//   console.log(asterisco);
// }

// // Opcional del ejercicio de pirámide///////////////////////////////////////////////////////////////////////////////

// let alturaPiramide = prompt("Ingerse el número de la altura de su pirámide");

// let espaciosEnBlanco = alturaPiramide - 1;

// let asteriscos = 1;

// for (let i = 0; i < alturaPiramide; i++) {
//   let fila = "";

//   // Agregar espacios en blanco antes de los asteriscos

//   for (let j = 0; j < espaciosEnBlanco; j++) {
//     fila += " ";
//   }

//   // Agregar asteriscos 

//   for (let k = 0; k < asteriscos; k++) {
//     fila += "*";
//   }

//   console.log(fila);

//   espaciosEnBlanco--;
//   asteriscos += 2;
// }


// // Ejercicio 4: Acceder a datos anidados///////////////////////////////////////////////////////////////////////////////
// // Simularemos una llamada a una API que nos proporciona información de productos.
// //   Tip: puedes compiar el objeto en tu editor de texto.

// let response = {
//   status: "success",
//   data: {
//     productos: [
//       {
//         id: 1,
//         nombre: "remera",
//         precio: 20,
//         colores: ["rojo", "azul", "verde"],
//         tallas: {
//           disponible: ["S", "M", "L"],
//           agotado: ["XL"],
//         },
//         detalles: {
//           material: "algodón",
//           peso: "200g",
//         },
//       },
//       {
//         id: 2,
//         nombre: "campera",
//         precio: 35,
//         colores: ["negro", "gris"],
//         tallas: {
//           disponible: ["M", "L"],
//           agotado: ["S", "XL"],
//         },
//         detalles: {
//           material: "denim",
//           peso: "400g",
//         },
//       },
//     ],
//     total: 2,
//   },
// };
// console.log(response.data.productos[1].detalles.material);

// console.log(response.data.productos[0].tallas.disponible);

// let nombreDeProducto = prompt("Ingerse el producto deseado, (en minúsculas)");

// if (nombreDeProducto === "remera") {
//   console.log(response.data.productos[0].precio);
// } else if (nombreDeProducto === "campera") {
//   console.log(response.data.productos[1].precio);
// }


//   // Ejercicio 5: función para verificar si un número es primo//////////////////////////////////////////////////////////////////////////////////
//   // El objetivo de este ejercicio es crear una función que reciba como argumento un número entero positivo y determine si es primo o no.La función debe retornar un valor booleano(true o false) dependiendo si el número es primo.
//   // Un número primo es aquel tiene únicamente dos divisores positivos distintos: él mismo y el 1.

// let numero = prompt("Ingerse un número entero positivo");

// let x = 1;

// let cont = 0;

// while (x <= numero) {
//   if (numero % x === 0) {
//     cont++;
//   }
//   x++;
// }
// if (cont === 2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//   // Ejercicio 6: Función para encontrar la palabra más larga en un array


// let palabras = ["manzana", "casa", "lechuza", "perro", "telescopio", "argentina", "caleidoscopio"]

// let cont = 0;
// let palabraMasLarga = "";

// function encontrarPalabraMasLarga(palabras) {

//   for (let i = 0; i < palabras.length; i++) {
//     if (cont == 0) {
//       palabraMasLarga = palabras[0];
//       cont++;
//     } else if (palabras[i].length > palabraMasLarga.length) {
//       palabraMasLarga = palabras[i];
//     }
//   }
//   return palabraMasLarga;
// }
// console.log(encontrarPalabraMasLarga(palabras));


