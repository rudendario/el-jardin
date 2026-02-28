# El Jardín – Parrilla & Eventos

Sitio web para **El Jardín**, un restaurante con parrilla y espacio para eventos. Diseñado con una estética elegante y cálida, priorizando la experiencia visual y la fluidez de navegación.

## Stack tecnológico

- **React 18** + **TypeScript**
- **Vite** – bundler y dev server
- **Tailwind CSS** – estilos utilitarios
- **Framer Motion** – animaciones y transiciones entre páginas
- **React Router DOM v6** – enrutamiento SPA
- **Fuentes**: Cormorant Garamond + Manrope (Google Fonts)

## Estructura del proyecto

```
el-jardin/
├── public/
│   ├── favicon.svg
│   ├── logo-el-jardin.png
│   ├── hero/
│   ├── pictures/
│   └── placeholders/
├── src/
│   ├── components/
│   │   ├── layout/       # Header, Footer, PageTransition, ScrollToTop
│   │   ├── ui/           # Componentes reutilizables
│   │   └── home/         # Secciones específicas de la home
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Carta.tsx
│   │   ├── Eventos.tsx
│   │   ├── Contacto.tsx
│   │   └── NotFound.tsx
│   ├── data/             # Datos estáticos (carta, eventos, etc.)
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Funciones auxiliares
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Páginas

| Ruta | Página |
|------|--------|
| `/` | Home |
| `/carta` | Carta del restaurante |
| `/eventos` | Espacios y eventos |
| `/contacto` | Contacto y localización |

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Notas

- El proyecto es una SPA con transiciones animadas entre páginas mediante Framer Motion.
- Los assets (imágenes, logo, favicon) se sirven desde `public/`.
- El idioma principal de la interfaz es el español.
