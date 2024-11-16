# 🚀 Consumidor de API Angular

## 📖 Descripción

Este proyecto demuestra cómo consumir una API pública utilizando Angular 18. Obtiene datos de usuarios de la [API Fake Store de Platzi](https://api.escuelajs.co/api/v1/users) y los muestra en una tabla responsiva y paginada con una interfaz de usuario moderna.

## 🛠️ Configuración

1. Clona el repositorio
2. Ejecuta `npm install` para instalar las dependencias
3. Inicia el servidor de desarrollo con `ng serve`
4. Navega a `http://localhost:4200/`


## 🚶‍♂️ Proceso de Desarrollo

El desarrollador siguió estos pasos para crear esta aplicación Angular:

1. **Configuración del Proyecto**: Inicializó un nuevo proyecto Angular utilizando Angular CLI.

2. **Creación del Servicio**: Desarrolló un `UserService` para manejar las llamadas a la API para obtener datos de usuarios.

3. **Definición del Modelo**: Creó un modelo `User` para definir la estructura de los objetos de usuario.

4. **Desarrollo de Componentes**: 
   - Implementó un `TablaConsultaComponent` para mostrar los datos de usuarios en formato de tabla.
   - Creó un `DashboardComponent` para alojar la tabla y la navegación.
   - Desarrolló un `SideMenuComponent` para una navegación responsiva.
   - Construyó un `LoginComponent` para la autenticación de usuarios.

5. **Enrutamiento**: Configuró el enrutamiento para navegar entre diferentes componentes.

6. **Mejora de la Interfaz de Usuario**: 
   - Añadió paginación a la tabla de usuarios.
   - Implementó un indicador de carga mientras se obtienen los datos.
   - Estilizó los componentes usando CSS personalizado para un aspecto moderno.

7. **Manejo de Errores**: Implementó manejo de errores para las llamadas a la API y casos extremos.

8. **Pruebas y Refinamiento**: Realizó pruebas exhaustivas e hizo los refinamientos necesarios.

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
