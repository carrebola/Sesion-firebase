# Tutorial: Mostrar datos de un documento de Firebase en tu página web

Este tutorial te guiará paso a paso para conectar tu proyecto con Firebase y mostrar datos de un documento de Firestore en tu página web.

---

## 1. Configura Firebase en tu proyecto

Asegúrate de haber configurado Firebase en tu proyecto. Esto incluye:

1. Crear un proyecto en la [Consola de Firebase](https://console.firebase.google.com/).
2. Configurar Firestore y añadir una colección (por ejemplo, `usuarios`) con documentos que contengan los datos que deseas mostrar.

---

## 2. Configura tu archivo `index.html`

Asegúrate de que tu archivo HTML tenga un lugar donde mostrar los datos. Por ejemplo, puedes usar un contenedor `<div>`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mostrar Datos de Firebase</title>
  </head>
  <body>
    <h1>Datos del Documento</h1>
    <div id="data-container">
      <!-- Aquí se mostrarán los datos -->
    </div>
    <script src="index.js"></script>
  </body>
</html>
```
