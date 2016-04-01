var app = angular.module('portfolio-projects',[]);

app.directive('projectDescription', function () {
    return {
        restrict: 'E',
        templateUrl: 'project-description.html'
    };
});

app.directive('projectGallery', function () {
    return {
        restrict: 'E',
        templateUrl: 'project-gallery.html',
        controller: function () {
            this.current = 0;

            this.setCurrent = function (set) {
                if (set !== null) {
                    this.current = set;
                } else {
                    this.current = 0;
                }
            };
        },
        controllerAs: 'gallery'
    };
});


app.directive('projectTags', function(){
   return {
     restrict: 'E',
     templateUrl: 'project-tags.html'  
   }; 
});

app.directive('copyrightName', ['$filter', function($filter) {
  return { 
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        $element.text($attrs.copyrightName + ' \u00A9 ' + $filter('date')(new Date(), 'yyyy'));
    }
  };
}]);