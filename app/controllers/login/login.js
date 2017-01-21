import Ember from 'ember';

export default Ember.Controller.extend({

  loginFailed: false,
  isProcessing: false,
  actions:{
    login: function() {

      let {userName, password} = this.getProperties('username', 'password');

      $.post("/login", {
        username: this.get("username"),
        password: this.get("password")

      }).then(function() {

        document.location = "/welcome";

      }, function() {

        this.set("loginFailed", true);

      }.bind(this));
    }
  }

});
