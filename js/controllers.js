var newsReaderControllers = angular.module('newsReaderControllers', []);

newsReaderControllers.controller('HeadlinesController', ['$scope', 'NewsService',
    function($scope, NewsService) {
        $scope.headlines = [];
        $scope.loading = true;

        NewsService.getHeadlines().$promise.then(function(response) {
            $scope.headlines = response.articles;
            $scope.loading = false;
        }, function(error) {
            console.error('Error fetching headlines:', error);
            $scope.loading = false;
        });
    }
]);

newsReaderControllers.controller('CategoriesController', ['$scope', 'NewsService',
    function($scope, NewsService) {
        $scope.categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
        $scope.selectedCategory = 'general';
        $scope.articles = [];
        $scope.loading = false;

        $scope.loadCategory = function(category) {
            $scope.loading = true;
            $scope.selectedCategory = category;
            
            NewsService.getByCategory({
                category: category
            }).$promise.then(function(response) {
                $scope.articles = response.articles;
                $scope.loading = false;
            }, function(error) {
                console.error('Error fetching category news:', error);
                $scope.loading = false;
            });
        };

        // Load default category
        $scope.loadCategory('general');
    }
]); 