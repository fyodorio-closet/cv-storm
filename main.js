import 'angular';

(function () {
	angular.module('app', [])
	.component('app', {
		template: `<div>{{$ctrl.test}}</div>`,
		controller: function () {
			this.test = 'test'
		}
	})
})();