# Encriptador de Texto

## Descripción

El **Encriptador de Texto** es una aplicación web simple diseñada para encriptar y desencriptar texto utilizando un algoritmo básico de sustitución de caracteres. La aplicación toma como entrada un texto, lo transforma según un conjunto de reglas predefinidas, y permite copiar el texto encriptado o desencriptado al portapapeles.

## Características

- **Encriptar Texto**: Transforma un texto dado en un formato encriptado según un patrón de sustitución.
- **Desencriptar Texto**: Revertir un texto encriptado al formato original.
- **Validación de Caracteres**: Acepta solo letras minúsculas y espacios; muestra un mensaje de error si se ingresan caracteres inválidos.
- **Copiar al Portapapeles**: Permite copiar el texto resultante al portapapeles con un botón.

## Estructura del Proyecto

### Archivos Principales

- **index.html**: Contiene la estructura HTML de la aplicación.
- **style.css**: Contiene los estilos CSS que definen la apariencia de la aplicación.
- **script.js**: Contiene la lógica JavaScript para la encriptación, desencriptación, validación de texto y manejo de eventos.

### Estructura HTML

- **Encabezado**: Contiene el logotipo de la aplicación.
- **Sección Principal**:
  - **Textarea**: Para ingresar el texto a encriptar o desencriptar.
  - **Botones**: Para encriptar, desencriptar y copiar el texto resultante.
- **Sección de Resultados**:
  - **Resultado**: Muestra el texto encriptado o desencriptado.
  - **Botón Copiar**: Permite copiar el texto resultante al portapapeles.
  - **Alertas**: Mensajes de éxito o error al copiar el texto o validar caracteres.

### Estilos CSS

- Definición de variables CSS para colores, tamaños de fuente y otros estilos.
- Responsividad para adaptar la interfaz a diferentes tamaños de pantalla (tablet y móvil).
- Animaciones para alertas y botones interactivos.

### Lógica JavaScript

- **btnEncriptar**: Función para encriptar el texto ingresado.
- **btnDesencriptar**: Función para desencriptar el texto.
- **encriptar** y **desencriptar**: Funciones que aplican las reglas de sustitución para encriptar y desencriptar.
- **copy**: Función para copiar el texto resultante al portapapeles y mostrar una alerta de confirmación.
- Validación de caracteres para asegurar que solo se utilicen letras minúsculas y espacios.

## Instrucciones de Uso

1. **Clonar el repositorio**: Descarga o clona este proyecto en tu máquina local.
2. **Abrir `index.html`**: Puedes abrir el archivo `index.html` en cualquier navegador para utilizar la aplicación.
3. **Encriptar o Desencriptar Texto**: Ingresa el texto en el área de texto y utiliza los botones correspondientes.
4. **Copiar Resultado**: Una vez generado el resultado, puedes copiarlo usando el botón "Copiar".

## Tecnologías Utilizadas

- **HTML5**: Para la estructura básica del documento.
- **CSS3**: Para los estilos y la responsividad de la interfaz.
- **JavaScript**: Para la lógica de encriptación, desencriptación y manejo de eventos.

## Autor

Este proyecto fue desarrollado como una herramienta educativa y de práctica para comprender los conceptos básicos de HTML, CSS y JavaScript.
