var app = angular.module("app", []);

    app.factory("GetReddit", function($http) {
        return {
            get: function(callback) {
                return $http.get("http://www.reddit.com/.json").success(callback);
            }
        }
    });

    app.controller("Ctrl", function($scope, GetReddit){
            $scope.title = "First Page",

                $scope.posts = [{
                    nome: "Reddit",
                    local: "http://www.reddit.com/.json"
                }];

                GetReddit.get(function(vendas) {
                    console.log(vendas.data);
                    $scope.vendas = vendas.data.children;
                });

    });







