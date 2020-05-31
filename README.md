# AngularPwaDemo

## To Create the new project
ng new angular-pwa-demo
cd angular-pwa-demo

## To install PWA
ng add @angular/pwa

## To install Angular Materials (Optional, only install if you are using Materials)
ng add @angular/material

## To create the production build as PWA is not supported in local dev builds
ng build -–prod

## To create a local HTTP Server to serve the production build of the app
npm install –g http-server

## All prod build is available in Dist folder so we need to move to the dist folder & expose the HTTP Server & start the same
cd dist/angular-pwa-demo

## start the http server in dist folder to serve the prod application
http-server -o

## To access the application (-o should open the app by default)
http://127.0.0.1:8080/