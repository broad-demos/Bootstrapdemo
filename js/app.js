var app = angular.module('demoboostrap',['ngRoute','ngAnimate','ui.router','ui.bootstrap','angularTreeview','angularUtils.directives.dirPagination','simpleGrid']);

function repeat(arr, times) {
        var result = [], i = 0;
        function push(val) { result.push(angular.copy(val)); }
        for (i = 0; i < times; i += 1) {
            angular.forEach(arr, push);
        }
        return result;
    }





