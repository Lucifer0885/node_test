# node test

## Install Dependancies

### Install/Update node.js
install: `choco install nodejs.install` <br />
update: `choco upgrade nodejs.install` <br />

### Install npm packages
express: `npm i express` <br />
nodemon: `npm i --save-dev nodemon` <br />
ejs: `npm i ejs` <br />

## Adjustments

Edit `package.json`, add <br />
```json
"scripts": {
    "start": "nodemon server.js"
  },
```