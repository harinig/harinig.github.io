/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope ) {
    $scope.inputText = 'The, q,ui,ck br,own fo,x ,jumps, ov,er t,he l,azy dog,';

    $scope.onBtnReverseClick = function () {
      var inputText = $scope.inputText;
      $scope.reversedText = "";
      if(inputText !== undefined){      
        $scope.reversedText = stringReverse(inputText);
      }
    };
    
    stringReverse = function (inputText) {
      var stringSplit = inputText.split(",");

      var reversedTextTemp = inputText.replace( /,/g , "").split("").reverse().join("");
      var reversedTextFinal = "";

      var end = reversedTextTemp.length;
      var start = 0;
      for(var i=0; i<stringSplit.length; i++){
        var length = stringSplit[i].length;
        if( length > 0){
          end = start + length ;
          var substring = reversedTextTemp.substring(start, end);
          reversedTextFinal = reversedTextFinal + substring;
          start = end;
        }

        if( i !== stringSplit.length-1){
          reversedTextFinal += ",";
        }
          
      }

      return reversedTextFinal;
    };

});

