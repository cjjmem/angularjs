

var bookListModule = angular.module('BookListModule',[]);
bookListModule.controller('BooklistCrl',function($scope, $http, $state ,$stateParams){
    $scope.filterOptions = {
        filterText:"",
        userExternalFilter:true
    };
    $scope.totalServerItems = 0;
    $scope.pagingOptions ={
        pageSizers = [5,10,20],
        pageSize = 5,
        currentPage:1
    };
    $scope.setPagingData = function(data, page,pageSize){
        var pageData = data.slice((page -1 ) * page, page *pageSize);
        $scope.books = pageData;
        $scope.totalServerItems = data.length;
        if(!$scope.$$phase){
            $scope.$apply();
        }

    }; 
    console.log($stateParams);
    $scope.getPagedDataAsync = function(pageSize, Page, searchText){
        setTimeout(function(){
            var data ;
            if(searchText) {
                var ft =searchText.toLowerCase();
                $http.get('../data/books' + $stateParams.bookType +'.json')
                    .success(function(largeLoad){
                        data = largeLoad.filter(function(item){
                            return JSON.stringify(item).toLowerCase().indexOf(ft) != -1; 
                        });
                        $scope.setPagingData(data, page, pageSize);
                    });
            } else{
                $http.get('../data/books' + $stateParams.bookType + '.json')
                    .success(function(largeLoad){
                        $scope.setPagingData(largeLoad, page, pageSize);
                    });
            }
        },100);

    };


    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

    $scope.$watch('pagingOptions', function(newVal, oldVal){
        if(newVal !== oldVal && newVal.currentPage !== oldVal.currentPage){
            $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);

    $scope.$watch('filterOptions',function(newVal,oldVal){
        if(newVal !== oldVal) {
           $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);     
        }
    },true);



});



var bookDetailModule = angular.module('BookDetailModule', []);
bookDetailModule.controller('BookDetailCtrl',function($scope, $http, $state ,$stateParams){
    console.log($stateParams);

});





