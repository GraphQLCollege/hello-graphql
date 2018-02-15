```
mkdir hello-graphql
cd hello-graphql
yarn init -y
yarn add cypress --dev
npx cypress run
create-react-app client
cd client
yarn start
npx cypress run
prisma init server
```

* `How to set up a new Prisma service?`
  * `GraphQL server/fullstack boilerplate (recommended)`
* `Choose GraphQL boilerplate project:`
  * `node-basic              Basic GraphQL server (incl. database)`
* `Please choose the cluster you want to deploy "server@dev" to`
  * `local           Local cluster (requires Docker)`

```
cd server
yarn dev
```

* Make changes to datamodel.graphql

```
prisma deploy
yarn dev
```

## GraphQL Playground

In app:

```
{
  recipient {
    name
  }
}
```

```
{
  "data": {
    "recipient": null
  }
}
```

In db:

```
mutation {
  createRecipient(data: {name:"world"}) {
    name
  }
}
```

```
{
  "data": {
    "createRecipient": {
      "name": "world"
    }
  }
}
```

In app again:

```
{
  recipient {
    name
  }
}
```

```
{
  "data": {
    "recipient": {
      "name": "world"
    }
  }
}
```

## Apollo client

```
cd client
yarn add apollo-client apollo-cache-inmemory apollo-link-http react-apollo graphql-tag graphql
cd ../server
yarn start
npx cypress run
```

## Deploy Prisma

```
prisma login
mkdir .env.prod
now --dotenv .env.prod
```

```
PRISMA_STAGE="prod"
PRISMA_CLUSTER={YOUR_USERNAME_HERE}/prisma-eu1
PRISMA_SECRET=""
PRISMA_ENDPOINT=""
```