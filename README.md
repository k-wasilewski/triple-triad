# Overview 
A simple NodeJs app acting as a proxy for communication-service's `pushMessage` mutation.
Communication-service is excluded from the apollo-router as the router doesn't support
subscriptions, but with the help of the Proxy service, its mutation can still be exposed 
to the supergraph.

# Technologies
NodeJs
GraphQL

# Run locally

1.	`$ npm ci`
4.	`$ npm run dev`

# Run dockerized

1. `$ docker build -t proxy-service .`
2. `$ cd ba-backend`
3. `$ docker-compose up mongodb auth-service communication-service proxy-service`