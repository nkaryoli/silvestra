# 🌲 Silvestra

<p align="center">
  <img src="src/assets/silvestra-demo.png" alt="Gameplay demo preview" width="600"/>
</p>


Aplicación web moderna sobre servicios y productos sostenibles enfocados en el cuidado y preservación del bosque.

## 📋 Descripción

Silvestra es un sitio web responsivo desarrollado con HTML, CSS y Tailwind CSS que presenta información sobre servicios forestales y sostenibilidad. La aplicación incluye navegación intuitiva, diseño moderno y una experiencia de usuario optimizada para dispositivos móviles y de escritorio.

## 🎯 Características

- **Navegación responsiva** - Menú adaptable para móvil y escritorio
- **Diseño moderno** - Interfaz limpia utilizando Tailwind CSS
- **Múltiples secciones**:
  - Inicio - Página principal con información destacada
  - Productos y Servicios - Catálogo de ofertas
  - Sostenibilidad - Información sobre prácticas ecológicas
  - Sobre Nosotros - Presentación de la empresa
  - Contacto - Formulario de contacto
- **Optimización visual** - Fuentes custom de Google Fonts (Inter y Playfair Display)
- **Imágenes optimizadas** - Uso de formato AVIF para mejor compresión

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados
- **Tailwind CSS** - Framework de utilidades CSS
- **JavaScript** - Interactividad y lógica del cliente
- **PNPM** - Gestor de paquetes

## 📁 Estructura del Proyecto

```
silvestra/
├── .gitignore                 # Archivos ignorados por Git
├── .vscode/                   # Configuración del editor
├── build/
│   └── output.css            # Estilos compilados de Tailwind
├── src/
│   ├── assets/               # Recursos (imágenes)
│   │   ├── caido.avif
│   │   └── imagen_bosque_tarragona.avif
│   ├── javascript/
│   │   └── index.js          # Lógica principal
│   ├── pages/                # Páginas adicionales
│   │   ├── contacto.html
│   │   ├── servicios.html
│   │   ├── sobreNosotros.html
│   │   └── sostenibilidad.html
│   └── styles/
│       └── styles.css        # Estilos base
├── index.html                # Página principal
├── package.json              # Configuración de dependencias
├── package-lock.json         # Lock file de npm
├── pnpm-lock.yaml            # Lock file de pnpm
├── README.md                 # Este archivo
└── tailwind.config.js        # Configuración de Tailwind CSS
```

## ⚙️ Instalación

1. **Clonar el repositorio** (si aplica):
   ```bash
   git clone <url-repositorio>
   cd silvestra
   ```

2. **Instalar dependencias**:
   ```bash
   pnpm install
   ```

3. **Compilar los estilos de Tailwind** (en modo watch):
   ```bash
   pnpm run build
   ```

## 🚀 Uso

### Desarrollo
Para desarrollar con compilación automática de Tailwind:
```bash
pnpm run build
```

El comando monitoreará cambios en `src/styles/styles.css` y generará automáticamente `build/output.css`.

### Visualizar
Abre `index.html` en tu navegador o utiliza un servidor local:
```bash
# Ejemplo con Python
python -m http.server 8000

# Ejemplo con Node.js
npx http-server
```

## 🎨 Personalización

### Tailwind CSS
Edita `tailwind.config.js` para personalizar:
- Colores
- Tipografía
- Espaciado
- Y más...

### Estilos
Los estilos base están en `src/styles/styles.css`. Tailwind CSS genera los estilos compilados en `build/output.css`.

## 📱 Responsive Design

La aplicación es completamente responsiva:
- **Móvil** - Menú hamburguesa con overlay
- **Tablet** - Ajuste de espacios y tipografía
- **Escritorio** - Navegación completa visible

## 🔧 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `pnpm run build` | Compila Tailwind CSS en modo watch |

## 📦 Dependencias

### Desarrollo
- **tailwindcss** ^3.4.17 - Framework CSS para estilos

## 📄 Licencia

ISC

## 👨‍💼 Autor

Proyecto desarrollado como parte del curso de Lenguaje de Marcas en MONLAU.

---

**Última actualización**: Febrero 2026
