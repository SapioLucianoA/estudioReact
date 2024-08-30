
Enunciado
Crea una aplicación para buscar películas

API a usar: - https://www.omdbapi.com/ Consigue la API Key en la propia página web registrando tu email.

Here is your key: c376c776

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=c376c776

http://www.omdbapi.com/?apikey=c376c776&s=



Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

🔲Lista las películas y muestra el título, año y poster.

🔲Que el formulario funcione

🔲Haz que las películas se muestren en un grid responsive.

🔲Hacer el fetching de datos a la API

Primera iteración:

🔲 Evitar que se haga la misma búsqueda dos veces seguidas.

🔲 Haz que la búsqueda se haga automáticamente al escribir.




<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

✅ Evita que se haga la búsqueda continuamente al escribir (debounce)