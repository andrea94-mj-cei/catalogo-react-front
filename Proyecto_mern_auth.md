# MERN AUTH (Mongodb+Express+React+NodeJS)

Sistema con autenticación y Upload de archivos (subir archivos)


## PASOS PARA UN NUEVO PROYECTO COMPLETO

### Comprendiendo el problema del cliente (FrontEnd primero)

1. Antes de planificar bases de datos y servidores, vamos a resolver la interacción con el usuario. Es decir que comenzaremos con el backend

2. Nos centraremos en crear un Layout básico con las funcionalidades principales, sin preocuparnos por el detrás de escena.

3. Esto nos ayuda a entender mejor las necesidades de nuestros clientes, además de evitar que nos abrumemos con conceptos del backend o base de datos.


### Front

Nuestro front tendrá formulario de Registro, Login, Home Pública y Sección Privada.

- [X] Crear Front con Vite-React + React-Router-Dom
- [X] Alias @ para Vite (en el archivo vite.config.js)
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      '@':'/src'
    }
  }
})
```
- [X] Instalar TailwindCSS (script cdn + tailwind.config.js) En la página de tailwind aparece el paquete para instalarlo en la terminal
- [X] Crear páginas principales: Registro - Login - Home público - Home privado (pages/ <Home><Login><Registro><Admin>)
- [X] Crear Layout (Header + Main + Footer)
- [X] Configurar rutas de React-Router-Dom
- [X] Mock User (en lib/constants.js) para pruebas
- [X] Fomulario de Login - handleLogin()
- [X] Formulario de Registro - handleRegistro()
- [X] Botones de Login + Registro (<Button>) (crear en un componente)
- [X] Header condicional si existe user, botón Logout (para cerrar la sesión)
- [X] Creamos un contexto utilizando useContext para manejar el estado de autenticación y su hook personalizado (hooks/useUser.jsx)
- [X] Simulamos guardar datos de usuario en LocalStorage
- [X] Proteger ruta privada (<PrivateRoute>)
- [X] Botón de Logout y Limpieza de sesión
- [X] Crear Variables de entorno para VITE_BACKEND_URL
- [X] Crear los fetch para Login y Registro




### Back

Nuestro back tendrá una API Rest con rutas para Auth y Usuarios. También poseerá un middleweare para proteger rutas privadas.

- [X] Crear Back con Express y dependencias (cors, nodemon, dotenv, mongoose)
- [X] Instalar dependencias de Auth (bcrypt, jsonwebtoken)
```bash
npm i express cors dotenv mongoose
npm i nodemon -D
npm i bcrypt jsonwebtoken
```
- [X] Crear variables de entorno
- [X] Archivo de Config.js
- [X] Crear rutas de Auth (/registro, /login, /users)
- [] Crear una ruta protegida (/admin)
- [] Hash con Bcrypt
- [] JWT con JsonWrbToken para protección de rutas privadas
- [] Crear middleware auth.js que devuelve true siempre
- [] Esquemas de Mongoose para usuarios (nombre, email, contraseña)
- [] Conexión a MongoDB Atlas
- [] Testing

-------------------------------

### HASH:
- Para encriptar a partir de operaciones matemáticas una contraseña

### BCRIPT:
- Dependencia para hacer un hash de nuestras contraseñas

### JSONWEBTOKEN:
- Dependencia para crear una especie de llave que me va a permitir mandar al frontend y ya el frontend me va a permitir acceder al contenido privado o no


# HOY LUNES 30 sept

(para subir archivos)
- instalamos librería:
 npm i multer

 - creamos en la carpeta middleweares un archivo multer.js

 - creamos carpeta public dentro de back (dentro creamos un archivo index.html
 )

 - creamos carpeta upload dentro de public

