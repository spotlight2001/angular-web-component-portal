# PoC Angular App Shell with Modules as Web Components

## Overview

An application /portal has two sub-modules 
* /client-a
* /client-b

which are loaded as web components


* Angular 9
* non monorepo setup
* ngx-build-plus for web component JS bundling

## Features

* router-outlet in shell (/portal)
* router-outlets in every web component module
* navigation works via routerLink
* router urls work with pretty urls (not hash)

### Debugging

I am not using src/app, but 
* src/portal
* src/client-a
* src/client-b

so webpack doesnt overlay classes with duplicate names

## local setup

```
cd portal
npm install
cd ..

cd client-a
npm install
cd ..

cd client-b
npm install
cd ..
```

run: (in separate terminals)
```
./portal.sh
./client-a.sh
./client-b.sh
```

browser:
```
http://localhost:7200/portal
``` 

## TODO

* in web components get base-ref url via TS (not constant /portal)
* configure JIT build and run from dist
* configure AOT prod build and run from dist
* check polyfills for IE11