//! Creating a Next.js configured App:

// Vemos que al crear el proyecto automáticamente con npx create-next-app@latest ya nos configura todas las carpetas mínimas como "app" con "layout" y "page" dentro.
// Vemos también nos da un "global.css" donde podremos cambiar las fuentes de todo el site o el background. También es un buen lugar donde crear css variables, reset styles, etc..
// La folder public es donde guardas archivos estáticos que quieres servir directamente al navegador sin que Next.js los procese como Imágenes, Iconos, Fuentes locales, Archivos PDF descargables, robots.txt, sitemap.xml.
// Un buen package para generar icónos es React Icons.
// next-env.d.ts : Es un archivo automático de TypeScript que Next.js genera y mantiene solo. Le dice a TypeScript que existen los tipos específicos de Next.js, para que tu editor entienda. No se ha de tocar y sí se sube a GitHub.
// El resto son configs que configuran las herramientas que estamos usando como next, postcss, tsconfig, y eslint
