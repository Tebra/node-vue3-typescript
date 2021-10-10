# Node Express Vue3 Typescript Starter

Template for fully integrated typescript node, express and vue3 project.

## Project setup

Copy the `.env.example` File and rename it to `.env`

Change the Configuration according to your needs. 
```
# ---------------------------------------------------------
# Logging level
# ---------------------------------------------------------
DEBUG=false

# ---------------------------------------------------------
# Server & Vue API connection configuration
# ---------------------------------------------------------
HOST=localhost
PORT=3000

# ---------------------------------------------------------
# Database connection
# ---------------------------------------------------------
DATABASE_HOST=localhost
DATABASE_NAME=name
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres

# ---------------------------------------------------------
# Or as an alternative the complete connection url.
# Remove it if no URL available.
# ---------------------------------------------------------
DATABASE_URL=postgres://postgres:postgres@localhost:5432/name

```

Run the command:
```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### To start the express Server, serving the frontend files and REST Api

```
yarn start
```

### Resources

* [https://dev.to/calvintwr/build-instagram-using-typescript-node-express-and-vue-part-3-4d1n](https://dev.to/calvintwr/build-instagram-using-typescript-node-express-and-vue-part-3-4d1n)
* [https://github.com/hardmaster92/express-sequelize-ts-example](https://github.com/hardmaster92/express-sequelize-ts-example)
* [https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1](https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1)
