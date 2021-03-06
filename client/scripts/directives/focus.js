define([ 'angular' ], function(angular) {
  'use strict';

  var FocusDirective = ['$compile', function ($compile) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        var focus = attrs['focus'];

        if (focus) {
          element.focus();
        }

      }
    };
  }];

  return FocusDirective;
});
