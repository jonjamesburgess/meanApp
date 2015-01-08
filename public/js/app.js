// public/js/app.js
angular
    .module('meanApp', [
        'ngRoute', 
        'appRoutes', 
        'MainCtrl', 
        'GeekCtrl', 
        'NerdCtrl', 
        'NerdService'
    ]);