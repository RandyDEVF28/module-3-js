document.addEventListener("DOMContentLoaded", () => {
    cargarComentarios();
});

function agregarComentario() {
    let texto = document.getElementById("nuevo-comentario").value.trim();
    if (texto === "") return;
    
    let fecha = new Date().toLocaleString();
    let comentario = { texto, fecha, editado: false };
    
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentarios.push(comentario);
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
    
    document.getElementById("nuevo-comentario").value = "";
    cargarComentarios();
}

function cargarComentarios() {
    let contenedor = document.getElementById("comentarios-container");
    contenedor.innerHTML = "";
    
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentarios.forEach((comentario, index) => {
        let div = document.createElement("div");
        div.classList.add("comentario");
        div.innerHTML = `
            <p>${comentario.texto}</p>
            <small>${comentario.fecha} ${comentario.editado ? "(Editado)" : ""}</small>
            <button onclick="editarComentario(${index})">Editar</button>
            <button onclick="borrarComentario(${index})">Borrar</button>
        `;
        contenedor.appendChild(div);
    });
}

function editarComentario(index) {
    let comentarios = JSON.parse(localStorage.getItem("comentarios"));
    let nuevoTexto = prompt("Edita tu comentario:", comentarios[index].texto);
    if (nuevoTexto === null || nuevoTexto.trim() === "") return;
    
    comentarios[index].texto = nuevoTexto;
    comentarios[index].editado = true;
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
    cargarComentarios();
}

function borrarComentario(index) {
    let comentarios = JSON.parse(localStorage.getItem("comentarios"));
    comentarios.splice(index, 1);
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
    cargarComentarios();
}

function enviarMensaje() {
    let mensaje = document.getElementById("mensaje-chat").value.trim();
    if (mensaje === "") return;
    alert("Mensaje enviado: " + mensaje);
    document.getElementById("mensaje-chat").value = "";
}
