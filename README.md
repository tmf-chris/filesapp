# Files App #

Application for uploading, listing and deleting files 
using Laravel as backend and React/Redux as frontend. Stack:

* Docker/docker-compose
* Laravel 5.6
* React
* Redux
* React-Router
* Hot reloading dev server *
* Browserhistory (using express server)
* Axios
* Babel 6
* Redux-Form
* Material UI
* Webpack
* Enzyme
* Jest

## Introduction

The structure of the project is mainly in the server and client folders. The server folder 
contains a laravel app for backend (serving as a REST API), the client folder contains a 
React app for frontend (using axios for REST requests).

Docker-compose is used to get the containers up and running. There is a base yml file for common 
actions and this is referred to by the server and client yml files respectively. When run,
 there are 3 containers; server, client and the server's db.
 
The "filesystem" is within the container for the Laravel backend (storage type "Disk") and hence files 
will be lost if the container is deleted. The database for the backend is synchronized with a 
'.data' folder on the users local disk. If one wishes to remove the database entirely, simply do:

```sh
$ cd server
$ rm -rf .data
```

The file details are stored in a table in the server's db. This is to make it easy to apply 
soft deletes when users "delete" files. It is envisaged that a cron would purge orphaned files 
periodically, depending on data retention laws/agreements with stakeholders. Uuids are used 
for ids of each file, rather than auto-incrementing ids, to enhance enumeration security issues and 
to avoid id collisions when  db copying/merging. Files stored are assigned unique filenames in the 
file system and their filenames/paths retrievable via looking them up in the database.

CORS is used for calls to the server; currently locked to localhost, port of the client.

## Installation

### 1. Get Docker
[for mac](https://docs.docker.com/docker-for-mac/install/)

### 2. Download and run composer
[https://getcomposer.org/download](https://getcomposer.org/download)

### 3. Set up laravel
```sh
$ cd server
$ cp .env.example .env
$ composer install
$ php artisan key:generate
$ cd ..
```

### 4. Create and launch docker containers/services
Make sure you are at the top level, where the yml files reside:
```sh
$ docker-compose -f filesapp_server.yml -f filesapp_client.yml up -d
```

### 5. View the client app in your browser

```sh
$ open -a "Google Chrome" http://localhost:5001
```

## Other operations

### Stopping the docker services
```sh
$ docker-compose -f filesapp_server.yml -f filesapp_client.yml down
```

### Running frontend tests

Tests for frontend use jest and enzyme; you can run them within the docker container:

```sh
$ docker exec -it filesapp_client bash
$ npm test
```
 
### Instructions

The single view shows a table of uploaded files. Clicking "upload file" opens 
a dialog in which you can select a file for upload. Click "upload" to 
upload the file. There is a 10mb upload limit (on the server). The php configuration on the server 
allows for a maximum of 64m, but the controller validates 10mb.

The "name", "type", "size" and "date" columns are all sortable and searchable; to 
search, simply start typing into the field at the top of the column - the 
searching is a "substring" comparator for "name", "type" and "date". For "size", you can filter by 
typing in the number of bytes; any items *larger* in size than that will be shown.

The name of each file is clickable; upon doing so the file will open in a new browser tab. This 
was chosen over a strict "straight download" behaviour, as it is faster to debug whether the correct 
file is uploaded.

When uploading a file, the actual mimetype (from its contents) will be scanned in the backend; therefore 
if you upload a "jpg" that is actually a "pdf" then the filename will have extension jpg in the frontend 
but the mimetype will be "application/pdf".

### Possible improvements

* Store files in S3 and allow retrieval of them via signed urls with an expiry datetime.
* Remove security warnings from some dependencies (some have warning level 1)
* Pagination/filtering is within the react-table (frontend) component; medium term for 
performance this should be moved server side, particular for more complex types of ordering/filtering. The 
react-table component can be a controlled component for this purpose easily.
* Allow for instant download as opposed to just being able to view the file.
