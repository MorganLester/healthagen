app.directive('holderFix', function () {
    return {
        link: function (scope, element, attrs) {
            Holder.run({ images: element[0], nocss: true });
        }
    };
});

app.directive('loadDispatcher', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            if (scope.$last === true) {
                $timeout(function () {
                     $('.eq-height').matchHeight();
                });
            }
        }
    };
});

app.directive('stick', ['$window', function ($window) {
  return {
    require: '^?uiScrollfixTarget',
    link: function (scope, elm, attrs, uiScrollfixTarget) {
      var top = elm[0].offsetTop,
          $target = uiScrollfixTarget && uiScrollfixTarget.$element || angular.element($('.scroller'));

      if (!attrs.uiScrollfix) {
        attrs.uiScrollfix = top;
      } else if (typeof(attrs.uiScrollfix) === 'string') {
        // charAt is generally faster than indexOf: http://jsperf.com/indexof-vs-charat
        if (attrs.uiScrollfix.charAt(0) === '-') {
          attrs.uiScrollfix = top - parseFloat(attrs.uiScrollfix.substr(1));
        } else if (attrs.uiScrollfix.charAt(0) === '+') {
          attrs.uiScrollfix = top + parseFloat(attrs.uiScrollfix.substr(1));
        }
      }

      function onScroll() {
        // if pageYOffset is defined use it, otherwise use other crap for IE
        var offset;
        if (angular.isDefined($window.pageYOffset)) {
          offset = angular.element($('.scroller')).scrollTop();
        } else {
          var iebody = (document.compatMode && document.compatMode !== 'BackCompat') ? document.documentElement : document.body;
          offset = iebody.scrollTop;
        }
        if (!elm.hasClass('stucky') && offset > attrs.uiScrollfix) {
          elm.addClass('stuck');
        } else if (elm.hasClass('stuck') && offset < attrs.uiScrollfix) {
          elm.removeClass('stuck');
        }
      }

      $target.on('scroll', onScroll);

      // Unbind scroll event handler when directive is removed
      scope.$on('$destroy', function() {
        $target.off('scroll', onScroll);
      });
    }
  };
}]).directive('uiScrollfixTarget', [function () {
  return {
    controller: ['$element', function($element) {
      this.$element = $element;
    }]
  };
}]);