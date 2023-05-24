# Dreel: Árbol de Archivos y Carpetas en la Terminal

[![npm version](https://img.shields.io/npm/v/dreel.svg)](https://www.npmjs.com/package/dreel)

Una aplicación de línea de comandos que genera un árbol de archivos y carpetas en la terminal. Proporciona una representación visual de la estructura de directorios y archivos presentes en un directorio específico.

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org) instalado en tu sistema. Luego, puedes instalar el paquete de npm globalmente utilizando el siguiente comando:

```shell
    npm install -g dreel
```

## Uso
Ejecuta el siguiente comando en la terminal para generar el árbol de archivos y carpetas:

```shell
    dreel <directorio>
```

Reemplaza <directorio> con la ruta del directorio que deseas explorar. Por ejemplo:

```shell
    tree ./ruta/al/directorio
```

El paquete generará un árbol de archivos y carpetas en la terminal, mostrando la estructura del directorio especificado.

## Flags
El paquete proporciona las siguientes banderas para personalizar la salida:
- --omit-git: Omite los archivos y carpetas de Git.
- --omit-hidden: Omite los archivos y carpetas ocultos.
- --ommit-node-modules: Omite los archivos y carpetas de node_modules.
- --omit-all-files: Omite todos los archivos.

## Ejemplo
Supongamos que tienes la siguiente estructura de directorios y archivos:

```shell
    proyecto/
    ├── src/
    │   ├── index.js
    │   └── utils.js
    ├── public/
    │   └── index.html
    └── README.md
```

Para generar el árbol de archivos y carpetas en la terminal, ejecuta el siguiente comando:

```shell
    dreel ./proyecto
```

La salida en la terminal será:

```shell
    proyecto
    ├── src
    │   ├── index.js
    │   └── utils.js
    ├── public
    │   └── index.html
    └── README.md
```

## Contribución
Las contribuciones son bienvenidas. Si deseas mejorar este paquete, por favor, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama para tus cambios: git checkout -b mi-mejora
3. Realiza los cambios y realiza commits: git commit -am 'Agrega una nueva funcionalidad'
4. Haz push a la rama: git push origin mi-mejora
5. Envía una pull request.

## Licencia
Este paquete está bajo la Licencia MIT.

## Contacto
Si tienes alguna pregunta, sugerencia o comentario, puedes contactarme a través de mi dirección de correo electrónico:
[itslivcode@gmail.com](itslivcode@gmail.com)
