# Aguayo Starter Vue

Un template de inicialización sencillo para el desarrollo en Vue, creado con la versión 3.0 de `vue-cli` y aplicando las siguientes opciones:

- **Features**:
    - Babel
    - Router
    - Vuex
    - Preprocesador de HTML
    - Preprocesador de CSS
    - Linter
    - i18n
    - Guía de estilos
- **Preprocesador de HTML**: Pug
- **Preprocesador de CSS**: SCSS/SASS
- **Linter**: estándarJS
- **i18n**: i18next
- **Guía de estilos**: Nucleus
- **Manejo de configuración**: Archivos dedicados

## Inicialización del template
El template no se distribuye con los módulos de node ni el archivo `package-lock.json` por lo que deben instalarse las dependencias usando Node. En el directorio de la aplicación ejecutar:

```shell
$ npm install
```
### Instalación de Vue CLI 3.x
El webpack asume que se tiene instalado Vue CLI 3.x. Si no está instalado, se puede instalar de la siguiente forma:
```shell
$ npm install -g @vue/cli
$ npm install -g @vue/cli-service-global
```

## Convenciones para el manejo de directorios
Se han establecido las siguientes convenciones para el manejo de directorios:

### /views
Contiene aquellas páginas de primer nivel invocadas directamente en el router

### /components
Contiene componentes que son reutilizados en las páginas y que tienen una responsabilidad específica.

### /i18n
Contiene archivos dedicados al manejo de internacionalización de la aplicación.

Las cadenas de internacionalización son generadas en un archivo JSON por cada idioma (ejemplo: es.json). Estos archivos deben ser creados con nombres de variables genéricas que representan las cadenas traducidas. Se sugiere usar como nombre de variables, el texto en inglés que corresponde con la cadena ya traducida.

Ejemplo:

```
    "appointment-scheduling": "Agendamiento de cita"
    "contract-generation": "Generación de contrato" 
```

Mensajes de validación: La internacionalización de los mensajes de validación están en un objeto llamado “validations”, las variables de los mensajes deben ser creados con los mismos nombres de la regla a traducir, si se requiere interpolar el nombre del campo se debe utilizar {{- field}}.
Ejemplo:

```
    "validations":{
        "required": "El campo {{- field}} es requerido.",
        "numeric": "El campo {{- field}} debe ser numérico.",
        "date_format": "Debes ingresar una fecha válida.",
        "radio": "Debe seleccionar una opción.",
        "email": "El email que ingresaste no parece válido.",
        "doc_cita_asistencia": "Debe escribir un número de documento, cita o asistencia válido para hacer la búsqueda.",
        "search": "Debe escribir un {{- field}} válido para hacer la búsqueda.",
        "after": "Debe seleccionar un rango de fechas valido"
    }

```
### /VeeValidate
Contiene archivos dedicados al manejo de validaciones de la aplicación.

- **/customRules.js**: Archivo donde se crean nuevas reglas de validación personalizadas (IMPORTANTE los nombres de las reglas (customRules.js) y las variables/llaves que se crean en el archivo de idioma de internacionalización (/i18n) deben ser los mismos.)
- **/index.js**: - Archivo donde genera el diccionario de los mensajes de validaciones y lo inicializa con VeeValidate
                 - Exporta una función llamada loadLangVeeValidate( lang:String(Lenguaje que se desea aplicar, ejemplo: 'es', 'en', etc) ), la cual sirve para generar y cambiar el idioma a los mensajes de validaciones, IMPORTANTE debe existir el archivo JSON con la misma estructura que es.json en la carpeta /i18n del lenguaje que se desea aplicar, ejemplo: loadLangVeeValidate('en') toma el archivo /i18n/en.json y con este archivo genera el diccionario de validaciones y cambia el idioma de los mensajes de validaciones globalmente.

### /data
Contiene archivos con módulos específicos de acceso a datos, de modo que los componentes hagan siempre hagan uso de los métodos de los módulos y su comportamiento sea independiente de la fuente de datos. Este sería un buen lugar para almacenar los módulos de interacción con el api de datos.

### /store
Almacena módulos de Vuex instanciados en un Store principal. Este esquema de organización facilita el mantenimiento de los módulos del bus.

### /assets
Contiene los recursos de la aplicación tales como estilos e imágenes. Se sugiere seguir la siguiente convención para el manejo de directorios dentro de esta carpeta de recursos.

- **/scss** para almacenar archivos de hojas de estilo *.scss.
- **/img**: para almacenar archivos de imagen y vectores
- **/fonts**: para almacenar fuentes
- **/favicon**: almacenar los íconos de navegador

### /plugins
Contiene plugins de Vue creados empleando las recomendaciones de la documentación oficial. El desarrollo de validadores, filtros, y funcionalidades similares son un buen ejemplo de situaciones que pueden ameritar la escritura de un plugin.

## Ejecución de la aplicación

### Correr en modo de desarrollo
```shell
$ npm run serve
```

### Compilar y minificar para producción
```shell
$ npm run build
```
