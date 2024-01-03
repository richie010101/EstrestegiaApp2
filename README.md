# Prevención de Burnout con Juegos Interactivos - Proyecto React

Este proyecto, desarrollado por Ricardo Jesus Reyes Munguia, es una aplicación en React destinada a ayudar en la prevención del burnout a través de juegos interactivos, videos impartidos por profesionales y acceso a contactos de ayuda profesional. Todo esto se encuentra conectado a Cloud Firestore para facilitar el almacenamiento y la gestión de datos.

## Descripción

El objetivo principal de esta aplicación es proporcionar herramientas interactivas y recursos multimedia para prevenir y gestionar el burnout. Ofrece una experiencia interactiva mediante juegos diseñados para reducir el estrés y la presión laboral. Además, se proporciona acceso a videos impartidos por profesionales en el área de la salud mental y enlaces a contactos de ayuda profesional para una atención más específica.

## Características Principales

- **Juegos Interactivos:** Ofrece una variedad de juegos diseñados para reducir el estrés y la ansiedad.
- **Recursos Multimedia:** Acceso a videos impartidos por profesionales en el campo de la salud mental.
- **Contactos de Ayuda Profesional:** Proporciona enlaces o información de contacto a profesionales de la salud mental para ayuda específica.
- **Integración con Cloud Firestore:** Utiliza Cloud Firestore para almacenar y gestionar datos de manera eficiente.

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio: `git clone https://github.com/tu_usuario/nombre_del_repositorio.git`
2. Navega a la carpeta del proyecto: `cd nombre_del_repositorio`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `npm start`

Asegúrate de tener Node.js y npm instalados en tu sistema antes de comenzar.

## Configuración de la Base de Datos

Para que la aplicación funcione correctamente, es necesario crear un archivo de configuración para la conexión a la base de datos Firebase. Sigue estos pasos:

1. Dentro de la carpeta `src/components`, crea un archivo llamado `firebase.js`.
2. Abre el archivo `firebase.js` y agrega la configuración de Firebase necesaria para la conexión. Asegúrate de incluir las credenciales y la configuración de Firebase proporcionadas en tu proyecto de Firebase. Un ejemplo de cómo podría verse este archivo:

```javascript
// firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Coloca aquí tu configuración de Firebase
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_AUTH_DOMAIN',
  projectId: 'TU_PROJECT_ID',
  // ...
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Exporta la instancia de Firestore (u otros servicios que uses)
export const firestore = firebase.firestore();
```

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor, crea un *pull request* explicando los cambios propuestos.

## Contacto

Para más información o contacto:

- Ricardo Jesus Reyes Munguia - [Perfil GitHub](https://github.com/richie010101)
