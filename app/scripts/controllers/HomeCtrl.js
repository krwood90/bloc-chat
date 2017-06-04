(function() {
    function HomeCtrl(Room, Message, $scope, ModalCtrl) {
        $scope.currentRoom = null;
        $scope.messages = null;

        var home = this;
        home.rooms = Room.all;

        home.selectRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();