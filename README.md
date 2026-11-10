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
