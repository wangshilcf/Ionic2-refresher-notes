# Notes for Ionic 2

- To add pages, add a folder with html, css or scss and ts file.
  - import component and navController from ionic
  - with '@Component' decorator, select selector:<relevant typescript> and templateUrl:<relevant html>
  - if you are using tabs, import page in tabs.ts and tabs.html respectively
  - Add any pages to app.module in src/app dir

- create async requests in a services folder
  - <description>.service.ts

- Angular Notes
  - Events can be written as (click)="function()"
  - ngmodel: "binds an input, select, text area to a property on its scope using ngmodelcontroller."

- adding Ios or Cordova
  - cordova platform add ios/android

- For android APK
  - ionic build android
# Ionic2-refresher-notes
