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

## Installation

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
 
### Instructions

The single view shows a table of uploaded files. Clicking "upload file" opens 
a dialog in which you can select a file for upload. Click "upload" to 
upload the file.

The "name", "type" and "date" columns are all sortable and searchable; to 
search, simply start typing into the field at the top of the column - the 
searching is a "startsWith" comparator for simplicity.

### Possible improvements

* Store files in S3 and allow retrieval of them via signed urls with an 
expiry datetime.
* Remove security warnings from some dependencies (some have warning level 1)
* Pagination/filtering is within the react-table (frontend) component; medium term for 
performance this should be moved server side, particular for more complex types of ordering/filtering. The 
react-table component can be a controlled component for this purpose easily.
