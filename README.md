# TiangZiGe Maker
TiangZiGe Maker es una aplicación web para generar hojas de práctica de escritura china directamente desde el navegador.  
Permite crear plantillas personalizadas, previsualizar el resultado en tiempo real y exportarlo como PDF listo para imprimir.

## Demo
[https://tianzige-maker.netlify.app/](https://tianzige-maker.netlify.app/)

## Funcionalidades
Actualmente la aplicación permite:
- Ingresar una cantidad ilimitada de caracteres
- Eliminar caracteres dinámicamente
- Elegir entre 3 tipos de cuadrículas:
  - 田字格: 4 cuadrantes
  - 九宫格: 9 cuadrantes
  - 米字格: 4 cuadrantes con diagonales
- Ver una previsualización en tiempo real
- Exportar la hoja como PDF

## Tecnologías utilizadas
Este proyecto fue desarrollado utilizando:
- React
- HTML2Canvas
- jsPDF
- CSS

## Instalación
Clonar el repositorio:

```bash
git clone https://github.com/sackflorencia/Tianzige-maker.git
```

Entrar a la carpeta del proyecto:

```bash
cd tianzige-maker
```

Instalar dependencias:

```bash
npm install
```

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

## Cómo usarlo
1. Ingresar uno o varios caracteres chinos
2. Seleccionar el tipo de cuadrícula
3. Visualizar la previsualización generada
4. Exportar el resultado como PDF

## Próximas mejoras
- Mejorar el sistema de grids para que sea completamente responsive
- Separar la hoja visible de la hoja utilizada para exportación, evitando conflictos con HTML2Canvas
- Agregar exportación a PNG
- Validar que únicamente se ingresen caracteres chinos
- Soporte para frases completas: Permitir que caracteres pertenecientes a una misma palabra o frase permanezcan en la misma línea
- Generación automática de pinyin
- Guías visuales de orden de trazos
- Traducción automática con selección de idioma
- Listas predefinidas de práctica: HSK 1, HSK 2, HSK 3, HSK 4, HSK 5, HSK 6, Comidas, Familia, Verbos comunes, Frases básicas

## Autor
Desarrollado por Florencia Sack.