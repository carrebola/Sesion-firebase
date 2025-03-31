import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

import { firebaseConfig } from "./config.js";

var app = initializeApp(firebaseConfig);
var db = getFirestore(app);

// Leer usuarios
function cargarUsuarios() {
  var cuerpoTablaUsuarios = document.querySelector("#userTableBody");
  getDocs(collection(db, "alumnos")).then(function (instantaneaConsulta) {
    var filas = "";
    var documentos = instantaneaConsulta.docs; // Obtiene los documentos como un array
    for (var i = 0; i < documentos.length; i++) {
      var documento = documentos[i];
      var usuario = documento.data();
      filas += `
        <tr data-id="${documento.id}">
          <td>${usuario.nombre}</td>
          <td>${usuario.apellidos}</td>
          <td>
            <button class="editar">Editar</button>
            <button class="eliminar">Eliminar</button>
          </td>
        </tr>`;
    }
    cuerpoTablaUsuarios.innerHTML = filas;
    añadirEventosBotones();
  });
}

// Crear usuario
function crearUsuario(nombre, apellidos) {
  addDoc(collection(db, "alumnos"), {
    nombre: nombre,
    apellidos: apellidos,
  }).then(function () {
    cargarUsuarios();
  });
}

// Actualizar usuario
function actualizarUsuario(id, nombre, email) {
  var ref = doc(db, "alumnos", id);
  updateDoc(ref, {
    nombre: nombre,
    email: email,
  }).then(function () {
    cargarUsuarios();
  });
}

// Eliminar usuario
function eliminarUsuario(id) {
  var ref = doc(db, "alumnos", id);
  deleteDoc(ref).then(function () {
    cargarUsuarios();
  });
}

// Añadir listeners a botones de la tabla
function añadirEventosBotones() {
  var botonesEditar = document.querySelectorAll("button.editar");
  for (var i = 0; i < botonesEditar.length; i++) {
    botonesEditar[i].addEventListener("click", function (e) {
      var fila = e.target.closest("tr");
      var id = fila.getAttribute("data-id");
      var nombre = fila.children[0].textContent;
      var apellidos = fila.children[1].textContent;

      var nuevoNombre = prompt("Nuevo nombre:", nombre);
      var nuevoApellidos = prompt("Nuevo apellidos:", apellidos);

      if (nuevoNombre && nuevoApellidos) {
        actualizarUsuario(id, nuevoNombre, nuevoApellidos);
      }
    });
  }

  var botonesEliminar = document.querySelectorAll("button.eliminar");
  for (var j = 0; j < botonesEliminar.length; j++) {
    botonesEliminar[j].addEventListener("click", function (e) {
      var fila = e.target.closest("tr");
      var id = fila.getAttribute("data-id");

      if (confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
        eliminarUsuario(id);
      }
    });
  }
}

// Manejar el envío del formulario
document
  .getElementById("formularioUsuario")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;

    // Validar que los campos no estén vacíos
    if (nombre.trim() === "" || apellidos.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Llamar a la función para crear el usuario
    crearUsuario(nombre, apellidos);

    // Limpiar el formulario
    document.getElementById("formularioUsuario").reset();
  });

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", function () {
  cargarUsuarios();
});
