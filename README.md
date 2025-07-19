# proyecto-api-nodejs-express

# Curso de Back End con Node.JS de **TalentoTech**
## Proyecto final integrador
## Servidor API REST con capas Express


### Este proyecto es una API Rest básica conectada a una base de datos de Firebase para cargar productos y algunas características de ellos con Node.js.
### Para que funcione usé la información que me brindó el curso, ya que no tenía ningún conocimiento previo en el tema, y requiere muchas mejoras futuras. 

---

## Características

- **Express** para gestionar rutas y middleware.
- **Nodemon** para recargar automáticamente el servidor cuando se usa el modo desarrollo.

---

## Instalación

Primero, instalar las dependencias:

```bash
npm install
```

---

## Comandos disponibles

### Iniciar el servidor

Este comando iniciará el servidor:
```bash
npm start
```
O este comando inicia el servidor en modo desarrollo con Nodemon:

```bash
npm run dev
```

## Estructura del proyecto


| Carpeta | Archivo | Contenido |
|:-----|:-----|:-----|
|      | index.js | Punto de entrada del servidor |
|      | packege.json | Dependencias y scripts |
|      | README.md | Documentación del proyecto |
|      | .env | Esta carpeta no está incluida, ahí van las variables de entorno (*) |
| routes | product.route.js | Definición de rutas |
| routes | auth.route.js | Definición de rutas de autentificación |
| controllers | product.controller.js | Lógica que responde a las rutas |
| controllers | auth.controller.js | Lógica del logueo |
| services| product.sevice.js |Lógica de negocio reutilizable |
| models| product.model.js | Modelos de datos |
| middleware | auth.middleware.js | Lógica de la verificación de la autentificación |
| config | db.js | Configuración de la base de datos |
| config | envs.js | Archivo barril para manejo de variables de entorno, puertos, etc. |

---

## Rutas disponibles

### GET todos los productos: http://localhost:5000/api/products
### Muestra la lista de productos y sus características (Nombre, precio, stock, disponible)

### GET producto por id: http://localhost:5000/api/products/id
### Muestra el producto con ese id.

### POST: http://localhost:5000/api/products
### Ejemplo del Body:
```json
{
  "nombre":"lapices-de-colores",
  "precio":2000,
  "stock":3,
  "disponible":true
}
```
### Carga a la lista el producto y sus características.

### DELETE: http://localhost:5000/api/products/id
### Borra el producto con ese id y sus características de la lista.

---
### Mejoras futuras: realizar validaciones para el ingreso de productos a la base de datos, autentificación de usuarios, protección de las rutas de autentificación
---

## (*) En la raiz del proyecto debes agregar una carpeta **.env** con las sig. variables de entorno:
### APIKEY = #Tus claves Firebase
### AUTHDOMAIN = #Tus claves Firebase
### PROJECTID = "api-proyecto-final-nodejs"
### STORAGEBUCKET = #Tus claves Firebase
### MESSAGINGSENDERID = #Tus claves Firebase
### APPID = #Tus claves Firebase
### MEASUREMENTID = #Tus claves Firebase
