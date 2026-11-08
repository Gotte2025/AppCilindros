# Sellos de Cilindro

App web instalable para calcular cuántos sellos, O-rings y guías lleva un cilindro hidráulico (fondo, pistón y punta), guardar un registro y sacar la lista de compra. Funciona sin conexión una vez instalada y genera un PDF por cada cilindro.

No necesita servidor ni compilar nada: son archivos estáticos.

## Subirla a GitHub Pages

1. En GitHub, creá un repositorio nuevo (por ejemplo `sellos-cilindro`), público.
2. Subí **todo el contenido de esta carpeta** a la raíz del repositorio: `index.html`, `sw.js`, `manifest.webmanifest` y las carpetas `fonts`, `icons` y `vendor`.
   - Desde la web: **Add file → Upload files** y arrastrá los archivos y las carpetas juntos.
   - Desde la terminal:
     ```
     git init
     git add .
     git commit -m "Sellos de Cilindro"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/sellos-cilindro.git
     git push -u origin main
     ```
3. En el repositorio: **Settings → Pages → Build and deployment**. En "Source" elegí **Deploy from a branch**, rama **main**, carpeta **/ (root)**, y guardá.
4. Esperá uno o dos minutos. La app queda en `https://TU_USUARIO.github.io/sellos-cilindro/`.

## Instalarla en el celular

Abrí esa dirección con conexión la primera vez, así se guarda todo en el equipo.

- **iPhone (Safari):** botón compartir → **Agregar a inicio**.
- **Android (Chrome):** menú de los tres puntos → **Instalar app** o **Agregar a la pantalla principal**.

Desde ese momento abre sola, con su ícono, también sin señal.

## Datos y registro

- El registro se guarda **en cada equipo por separado**, dentro del navegador. No se sincroniza solo.
- Para pasar cilindros de un celular a otro: **Exportar registro** en uno e **Importar registro** en el otro. Si un cilindro ya existe en los dos, se queda el que se modificó más tarde.
- Si borrás los datos del navegador o desinstalás la app, se pierde el registro. Exportá una copia de vez en cuando.
- Al abrir la app por primera vez aparecen dos cilindros de ejemplo, marcados como "Ejemplo". Borralos cuando cargues los tuyos.

## Actualizar la app

Si cambiás algún archivo y lo volvés a subir, abrí `sw.js` y subí el número de `CACHE` (por ejemplo de `sellos-cilindro-v1` a `sellos-cilindro-v2`). Los celulares reciben la versión nueva la segunda vez que abren la app con conexión.

## Qué calcula y qué no

Calcula cantidades por sección (fondo, pistón, punta) a partir de los diámetros y de lo que tildás. No calcula la medida del repuesto: el perfil o la sección (por ejemplo 70 × 3,53 para un O-ring) la anotás vos en cada fila. Las piezas sin medida salen marcadas como "Falta medida" en la lista de compra y en el PDF.
