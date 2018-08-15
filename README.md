# Files App #

Application for uploading, listing and deleting files 
using Laravel as backend and React/Redux as frontend. Stack:

* Docker/docker-compose
* Laravel 5.6
* React
* Redux
* React-Router
* Axios
* Babel 6
* Redux-Form
* Material UI
* Webpack

## Introduction

The structure of the project is mainly in the server and client folders. The server folder 
contains a laravel app for backend (serving as a REST API), the client folder contains a 
React app for frontend (using axios for REST requests).

Docker-compose is used to get the containers up and running. There is a base yml file for common 
actions and this is referred to by the server and client yml files respectively. When run,
 there are 3 containers; server, client and the server's db.

##Installation

### Create and launch docker containers/services
```sh
$ docker-compose -f filesapp_server.yml filesapp_client.yml up -d

```

### Stop services
```sh
$ docker-compose -f filesapp_server.yml filesapp_client.yml down

```

### Go to front end in browser

```sh
$ open -a "Google Chrome" http://localhost:5001
```
 
