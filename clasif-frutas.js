// Arreglo con diferentes frutas
let frutas = [
    "Limón", "Naranja", "Piña", "Fresa",  // Ácidas
    "Manzana", "Mango", "Ciruela",        // Semiácidas
    "Plátano", "Uva", "Higo", "Sandía",   // Dulces
    "Limón", "Manzana", "Piña", "Mango", "Higo", "Uva", "Naranja"
];

// Objeto para contar la cantidad de cada tipo de fruta
let conteoFrutas = {
    acidas: 0,
    semiacidas: 0,
    dulces: 0
};

// Clasificación de frutas según su acidez
let clasificacion = {
    acidas: ["Limón", "Naranja", "Piña", "Fresa"],
    semiacidas: ["Manzana", "Mango", "Ciruela"],
    dulces: ["Plátano", "Uva", "Higo", "Sandía"]
};

// Primera implementación con FOR
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    if (clasificacion.acidas.includes(fruta)) {
        conteoFrutas.acidas++;
    } else if (clasificacion.semiacidas.includes(fruta)) {
        conteoFrutas.semiacidas++;
    } else if (clasificacion.dulces.includes(fruta)) {
        conteoFrutas.dulces++;
    }
}

// Imprimir resultados con FOR
console.log("=== Conteo con FOR ===");
console.log(`Ácidas: ${conteoFrutas.acidas}`);
console.log(`Semiácidas: ${conteoFrutas.semiacidas}`);
console.log(`Dulces: ${conteoFrutas.dulces}`);

// Reiniciar conteo
conteoFrutas = { acidas: 0, semiacidas: 0, dulces: 0 };

// Segunda implementación con WHILE
let i = 0;
while (i < frutas.length) {
    let fruta = frutas[i];

    if (clasificacion.acidas.includes(fruta)) {
        conteoFrutas.acidas++;
    } else if (clasificacion.semiacidas.includes(fruta)) {
        conteoFrutas.semiacidas++;
    } else if (clasificacion.dulces.includes(fruta)) {
        conteoFrutas.dulces++;
    }
    i++;
}

// Imprimir resultados con WHILE
console.log("\n=== Conteo con WHILE ===");
console.log(`Ácidas: ${conteoFrutas.acidas}`);
console.log(`Semiácidas: ${conteoFrutas.semiacidas}`);
console.log(`Dulces: ${conteoFrutas.dulces}`);
