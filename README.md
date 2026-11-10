# Catálogo de Productos - Prueba Técnica Fullstack

Este repositorio contiene el código fuente de una aplicación web full-stack para la gestión de un catálogo de productos, implementando un ciclo CRUD completo (Crear, Leer, Actualizar, Eliminar).

##  Tecnologías Utilizadas

**Frontend:**
- React 18 (Vite)
- Tailwind CSS v4
- Fetch API para consumo de endpoints

**Backend:**
- NestJS
- TypeORM
- class-validator & class-transformer (Validación de DTOs)

**Base de Datos & Infraestructura:**
- PostgreSQL 16
- Docker

---

##  Requisitos Previos

Para ejecutar este proyecto en un entorno local, necesitas tener instalado:
- [Node.js](https://nodejs.org/) (v20 o superior recomendado)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

---

##  Instalación y Configuración

### 1. Base de Datos (Docker)
Ejecuta el siguiente comando para levantar un contenedor de PostgreSQL aislado para este proyecto:
```bash
docker run --name db-examen-productos -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=examen_productos -p 5433:5432 -d postgres:16
```

### 2. Configuración del Backend (NestJS)
Abre una terminal, navega a la carpeta del backend y configura las dependencias:
```bash
cd backend-productos
npm install
```

Crea un archivo .env en la raíz de backend-productos con las siguientes variables:

```bash
DB_HOST=localhost
DB_PORT=5433
DB_USER=postgres
DB_PASSWORD=admin
DB_NAME=examen_productos
PORT=3000
```
Inicia el servidor de desarrollo:

```bash
npm run start:dev
```

### 3. Configuración del Frontend (React)
Abre una nueva terminal, navega a la carpeta del frontend y configura las dependencias:

```bash
cd frontend-productos
npm install
```
Crea un archivo .env en la raíz de frontend-productos con la URL de la API:
```bash
VITE_API_URL=http://localhost:3000/products
```

Inicia la aplicación de React:
### Uso

Una vez que ambos servidores estén corriendo:

    El backend estará disponible en: http://localhost:3000/products

    El frontend estará disponible en: http://localhost:5173 (o el puerto que indique Vite en la terminal).

Accede a la URL del frontend desde tu navegador para interactuar con el catálogo de productos.
