<div align="center">
<h1>🖥️ Retro Store Backend</h1>

Online NFT Store Simulator | Misión TIC 2022

<img src="https://media.giphy.com/media/McDxBilGiX2WaT1YLQ/giphy.gif" width="120rem" alt="Mario pixel gif">

![issues shield](https://img.shields.io/github/issues/Lmendev/retro-store)
![forks shield](https://img.shields.io/github/forks/Lmendev/retro-store)
![starts shield](https://img.shields.io/github/stars/Lmendev/retro-store)
![licence shield](https://img.shields.io/github/license/Lmendev/retro-store)
</div>

## 💬 Acerca de Retro Store Backend

Este proyecto tiene como finalidad proporcionar la plataforma backend y desarrollar la API para Retro Store.

**Retro Store** es un sistema de gestión de servicios para el sector cripto simulando tokens no fungibles (NFT) sobre blockchain, el cual forma parte de los estudios de la asignatura de DESARROLLO DE APLICACIONES WEB: 2021-2-1711-W1-Presencial del programa Misión TIC 2022.

## ✋ ¿Qué es una API?

Una API (Application Programming Interface) es un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el software de las aplicaciones.

Las API permiten que sus productos y servicios se comuniquen con otros, sin necesidad de saber cómo están implementados. Las API le otorgan flexibilidad; simplifican el diseño, la administración y el uso de las aplicaciones, y proporcionan oportunidades de innovación, lo cual es ideal al momento de diseñar herramientas y productos nuevos (o de gestionar los actuales).

## 🛣️ Rutas

### API V1 
Prefix: /api/v1

| Route \ HTTP METHOD     |  GET                      | POST               | PUT                        | DELETE             |
|-------------------------|---------------------------|--------------------|----------------------------|--------------------|
| /login                  | Verify login              | N/A                | N/A                        | N/A                |
| /users                  | List all users            | Create new user    | N/A                        | N/A                |
| /users/{ id }           | Get user by id            | N/A                | Update user                | Delete user        |
| /nfts                   | List all NFT              | Create new NFT     | N/A                        | N/A                |
| /nfts/{ token \| id }   | Get NFT by token or id    | N/A                | Update NFT                 | Delete NFT         |
| /collections/{ userId } | Get collection by userId  | N/A                | Update collection          | N/A                |
| /carts/{ userId }       | Get cart by userId        | N/A                | Update cart                | N/A                |
| /transactions/{ nftId } | Get transactions of NFT   | N/A                | Update transactions of NFT | N/A                |

## 📝 Requisitos

- GIT >= 2.32.0
- NPM >= 7.19.1
- Node.js >= 14.17.3

## ⚙️ Instalación

* `git clone https://github.com/Lmendev/retro-store`
* `cd retro-store/backend`
* `npm install`
* `npm run start` para iniciar la app de forma local en http://localhost:4000

## 🧪 Prueba el proyecto

Verifica que todo esté bien accediendo a la ruta http://localhost:4000/api/v1/nfts

Mostrará el listado de todos los NFT registrados hasta el momento.

Resultado:

```json
{
  "result": [
    {
      "_id": "60f2d35862f8142b2824dd6e",
      "title": "NES console",
      "description": "NES console pixel art ",
      "image": "nes.gif",
      "token": "a0f62f9f2e71684b4ab2591c2f3fe652",
      "type": "console",
      "createdAt": "2021-07-17T12:55:52.421Z",
      "updatedAt": "2021-07-17T12:55:52.421Z"
    },
    {
      "_id": "60f1ffa239d28315805953e8",
      "title": "Mario 16-bit",
      "description": "Mario 16-bit Super Mario World",
      "image": "mario-16-bit.jpg",
      "token": "de2f15d014d40b93578d255e6221fd60",
      "type": "character",
      "createdAt": "2021-07-16T21:52:34.376Z",
      "updatedAt": "2021-07-16T21:52:34.376Z"
    },
    ...
  ]
}
```

## 📙 Referencias

- [redhat - What are application programming interfaces?](https://www.redhat.com/es/topics/api/what-are-application-programming-interfaces)
