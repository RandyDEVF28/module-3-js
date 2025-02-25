// Arreglo para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro al registro
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`"${titulo}" ha sido agregado a tu lista de libros leídos.`);
}

// Función para mostrar los libros leídos hasta el momento
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has registrado ningún libro leído.");
    } else {
        console.log("\n=== Libros Leídos ===");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

// Ejemplo de uso
agregarLibro("El principito");
agregarLibro("1984");
agregarLibro("Farhenheit 451");
agregarLibro("Momo");
agregarLibro("Los Cuatro Acuerdos");

mostrarLibrosLeidos();
