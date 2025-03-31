# Gestión de Usuarios con Firebase

Este proyecto es una aplicación web que permite gestionar usuarios (crear, leer, actualizar y eliminar) utilizando Firebase como base de datos en tiempo real.

---

## ¿Qué es Firebase?

Firebase es una plataforma de desarrollo de aplicaciones web y móviles proporcionada por Google. Ofrece una variedad de herramientas y servicios que facilitan el desarrollo de aplicaciones, como bases de datos en tiempo real, autenticación, almacenamiento en la nube, hosting y más.

En este proyecto, utilizamos **Cloud Firestore**, una base de datos NoSQL que permite almacenar y sincronizar datos entre aplicaciones en tiempo real.

---

## ¿Cómo funciona Firebase en este proyecto?

1. **Configuración de Firebase**:

   - Se inicializa Firebase con las credenciales del proyecto (proporcionadas en la consola de Firebase).
   - Se utiliza Firestore como base de datos para almacenar los datos de los usuarios.

2. **Operaciones CRUD**:
   - **Crear**: Añadir nuevos usuarios a la base de datos.
   - **Leer**: Obtener y mostrar los usuarios almacenados en la base de datos.
   - **Actualizar**: Modificar los datos de un usuario existente.
   - **Eliminar**: Eliminar un usuario de la base de datos.

---

## Funciones de Firebase utilizadas

### 1. **`initializeApp`**

- **Descripción**: Inicializa la aplicación de Firebase con la configuración del proyecto.
- **Uso en el proyecto**:
  ```javascript
  var app = initializeApp(firebaseConfig);
  ```
- **Propósito**: Permite conectar la aplicación web con el proyecto de Firebase.

### 2. **`getFirestore`**

- **Descripción**: Inicializa Firestore, la base de datos utilizada en este proyecto.
- **Uso en el proyecto**:
  ```javascript
  var db = getFirestore(app);
  ```
- **Propósito**: Proporciona acceso a las funciones de la base de datos.

### 3. **`collection`**

- **Descripción**: Obtiene una referencia a una colección en Firestore.
- **Uso en el proyecto**:
  ```javascript
  collection(db, "alumnos");
  ```
- **Propósito**: Permite interactuar con la colección `alumnos` en la base de datos.

### 4. **`getDocs`**

- **Descripción**: Obtiene todos los documentos de una colección.
- **Uso en el proyecto**:
  ```javascript
  getDocs(collection(db, "alumnos"));
  ```
- **Propósito**: Leer los datos almacenados en la colección `alumnos`.

### 5. **`addDoc`**

- **Descripción**: Añade un nuevo documento a una colección.
- **Uso en el proyecto**:
  ```javascript
  addDoc(collection(db, "alumnos"), {
    nombre: "Carlos",
    apellidos: "Arrebola",
  });
  ```
- **Propósito**: Crear un nuevo usuario en la base de datos.

### 6. **`doc`**

- **Descripción**: Obtiene una referencia a un documento específico dentro de una colección.
- **Uso en el proyecto**:
  ```javascript
  doc(db, "alumnos", id);
  ```
- **Propósito**: Identificar un documento específico para actualizarlo o eliminarlo.

### 7. **`updateDoc`**

- **Descripción**: Actualiza los datos de un documento existente.
- **Uso en el proyecto**:
  ```javascript
  updateDoc(ref, { nombre: "Nuevo Nombre", apellidos: "Nuevos Apellidos" });
  ```
- **Propósito**: Modificar los datos de un usuario en la base de datos.

### 8. **`deleteDoc`**

- **Descripción**: Elimina un documento de una colección.
- **Uso en el proyecto**:
  ```javascript
  deleteDoc(ref);
  ```
- **Propósito**: Eliminar un usuario de la base de datos.

---

## Flujo de la aplicación

1. **Cargar usuarios**:

   - Al cargar la página, se ejecuta la función `cargarUsuarios`, que obtiene todos los documentos de la colección `alumnos` y los muestra en una tabla.

2. **Añadir usuario**:

   - El formulario permite añadir un nuevo usuario. Al enviar el formulario, se llama a la función `crearUsuario`, que añade un nuevo documento a la colección.

3. **Editar usuario**:

   - Cada fila de la tabla tiene un botón "Editar". Al hacer clic, se solicita al usuario que introduzca nuevos valores, y se actualizan los datos en la base de datos.

4. **Eliminar usuario**:
   - Cada fila de la tabla tiene un botón "Eliminar". Al hacer clic, se elimina el documento correspondiente de la base de datos.

---

## Requisitos para ejecutar el proyecto

1. **Configuración de Firebase**:

   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
   - Habilita Firestore y añade una colección llamada `alumnos`.

2. **Archivos del proyecto**:

   - Asegúrate de tener los siguientes archivos:
     - `index.html`: Estructura de la página web.
     - `index.js`: Lógica de la aplicación.
     - `config.js`: Configuración de Firebase.
     - `styles.css`: Estilos de la aplicación.

3. **Reglas de seguridad de Firestore**:
   - Para pruebas, puedes usar reglas abiertas como estas:
     ```json
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         match /{document=**} {
           allow read, write: if true;
         }
       }
     }
     ```
   - **Nota**: No uses estas reglas en producción.

---

## Recursos adicionales

- [Documentación oficial de Firebase](https://firebase.google.com/docs)
- [Guía de Firestore](https://firebase.google.com/docs/firestore)

---

¡Gracias por usar esta aplicación! Si tienes preguntas o necesitas ayuda, no dudes en contactarme.
