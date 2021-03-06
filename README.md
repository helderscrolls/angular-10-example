# AngularLand

This application was developed with Angular version 10.1.1 and Bootstrap 5.0.0-alpha1.
It applies Angular Routing, Lazy loading, Server side rendering and Progressive Web App (PWA).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server:SSR

Run `npm run serve:ssr` for a SSR dev server. Navigate to `http://localhost:4000/`. The app will automatically reload if you change any of the source files.  
<br/>
⚠️ You'll have to comment the following code `server.use(enforce.HTTPS({ trustProtoHeader: true }));` on the `server.ts` file. ⚠️

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Build:SSR

Run `npm run build:ssr` to build the project in SSR mode. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Lighthouse Score
![Lighthouse](./src/assets/params/images/lighthouse.png)
