# UI Starter Kit
---

UI Starter Kit es simplemente un paquete de herramientas que utilizo para comenzar mis proyecyos UI. Este paquete está basado en el framework CSS [Bootstrap](http://getbootstrap.com/) (v3.2.0) y utiliza el theme [United](https://bootswatch.com/united/) de [Bootswatch](https://bootswatch.com/) pero puede ser totalmente personalizado. Cuenta con un archivo package.json para instalar las dependencias necesarias que luego serán utilizadas principalmente por Bower (ver bower.json) para correr las tareas seteadas en gulpfile.js.

## Requisitos
* [NPM] y [NodeJS]- Package manager [NodeJs Web site](https://nodejs.org/)
* [Bower] - A package manager for the web [Bower Web site](http://bower.io/)

## Cómo se utiliza
Cloná este repositorio:
```sh
$ git clone https://github.com/amariani/UI-Starter-Kit.git
```

Instalá las dependencias:
```sh
$ npm install && bower install
```
> Esto instalará las dependencias listadas en los archivos package.json y
> bower.json.

### Dependencias
----

NPM
-
- "bootstrap": "~3.2.0"
- "font-awesome": "~4.2.0"

Bower
-
- "bower": "^1.4.1",
- "browser-sync": "^2.8.2",
- "del": "^0.1.3",
- "gulp": "^3.8.11",
- "gulp-autoprefixer": "^1.0.1",
- "gulp-concat": "^2.4.1",
- "gulp-imagemin": "^1.0.1",
- "gulp-less": "^1.3.6",
- "gulp-minify-css": "^0.3.10",
- "gulp-plumber": "^0.6.6",
- "gulp-sass": "^1.0.0",
- "gulp-uglify": "^1.0.1"

Ejecutá las tareas de bower para compilar todo:
```sh
$ gulp fullBuild
```

### Recomendado durante el desarrollo:
```sh
$ gulp
```
> Esto iniciará un servidor local con BrowserSync.
> Con el comando anterior, cada cambio que se realice en algún archivo LESS,
> Javascript o imágen que se agregue a src/imgs se correrán las
> tareas de Gulp para compilar los archivos, comprimirlos y copiarlos a la
> carpeta assets.

## Creador

UI Starter Kit fue creado por [**Ariel Iván Mariani**](https://ar.linkedin.com/in/arielmariani)

Licencia
----

MIT

**Free Software**

- [node.js](http://nodejs.org)
- [Bower](http://bower.io/)
- [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
- [jQuery](http://jquery.com)
- [Gulp](http://gulpjs.com)
