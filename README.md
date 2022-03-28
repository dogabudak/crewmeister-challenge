# Crew meisters Recruitment Task


### Requirements

- node 16
- yarn 1.22
- docker 20.10.6
- docker-compose 1.29.1

### Installation

Simply run `yarn install` to install all needed packages. The Post-Install Script will also setup the husky hooks.

## Running the Server

### Development

First of all, you need to start the redis server.

```bash
yarn watch:dc
```

If you want to start it in background, append `-d`.

When the Redis Server is started, you can start the application you want to:

- Storybook: `yarn watch:sb`
- Next.js Frontend: `yarn watch`

Storybook will run on [Port 9009](http://localhost:9009) while Next.js / fastify will listen on [Port 1337](http://localhost:1337) by default.

### Production

Production Deployment is handled by docker / docker-compose.

Simply run `yarn start:dc`. This will build and start all Containers and start them. To start them in the background, append `-d`.

If you need to rebuild the containers, run `yarn start:dc --build`.

## Configuration

### `.env`-File

You can set some Parameters in the `.env` File:

| Parameter   | Description                                                      | Default (if not provided) |
| :---------- | :--------------------------------------------------------------- | :------------------------ |
| SERVER_HOST | Defines the host for the Next.js server                          | 0.0.0.0                   |
| SERVER_PORT | Defines the post for the Next.js server                          | 1337                      |
| NODE_ENV    | Defines the node environment. `production` or `development`      |                           |
| LOG_LEVEL   | Defines the log level. `info`, `error`, `warn`, `trace`, `debug` | `info`                    |


// TODO 
1- 3 states should be there (either requested, approved or rejected)
2- absense type take it proper 
3- absense date take it from query params 
4- docker containers
5- total count is not shown
