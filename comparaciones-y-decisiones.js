// Función para obtener una calificación aleatoria entre 0 y 100
function obtenerNotaAleatoria() {
    return Math.floor(Math.random() * 101); // Números entre 0 y 100
}

// Función para evaluar la calificación y devolver el resultado
function evaluarNota(nota) {
    if (nota >= 90) {
        return "Excelente";
    } else if (nota >= 75) {
        return "Bien";
    } else if (nota >= 60) {
        return "Suficiente";
    } else {
        return "No aprueba";
    }
}

// Generar lista de 40 alumnos con notas aleatorias
let alumnos = [];

for (let i = 1; i <= 40; i++) {
    let nota = obtenerNotaAleatoria();
    alumnos.push({ id: i, nota: nota, resultado: evaluarNota(nota) });
}

// Mostrar resultados en consola
console.log("Resultados de los alumnos:");
alumnos.forEach(alumno => {
    console.log(`Alumno ${alumno.id}: Nota ${alumno.nota} - ${alumno.resultado}`);
});
