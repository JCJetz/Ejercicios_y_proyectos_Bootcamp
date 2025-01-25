
## Build nuevo proyecto en monorepo

- despues de haber pusheado el nuevo proyecto, desde root, con:

```
git add .
git commit -m "added project x to projects"
git push origin main
```

si tenemos varios proyectos añadidos (no recomendado!) y queremos subirlos de uno en uno, deberías hacer

```
git add ./projects/nombre_de_la_carpeta_del_proyecto
```

en lugar de 'git add .'


- moverse a la carpeta del proyecto (no pushear desde aqui!!, usar la otra consola que no es la etiquetada GITHUB!), y añadir la libreria gh-pages

```
npm install --save-dev gh-pages
```
- añadir build a packages.json DEL PROYECTO

en "scripts" (mirar otro proyecto)

```
"predeploy": "npm run build",
    "deploy": "gh-pages -d build --dest proyectos/nombre_de_la_carpeta_del_proyecto",
```

y arriba la ruta en la que se visualizará (debe coincidir con ruta del proyecto con respecto a /bootcamp)

```
 "homepage": "http://JCJetz.github.io/Ejercicios_y_proyectos_Bootcamp/proyectos/nombre_de_la_carpeta_del_proyecto",
```

 luego, en el packages.json principal (root , /bootcamp), añadir el script para deployment del nuevo proyecto (en "scripts" debajo de los demás)

 ```
 "deploy:nombre_de_la_carpeta_del_proyecto-app": "npm run deploy --prefix ./proyectos/nombre_de_la_carpeta_del_proyecto"
 ```

 con esto, en una repo normal, la app ya se construiría en github pages, pero al ser monorepo, debemos crear la carpeta en el branch gh-pages primero

suponiendo que en algun lado el proyecto está enlazado para clickarse, claro (en el readme)

 - pushear estos cambios a main (**COMPROBAR QUE ESTAMOS EN LA CONSOLA DE ROOT/bootcamp, que hemos llamado GITHUB**) !!

 ```
 git add . 
 git commit -m "added deploy script and gh-pages lib for rick and morty project"
 git push origin main


- si todo ha ido bien (deberia, comprobar en github que el proyecto se ha subido si quieres), ahora cambiamos al branch gh-pages

``` 
git checkout gh-pages
```

desaparecerán muchas cosas en vscode (estamos visualizando ese branch, que tiene solo los builds)

antes de nada, debemos traer a local los builds desplegados anteriormente, de lo contrario habrá conflicto con lo que añadamos ahora

```
git fetch origin
git pull origin gh-pages
```

ahora ya podemos añadir la carpeta donde se hará el deploy, que necesita un archivo dentro pq sino git lo ignora el joputa

```
mkdir -p proyectos/nombre_de_la_carpeta_del_proyecto/
touch proyectos/nombre_de_la_carpeta_del_proyecto/.gitkeep
```

(.gitkeep es un archivo 'dummy' para que al tener algo dentro, la carpeta se detecte por git)

pusheamos a gh-pages

```
git add .
git commit -m "added nombre_del_proyecto to gh-pages branch" 
git push origin gh-pages
```

si todo va bien, ya podemos volver a main y desplegar la nueva app
(podemos comprobar en github, que en el branch gh-pages se ha creado la carpeta nueva, y que en main los scripts y librerias necesarios están presentes)

```
git checkout main
```

``` 
npm run deploy:nombre_de_la_carpeta_del_proyecto-app
```

(como se llame el nuevo script en packages.json de root, obvs)

- comprobar que funciona (si el enlace del readme no va, no dignifica que no se haya depslegado bien, puede estar el enlace mal!), navegar manualmente hasta lo que hayamos establecido como 'homepage' (e.g. "http://JCJetz.github.io/Ejercicios_y_proyectos_Bootcamp/proyectos/nombre_de_la_carpeta_del_proyecto")





