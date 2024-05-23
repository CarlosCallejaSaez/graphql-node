# API GraphQL para Gestión de Clientes

Este proyecto implementa una API utilizando Node.js, MongoDB y GraphQL para la gestión de clientes. Proporciona funcionalidades para crear, leer, actualizar y eliminar clientes.
GraphQL utiliza un único endpoint para todas las consultas y mutaciones.
http://localhost:PORT/carlos-graphql

# Diferencias entre API REST y GraphQL

## API REST
- **Endpoints:** En una API REST, diferentes recursos requieren diferentes endpoints. Por ejemplo, `/clients` para obtener todos los clientes, `/clients/:id` para obtener un cliente específico, etc.
- **Overfetching/Underfetching:** Con REST, es común obtener más datos de los necesarios (overfetching) o no obtener suficientes datos (underfetching) debido a la estructura fija de las respuestas.
- **Versionado:** Las APIs REST suelen necesitar versionado (v1, v2, etc.) cuando se realizan cambios significativos en el esquema de la API.

## GraphQL
- **Consultas flexibles:** Los clientes pueden solicitar exactamente los datos que necesitan, evitando overfetching y underfetching.
- **Sin versionado explícito:** GraphQL permite evolucionar el esquema de la API sin necesidad de versionado, ya que los clientes especifican exactamente qué campos necesitan.

## Beneficios de GraphQL sobre REST
- **Eficiencia en la recuperación de datos:** GraphQL permite recuperar todos los datos necesarios en una sola consulta.
- **Menos llamadas a la API:** Al evitar la necesidad de múltiples endpoints, GraphQL puede reducir la cantidad de llamadas necesarias para obtener los datos deseados.


### Consultas y Mutaciones


#### Obtener todos los clientes

```
{
    clients {
        id
        name
    }
}
```
#### Obtener un cliente por ID

```
{
    client(id: 1) {
        name
        email
    }
}
```


#### Crear un nuevo cliente

```
mutation {
    addClient(name: "Carlos", email: "carlos@gmail.com", phone: "123456") {
        id
        name
        email
        phone
    }
}
```


#### Actualizar un cliente

```
mutation {
    updateClient(id: "1", name: "Carlos Actualizado", email: "carlos_nuevo@gmail.com", phone: "654321") {
        id
        name
        email
        phone
    }
}
```

#### Borrar un cliente

```
mutation {
    deleteClient(id: 1) {
        id
    }
}
```

