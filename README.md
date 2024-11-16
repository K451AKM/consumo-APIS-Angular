# 🚀 Consumidor de API Angular

## 📖 Descripción

Este proyecto demuestra cómo consumir una API pública utilizando Angular 18. Obtiene datos de usuarios de la [API Fake Store de Platzi](https://api.escuelajs.co/api/v1/users) y los muestra en una tabla responsiva y paginada con una interfaz de usuario moderna.

![Tabla de Consumo de APIs](https://github.com/K451AKM/consumo-APIS-Angular/raw/master/tabla-consumo-apis.jpg)

## 🛠️ Configuración

1. Clona el repositorio
2. Ejecuta `npm install` para instalar las dependencias
3. Inicia el servidor de desarrollo con `ng serve`
4. Navega a `http://localhost:4200/`


## 🚶‍♂️ Proceso de Desarrollo

El desarrollador siguió estos pasos detallados para crear esta aplicación Angular y consumir la API pública:

1. **Configuración del Proyecto**: 
   - Inicializó un nuevo proyecto Angular utilizando Angular CLI con el comando `ng new consumo-APIS-Angular`.
   - Configuró el proyecto para usar standalone components y el nuevo router de Angular.

2. **Creación del Servicio**:
   - Desarrolló un `UserService` utilizando `ng generate service user` para manejar las llamadas a la API.
   - Implementó un método `getUsers()` en el servicio que utiliza `HttpClient` para hacer una solicitud GET a `https://api.escuelajs.co/api/v1/users`.
   - Utilizó RxJS para manejar la respuesta asíncrona y transformar los datos según fuera necesario.

3. **Definición del Modelo**:
   - Creó un modelo `User` en `user.model.ts` para definir la estructura de los objetos de usuario.
   - Incluyó propiedades como `id`, `name`, `email`, `password`, `role`, y `avatar`.

4. **Desarrollo de Componentes**:
   - **TablaConsultaComponent**:
     - Creó este componente con `ng generate component tabla-consulta`.
     - Inyectó el `UserService` y utilizó su método `getUsers()` en `ngOnInit()` para obtener los datos.
     - Implementó la lógica de paginación en el componente para mostrar los usuarios por páginas.
     - Añadió un indicador de carga utilizando un *ngIf mientras se obtienen los datos.
   - **DashboardComponent**:
     - Desarrolló este componente como contenedor principal que aloja la tabla y la navegación.
     - Utilizó el router de Angular para manejar la navegación entre diferentes vistas.
   - **SideMenuComponent**:
     - Implementó un menú lateral responsivo que se puede abrir y cerrar.
     - Utilizó CSS y JavaScript para manejar la funcionalidad del menú hamburguesa.
   - **LoginComponent**:
     - Creó un formulario de login con validaciones utilizando Reactive Forms.
     - Implementó la lógica de autenticación (simulada para este proyecto).

5. **Enrutamiento**:
   - Configuró las rutas en `app-routing.module.ts` para navegar entre el login, dashboard y la tabla de consulta.
   - Implementó guardias de ruta para proteger las rutas que requieren autenticación.

6. **Mejora de la Interfaz de Usuario**:
   - **Paginación**: 
     - Implementó la paginación en el componente de tabla utilizando lógica personalizada.
     - Añadió controles para navegar entre páginas y mostrar el rango de usuarios visibles.
   - **Indicador de Carga**:
     - Utilizó un *ngIf para mostrar un spinner o skeleton loader mientras se cargan los datos.
   - **Estilización**:
     - Aplicó estilos CSS personalizados para lograr un diseño moderno y responsivo.
     - Utilizó Flexbox y Grid para el layout y media queries para la responsividad.

7. **Manejo de Errores**:
   - Implementó un interceptor HTTP para manejar errores de manera global.
   - Añadió manejo de errores específico en el servicio y los componentes.
   - Creó un componente de notificación para mostrar mensajes de error al usuario.

Este proceso detallado muestra cómo se construyó la aplicación paso a paso, desde la configuración inicial hasta la implementación de características avanzadas y pruebas, con un enfoque particular en el consumo eficiente de la API pública.

## 🤔 Reflexiones

### Preguntas y Respuestas

1. **¿Qué ventajas tiene el uso de servicios en Angular para el consumo de APIs?**
   - Separación de responsabilidades
   - Reutilización de código
   - Gestión centralizada de datos
   - Mejora de la testabilidad
   - Manejo eficiente de dependencias

2. **¿Por qué es importante separar la lógica de negocio de la lógica de presentación?**
   - Mejora la mantenibilidad del código
   - Facilita la reutilización de la lógica de negocio
   - Aumenta la testabilidad de cada capa
   - Permite una mayor escalabilidad del proyecto
   - Facilita la colaboración en equipo

3. **¿Qué otros tipos de datos o APIs podrías integrar en un proyecto como este?**
   - APIs de autenticación y autorización
   - APIs de redes sociales
   - APIs de geolocalización
   - APIs de pago
   - APIs de almacenamiento en la nube
   - APIs de análisis de datos
   - APIs de mensajería en tiempo real

## 📬 Contacto

Para cualquier pregunta o comentario, por favor abre un issue en este repositorio.

¡Feliz codificación! 🎉
