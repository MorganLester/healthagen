angular.module('helloDirective', []).directive('heyhey', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
          element.waypoint('sticky', {
            context: '.page-scroll',
            offset: -140
          });

    }
  };
});
