angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('joinEmail', {
    url: '/joinemail',
    templateUrl: 'templates/joinEmail.html',
    controller: 'joinEmailCtrl'
  })

  .state('joinName', {
    url: '/joinname',
    templateUrl: 'templates/joinName.html',
    controller: 'joinNameCtrl'
  })

  .state('joinPassword', {
    url: '/joinpassword',
    templateUrl: 'templates/joinPassword.html',
    controller: 'joinPasswordCtrl'
  })

  .state('tabsController.searchMovies', {
    url: '/searchMovies',
    views: {
      'tab1': {
        templateUrl: 'templates/searchMovies.html',
        controller: 'searchMoviesCtrl'
      }
    }
  })

  .state('tabsController.friendRequests', {
    url: '/friendrequests',
    views: {
      'tab2': {
        templateUrl: 'templates/friendRequests.html',
        controller: 'friendRequestsCtrl'
      }
    }
  })

  .state('tabsController.chat', {
    url: '/chat',
    views: {
      'tab3': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab4': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});