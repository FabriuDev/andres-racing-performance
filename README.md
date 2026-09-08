# Andres Racing Performance

Sitio web de Andres Racing Performance, enfocado en presencia digital y presentación de servicios dentro del automovilismo.

## Stack

- React
- Vite
- JavaScript
- Playwright

## Ejecutar en otra PC

```bash
git clone https://github.com/FabriuDev/andres-racing-performance.git
cd andres-racing-performance
npm ci
npm run dev
```

Vite mostrará la URL local disponible en la terminal.

## Comandos útiles

```bash
npm run dev
npm run build
npm run preview
```

## Estructura principal

```text
src/       aplicación
public/    recursos públicos
scripts/   scripts auxiliares
index.html entrada de Vite
```

## Flujo de trabajo

- Hacer `git pull` antes de continuar desde otra computadora.
- Usar `npm ci` para instalar exactamente las dependencias registradas en `package-lock.json`.
- Mantener fuera del repositorio credenciales, archivos temporales y configuraciones privadas.
- Subir al terminar los cambios que deban quedar disponibles desde otras PCs.

## Antes de publicar cambios

```bash
npm run build
```

Además, revisar navegación, responsive y recursos visuales antes de actualizar producción.
