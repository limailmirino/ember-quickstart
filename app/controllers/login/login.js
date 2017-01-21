import Ember from 'ember';

export default Ember.Controller.extend({

  loginFailed: false,
  isProcessing: false,
  actions:{
    login: function() {

      let user =this.get("username");
      let password =this.get("password");
      $.post("/login", {
        username: user,
        password: password

      }).then(function() {

        document.location = "/welcome";

      }, function() {

        this.set("loginFailed", true);

      }.bind(this));
    }
  }

});
