(function(){
  angular
  .module('movieBrowerser',[])
  .directive('movies', movie)
  // .directive('recentMovies',recentMovies)
  // .controller('homeCtrl', home)
  .controller('mainCtrl', main);

  // function recentMovies(){
  //   return{
  //     restrict: 'E',
  //     templateUrl: 'js/templates/recentMovies.html'
  //   }
  // }
  function movie() {
    return {
      restrict: 'E',
      templateUrl: 'js/templates/movies.html'
    }
  }
  // function home($http,$scope){
  //   var vm = this;
  //   vm.movieName = '';
  //   vm.movieList = [];
  //   vm.printmovie = printmovie;
  //
  //   var API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=dc48448cdc32bcc375a2c518042f49b8&language=en-US'
  //
  //   function printmovie() {
  //
  //     var moviesUrl = API_URL;
  //     $http.get(movieUrl).then(function(response) {
  //      vm.movieName= '';
  //      vm.movieList= response.data.results;
  //    }
  //   }
  //   $scope.recentMovie = printmovie();
  // }


  function main($http, $timeout) {
    var vm = this;
    vm.movieName = '';
    vm.movieList = [];
    vm.loading= false;
    vm.printmovieName = printmovieName;


    var API_URL='https://api.themoviedb.org/3/search/movie?api_key=dc48448cdc32bcc375a2c518042f49b8&query=';

    function printmovieName() {
       var movieUrl= API_URL + vm.movieName;
       vm.loading= true;
       $http.get(movieUrl).then(function(response) {
        vm.movieName= '';
        $timeout(function () {
          vm.movieList= response.data.results;
          vm.loading= false;
        }, 1000);

       });

    }
  }

})();
