angular.module('inboxApp')
.controller('navController', navBarFun)

function navBarFun() {
  const vm = this;

  vm.selectAll = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = true
    }
  }

  vm.selectNone = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = false
    }
  }

  vm.totalSelected = function(mail) {
    var counter = 0

    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == true) {
        counter++
      }
    }
    return counter
  }

  vm.markAsRead = function() {
    for (var i = 0; i < mail.length; i++) {
      console.log('read works')
    }
  }
}
