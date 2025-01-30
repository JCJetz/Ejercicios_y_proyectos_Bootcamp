# Introducción a Git

Git es un sistema de control de versiones, lo que significa que puedo ver el historico de mis cambios en los archivos de mi proyecto.

Ademas con git puedo trabajar en remoto y puedo compartir mis cambios con el resto de mis compañer@s del proyecto, aunque estén en la otra punta del mundo.

## ¿Pero entonces ahora todos mis archivos del ordenador son Git?

No. Para poder meter en git mis archivos/proyecto, tengo que ejecutar un comando especial.

Un proyecto cuando lo metemos en git, se le conoce como **REPOSITORIO**.

## ¿Pero que es una proyecto?

Un proyecto es una carpeta, que dentro tiene todas las carpetas y archivos que pertenecen al proyecto, pero siempre tiene que empezar desde una carpeta.

A esta carpeta se le conoce como directorio raíz del proyecto.

## ¿Como creo un repositorio git?

1. Abrir un terminal en la carpeta raíz.
2. Ejecutar en el terminal el comando.

> git init

A partir de aqui, el proyecto con esa carpeta raíz será un repositorio git.

## ¿Que partes existen en un repositorio?

Un repositorio de git está dividido en varias partes:

1. Directorio de trabajo (working directory): El lugar en el Sistema operativo donde trabajamos con los archivos.
2. Area Staging: Lugar intermedio donde se añaden los cambios a GIT antes de registrarlos en el repositorio local.
3. Repositorio local: Es el lugar dentro de tu ordenador donde GIT hace su magia, es decir, registra los cambios, guarda el histórico, etc.
4. Repositorio remoto: Es lo mismo que el repositorio local pero en la nube. Una de las herramientas mas famosas para construir repositorios remotos es Github.

### Esquema de comandos de git

![Git schema](https://miro.medium.com/max/481/0*h0aOKyXxUmlS-dIK.png)

## Branches

Las ramas se utilizan en GIT para bifurcar el desarrollo y así evitar tener código que no esté listo en la rama principal (main o master)

Esto evita principalmente bloqueos a la hora de desarrollar.

### ¿Cuando tengo que bifurcar el desarrollo?

Existe varios casos en los que debo bifurcar el desarrollo:

1. Cuando tenemos que implementar/crear nueva funcionalidad. (feature)
2. Cuando tengo que corregir un error sobre una funcionalidad existente (bugfix o hotfix)
3. Cuando quiero sacar una nueva versión de mi aplicación con lo nuevo que haya construido (release)

Existen metodologías para trabajar con ramas. La más famosa es Gitflow.

### Gitflow

Gitflow establece que existen dos ramas principales para el desarrollo de software.

- La rama que contiene el código de la versión actual que el usuario está utilizando (producción)
- La rama donde se guardan los desarrollos ya finalizados y que tiene que subir en la siguiente release.

Además gitflow establece una serie de ramas, efímeras, para el desarrollo.

Existe un diagrama que explica la creación de ramas en gitflow.

![Git flow Model](https://cleventy.com/wp-content/uploads/2020/03/git-model-1.png)

Las ramas efimeras, son importantes para mantener el proyecto estable y que no tengamos que invertir mucho tiempo en corregir problemas habituales en el desarrollo del SW.

Lo importante es conocer, de donde `sale` una rama y a donde `va` una rama.

La otra cosa importante es el nombre que yo le doy a las ramas:

- Nuevas funcionalidades: `feature/<nombre-en-minuscula>`
- Nuevas versiones: `release/<nombre-en-minuscula-version>`
- Errores producción: `hotfix/<nombre-en-minuscula>`

Cuando una rama release va a master (main), se crea una etiqueta/foto/snapshot que se conoce como `tag`.

A la acción de meter una rama dentro de otra se le llama `merge`

## ¿Que comandos tiene git?

### init

Inicializa un repositorio en una carpeta que no sea repo de git todavía

> git init

### status

Me indica el estado de un repositorio. Me da la siguiente información:

- En que rama estoy
- Los commits
- Que archivos se han modificado
- Que archivos todavía no existen en el repositorio git

> git status

### add

Añadir los cambios que haya sufrido el directorio de trabajo en el area de `staging`.

Puede añadir todos los archivos del directorio de trabajo, o solo los que yo seleccione.

Si queremos añadir todos el comando es

> git add .

Si solo queremos añadir archivos concretos, debemos poner el nombre con la ruta del archivo/s despues del add separados por espacio.

Si por ejemplo quiero subir dos archivos [demo.md, prueba/demo.txt]

> git add demo.md prueba/demo.txt

### commit

Guarda los cambios que haya en el area de `staging` en el repositorio local.

- Es obligatorio el parámetro `-m`. Este parametro sirve para indicar el mensaje del commit.

> git commit -m "Mi mensaje descriptivo"

- Si añado el parámetro `-a` subo TODO lo que tenga en el directorio de trabajo + el área de staging al repositorio local.

> git commit -a -m "Mi mensaje descriptivo"

### Push

Subir mis cambios que tengo en el `Repositorio Local` al `Repositorio Remoto`

> git push

### Pull

Descarga los cambios que haya en el repositorio remoto que no tengas en tu repositorio local.

Además de dejar los cambios en el repositorio local, te actualiza tu directorio de trabajo con los nuevos cambios.

> git pull

### Fetch

Actualiza los cambios del repositorio remoto al repositorio local, pero no los actualiza en el directorio de trabajo.

> git fetch

### Clone

Permite generar un nuevo repositorio local + un directorio de trabajo a partir de un repositorio remoto.

Una vez que hago el clone, se me crea la carpeta raíz con el directorio de trabajo y ya puedo ejecutar mis comandos de git en ese repositorio.

Para clonar necesito la URL y esta se obtiene de la plataforma que use para mis repositorios remotos (Github)

1. Clonar usando HTTP

   > git clone <https://github.com/agonsant/hello-world-git.git>

2. Clonar usando SSH

   > git clone git@github.com:agonsant/hello-world-git.git

### branch

Me hace un listado de las ramas de mi repositorio, indicandome en la rama en la que estoy actualmente.

> git branch

Si queremos borrar una rama (por ejemplo `prueba`) desde CMD sería:

> git branch -d prueba

Para borrarla debemos estar en una rama distinta a la que queremos borrar

### checkout

Comando que se utiliza, para cambiar de rama o crear una nueva (opcion -b).

Tambien se utilizan para cambiar a un commit concreto.

***Es importante que el directorio de trabajo esté sin cambios o limpio***

es decir, que yo no tenga cambios pendientes de subir.

1. Cambia a la rama develop, existente

    > git checkout develop

2. Crea y cambia a una nueva rama llamada feature/new-feature

    > git checkout -b feature/new-feature

3. Cambiar a un commit concreto, el `0a08c0` (primeros 6 letras del id del commit)

    > git checkout 0a08c0

### merge







