import Ember from 'ember';

export default Ember.Component.extend({

	didRender() {

		this.$('#start-date').datepicker();
		this.$('#end-date').datepicker();

	}

});
