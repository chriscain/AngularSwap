myApp.directive('slider', function() {
	return {
		link: function(scope, elem, attrs) {

			scope.$watch(elem.val(), function() {
                console.log("I see a data change!");
            });

			elem.noUiSlider({
				range: [0,1440],
				start: [690,750],
				step: 30,
				connect: true
			});
		}
	};
});