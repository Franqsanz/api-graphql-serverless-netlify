# API GraphQL Serverless + Netlify Example

En el archivo `_redirects`:

```sh
/graphql /.netlify/functions/api 200!
```

El `/graphql` es el endpoint que hace referencia:

```js
app.use(
  '/graphql', // ha este endpoint.
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
```
