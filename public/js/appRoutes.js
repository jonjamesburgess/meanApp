// public/js/appRoutes.js
angular
    .module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider

            // home page
            .when('/', {
                templateUrl: 'partials/home',
                controller: 'MainController'
            })

            // nerds page that will use the NerdController
            .when('/nerds', {
                templateUrl: 'partials/nerd',
                controller: 'NerdController'
            })

            // nerds page that will use the NerdController
            .when('/geeks', {
                templateUrl: 'partials/geek',
                controller: 'GeekController'
            });

        $locationProvider.html5Mode(true);

    }]);