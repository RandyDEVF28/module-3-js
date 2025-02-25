// 📚 Lista de libros con sus datos iniciales
let libros = [
    { titulo: "Momo", autor: "Michael Ende", anio: 1973, paginas: 304, estado: "Disponible", capitulos: ["Introducción", "El Maestro Hora"] },
    { titulo: "Los Cuatro Acuerdos", autor: "Don Miguel Ruiz", anio: 1997, paginas: 160, estado: "Disponible", capitulos: ["El Primer Acuerdo", "El Segundo Acuerdo"] },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", anio: 1953, paginas: 249, estado: "Disponible", capitulos: ["El Fénix", "El Hombre Libro"] },
    { titulo: "1984", autor: "George Orwell", anio: 1949, paginas: 328, estado: "Disponible", capitulos: ["El Ministerio de la Verdad", "La Habitación 101"] },
    { titulo: "Las Batallas en el Desierto", autor: "José Emilio Pacheco", anio: 1981, paginas: 68, estado: "Disponible", capitulos: ["Carlos", "Mariana"] }
];

// 📌 Cargar libros desde localStorage si existen
if (localStorage.getItem("libros")) {
    libros = JSON.parse(localStorage.getItem("libros"));
}

// 📌 Poblar el selector con los libros
let select = document.getElementById("libroSeleccionado");
libros.forEach((libro, index) => {
    let option = document.createElement("option");
    option.value = index;
    option.textContent = libro.titulo;
    select.appendChild(option);
});

// 📌 Función para mostrar la información del libro seleccionado
function mostrarLibro() {
    document.getElementById("infoLibro").innerText = "";
    actualizarListaCapitulos();
}

// 📌 Función para mostrar la descripción del libro
function describirLibro() {
    let libro = libros[select.value];
    document.getElementById("infoLibro").innerText = 
        `El libro titulado "${libro.titulo}" del autor ${libro.autor}, publicado en el año ${libro.anio}, tiene ${libro.paginas} páginas. Su estado es ${libro.estado}.`;
}

// 📌 Función para cambiar el estado del libro
function cambiarEstado() {
    let libro = libros[select.value];
    libro.estado = libro.estado === "Disponible" ? "En préstamo" : "Disponible";
    guardarLibros();
    describirLibro();
}

// 📌 Función para actualizar la lista de capítulos
function actualizarListaCapitulos() {
    let libro = libros[select.value];
    let lista = document.getElementById("capitulos");
    lista.innerHTML = "";

    libro.capitulos.forEach((capitulo, index) => {
        let li = document.createElement("li");
        li.className = "capitulo-item";
        li.innerHTML = `${index + 1}. ${capitulo}`;
        lista.appendChild(li);
    });
}

// 📌 Función para agregar un nuevo capítulo
function agregarCapitulo() {
    let libro = libros[select.value];
    let nuevoCapitulo = document.getElementById("nuevoCapitulo").value.trim();

    if (nuevoCapitulo !== "") {
        libro.capitulos.push(nuevoCapitulo);
        document.getElementById("nuevoCapitulo").value = "";
        guardarLibros();
        actualizarListaCapitulos();
    } else {
        alert("El nombre del capítulo no puede estar vacío.");
    }
}

// 📌 Función para borrar un capítulo
function borrarCapitulo() {
    let libro = libros[select.value];
    let capituloEliminar = document.getElementById("capituloEliminar").value.trim();

    let indice = libro.capitulos.indexOf(capituloEliminar);
    if (indice !== -1) {
        libro.capitulos.splice(indice, 1);
        document.getElementById("capituloEliminar").value = "";
        guardarLibros();
        actualizarListaCapitulos();
    } else {
        alert(`No se encontró el capítulo "${capituloEliminar}".`);
    }
}

// 📌 Función para guardar los libros en localStorage
function guardarLibros() {
    localStorage.setItem("libros", JSON.stringify(libros));
}

// 📌 Mostrar la información y capítulos del primer libro por defecto
mostrarLibro();
