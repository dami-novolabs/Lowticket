# 💻 Comandos Útiles para Migración

Esta es tu hoja de referencia rápida con todos los comandos necesarios para la migración.

---

## 🚀 Comandos de Inicio Rápido

### Crear Proyecto Next.js
```bash
npx create-next-app@latest novolabs-landing

# Responder al wizard:
# ✔ Would you like to use TypeScript? … Yes
# ✔ Would you like to use ESLint? … Yes
# ✔ Would you like to use Tailwind CSS? … Yes
# ✔ Would you like to use `src/` directory? … No
# ✔ Would you like to use App Router? … Yes
# ✔ Would you like to customize the default import alias (@/*)? … Yes
```

### Navegar al proyecto
```bash
cd novolabs-landing
```

---

## 📦 Instalación de Dependencias

### Dependencias Completas (Un solo comando)
```bash
npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-visually-hidden lucide-react class-variance-authority clsx tailwind-merge tailwindcss-animate
```

### Separado por categoría (Opcional)

**Radix UI (Primitivos):**
```bash
npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-visually-hidden
```

**Iconos:**
```bash
npm install lucide-react
```

**Utilidades:**
```bash
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate
```

---

## 🏗️ Comandos de Desarrollo

### Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre: http://localhost:3000

### Build de producción
```bash
npm run build
```

### Ejecutar build localmente
```bash
npm start
```

### Linting
```bash
npm run lint
```

### Limpiar cache de Next.js
```bash
rm -rf .next
npm run dev
```

---

## 📁 Comandos de Estructura de Carpetas

### Crear estructura base
```bash
mkdir -p components/ui
mkdir -p hooks
mkdir -p lib
mkdir -p public/images
```

### Verificar estructura
```bash
tree -L 2
# O en Windows:
dir /s /b
```

---

## 🖼️ Comandos de Assets

### Copiar imágenes (desde carpeta temporal)
```bash
# Mac/Linux:
cp ~/Desktop/novolabs-assets/*.png public/images/

# Windows:
copy C:\Users\TU_USUARIO\Desktop\novolabs-assets\*.png public\images\
```

### Verificar imágenes copiadas
```bash
ls -lh public/images/
# O en Windows:
dir public\images\
```

---

## 🔍 Comandos de Búsqueda y Reemplazo

### Buscar texto en archivos (Mac/Linux)
```bash
# Buscar 'figma:asset' en todos los archivos
grep -r "figma:asset" components/

# Buscar con número de línea
grep -rn "figma:asset" components/

# Buscar solo en archivos .tsx
grep -r --include="*.tsx" "figma:asset" .
```

### Buscar texto en archivos (Windows PowerShell)
```powershell
# Buscar 'figma:asset' en todos los archivos
Get-ChildItem -Recurse -Filter *.tsx | Select-String "figma:asset"
```

### Buscar y reemplazar con sed (Mac/Linux)
```bash
# Reemplazar './components/' por '@/components/' en un archivo
sed -i '' 's|./components/|@/components/|g' components/HeroSection.tsx

# Reemplazar en todos los archivos .tsx
find components -name "*.tsx" -exec sed -i '' 's|./components/|@/components/|g' {} +
```

### Buscar y reemplazar en VSCode
```
Ctrl+Shift+H (Windows/Linux)
Cmd+Shift+H (Mac)

Buscar: from './components/
Reemplazar: from '@/components/
```

---

## 🧪 Comandos de Testing

### Ejecutar build y verificar errores
```bash
npm run build 2>&1 | tee build.log
```

### Verificar TypeScript
```bash
npx tsc --noEmit
```

### Verificar sintaxis de todos los archivos
```bash
npx eslint . --ext .ts,.tsx
```

---

## 🐛 Comandos de Debugging

### Ver logs en tiempo real
```bash
npm run dev | tee dev.log
```

### Limpiar todo y reinstalar
```bash
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

### Verificar versiones
```bash
node --version
npm --version
npx --version
```

### Ver dependencias instaladas
```bash
npm list --depth=0
```

### Verificar dependencias desactualizadas
```bash
npm outdated
```

---

## 📤 Comandos de Git

### Inicializar repositorio
```bash
git init
git add .
git commit -m "Initial commit - Migración a Next.js"
```

### Crear branch para migración
```bash
git checkout -b migration/nextjs
```

### Ver cambios
```bash
git status
git diff
```

### Commit de componentes individuales
```bash
git add components/HeroSection.tsx
git commit -m "Migrate HeroSection to Next.js"
```

### Ver historial
```bash
git log --oneline
```

### Crear .gitignore
```bash
cat > .gitignore << EOF
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOF
```

---

## 🚀 Comandos de Deploy (Vercel)

### Instalar Vercel CLI
```bash
npm i -g vercel
```

### Login a Vercel
```bash
vercel login
```

### Deploy a Vercel (desarrollo)
```bash
vercel
```

### Deploy a producción
```bash
vercel --prod
```

### Ver logs de deploy
```bash
vercel logs
```

### Ver dominios configurados
```bash
vercel domains ls
```

### Agregar dominio custom
```bash
vercel domains add tudominio.com
```

---

## 🔧 Comandos de Configuración

### Inicializar TypeScript config
```bash
npx tsc --init
```

### Inicializar ESLint
```bash
npx eslint --init
```

### Verificar configuración de Tailwind
```bash
npx tailwindcss init --help
```

---

## 📊 Comandos de Performance

### Analizar bundle size
```bash
# Instalar analyzer
npm install --save-dev @next/bundle-analyzer

# Agregar a next.config.js:
# const withBundleAnalyzer = require('@next/bundle-analyzer')({
#   enabled: process.env.ANALYZE === 'true',
# })
# module.exports = withBundleAnalyzer(nextConfig)

# Ejecutar análisis
ANALYZE=true npm run build
```

### Lighthouse desde línea de comandos
```bash
npm install -g lighthouse

# Ejecutar lighthouse
lighthouse http://localhost:3000 --view
```

---

## 🔍 Comandos de Inspección

### Ver estructura de archivos
```bash
# Mac/Linux
tree -I 'node_modules|.next'

# Windows
tree /F /A
```

### Ver tamaño de carpetas
```bash
# Mac/Linux
du -sh components/*

# Windows PowerShell
Get-ChildItem components | ForEach-Object {
    $size = (Get-ChildItem $_.FullName -Recurse | Measure-Object -Property Length -Sum).Sum
    [PSCustomObject]@{
        Name = $_.Name
        SizeKB = [math]::Round($size / 1KB, 2)
    }
} | Format-Table
```

### Contar líneas de código
```bash
# Mac/Linux
find . -name '*.tsx' -o -name '*.ts' | xargs wc -l

# Windows PowerShell
(Get-ChildItem -Include *.tsx,*.ts -Recurse | Get-Content | Measure-Object -Line).Lines
```

---

## 🛠️ Scripts Personalizados Útiles

### Agregar a package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "clean": "rm -rf .next node_modules",
    "reinstall": "npm run clean && npm install",
    "analyze": "ANALYZE=true npm run build",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "preview": "npm run build && npm start"
  }
}
```

### Ejecutar scripts
```bash
npm run clean
npm run reinstall
npm run analyze
npm run type-check
```

---

## 🧹 Comandos de Limpieza

### Limpiar archivos temporales
```bash
rm -rf .next out node_modules/.cache
```

### Limpiar completamente
```bash
rm -rf .next out node_modules package-lock.json
npm install
```

### Limpiar cache de npm
```bash
npm cache clean --force
```

---

## 📱 Comandos de Testing Mobile

### Servir en red local
```bash
# Next.js automáticamente sirve en todas las interfaces
npm run dev

# Tu IP local:
# En Mac/Linux:
ifconfig | grep "inet " | grep -v 127.0.0.1

# En Windows:
ipconfig | findstr IPv4
```

Luego accede desde tu móvil a: `http://TU_IP_LOCAL:3000`

---

## 🔐 Comandos de Variables de Entorno

### Crear archivo .env.local
```bash
cat > .env.local << EOF
NEXT_PUBLIC_GHL_FORM_URL=https://info.novolabs.xyz/widget/form/Nwsr5FOSTx7o6aVlRudg
NEXT_PUBLIC_GHL_SCRIPT_URL=https://info.novolabs.xyz/js/form_embed.js
EOF
```

### Cargar variables en desarrollo
```bash
# Automático al ejecutar npm run dev
# Next.js carga .env.local automáticamente
```

---

## 📦 Comandos de Backup

### Hacer backup del proyecto
```bash
# Mac/Linux
tar -czf novolabs-backup-$(date +%Y%m%d).tar.gz --exclude='node_modules' --exclude='.next' .

# Windows PowerShell
Compress-Archive -Path . -DestinationPath "novolabs-backup-$(Get-Date -Format 'yyyyMMdd').zip" -Exclude node_modules,.next
```

### Restaurar backup
```bash
# Mac/Linux
tar -xzf novolabs-backup-YYYYMMDD.tar.gz

# Windows
Expand-Archive -Path novolabs-backup-YYYYMMDD.zip -DestinationPath .
```

---

## 🎯 Comandos One-Liners Útiles

### Ver todos los componentes con 'use client'
```bash
grep -r "^'use client'" components/ --include="*.tsx" -l
```

### Ver todos los imports de imágenes
```bash
grep -r "figma:asset" components/ --include="*.tsx"
```

### Contar componentes
```bash
find components -name "*.tsx" | wc -l
```

### Listar todos los componentes UI
```bash
ls -1 components/ui/*.tsx | xargs -n1 basename
```

---

## 🚨 Comandos de Emergencia

### Servidor no responde
```bash
# Matar proceso en puerto 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Windows PowerShell:
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

### Error de permisos en node_modules
```bash
# Mac/Linux:
sudo chown -R $(whoami) node_modules

# Windows (como admin):
takeown /f node_modules /r /d y
```

### Build falla misteriosamente
```bash
# Solución nuclear:
rm -rf node_modules package-lock.json .next
npm cache clean --force
npm install
npm run build
```

---

## 📚 Comandos de Documentación

### Generar JSDoc
```bash
npx jsdoc -r components -d docs
```

### Generar sitemap
```bash
# En next.config.js, agregar:
# Luego visitar /sitemap.xml después de build
```

---

## 🎓 Comandos de Aprendizaje

### Ver dependencias de un módulo
```bash
npm ls lucide-react
```

### Ver documentación de un paquete
```bash
npm docs next
npm docs lucide-react
```

### Buscar paquetes
```bash
npm search tailwind
```

---

## 💡 Tips de Línea de Comandos

### Alias útiles (agregar a ~/.bashrc o ~/.zshrc)

```bash
# Alias para Next.js
alias nd="npm run dev"
alias nb="npm run build"
alias ns="npm start"
alias nc="rm -rf .next && npm run dev"

# Alias para Git
alias gs="git status"
alias ga="git add"
alias gc="git commit -m"
alias gp="git push"

# Alias para navegación
alias cdp="cd ~/projects/novolabs-landing"
```

### Aplicar aliases
```bash
source ~/.bashrc
# o
source ~/.zshrc
```

---

## 🔥 Comandos de Productividad

### Abrir VSCode desde terminal
```bash
code .
```

### Abrir en navegador
```bash
# Mac:
open http://localhost:3000

# Linux:
xdg-open http://localhost:3000

# Windows:
start http://localhost:3000
```

### Ver en tiempo real cambios en archivos
```bash
# Mac/Linux:
watch -n 1 'ls -lh components/*.tsx'

# Windows PowerShell:
while($true) { cls; Get-ChildItem components\*.tsx; Start-Sleep 1 }
```

---

## 📋 Checklist de Comandos para Migración Completa

```bash
# 1. Crear proyecto
npx create-next-app@latest novolabs-landing
cd novolabs-landing

# 2. Instalar dependencias
npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-visually-hidden lucide-react class-variance-authority clsx tailwind-merge tailwindcss-animate

# 3. Crear estructura
mkdir -p components/ui hooks lib public/images

# 4. Copiar imágenes (ajustar ruta según corresponda)
cp ~/Desktop/novolabs-assets/*.png public/images/

# 5. Inicializar git
git init
git add .
git commit -m "Initial Next.js setup"

# 6. Ejecutar desarrollo
npm run dev

# 7. Verificar TypeScript
npx tsc --noEmit

# 8. Build de producción
npm run build

# 9. Deploy a Vercel
vercel --prod
```

---

## 🎯 Atajos de Teclado en Terminal

### Navegación
- `Ctrl+A` - Ir al inicio de la línea
- `Ctrl+E` - Ir al final de la línea
- `Ctrl+U` - Borrar desde cursor hasta inicio
- `Ctrl+K` - Borrar desde cursor hasta final
- `Ctrl+L` - Limpiar pantalla (igual que `clear`)

### Historia
- `↑` / `↓` - Navegar historial de comandos
- `Ctrl+R` - Buscar en historial
- `!!` - Repetir último comando
- `!$` - Último argumento del comando anterior

### Procesos
- `Ctrl+C` - Cancelar comando actual
- `Ctrl+Z` - Suspender proceso (llevarlo a background)
- `fg` - Traer proceso suspendido al foreground

---

**¡Guarda esta hoja de referencia para consulta rápida! 🚀**

Todos estos comandos están probados y listos para usar en tu migración a Next.js.
