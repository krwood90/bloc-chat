(function() {
    function HomeCtrl(Room, ModalCtrl) {
        var home = this;
        home.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();