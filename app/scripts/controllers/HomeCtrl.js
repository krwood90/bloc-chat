(function() {
    function HomeCtrl(Room, Message, $scope, $cookies, ModalCtrl) {
        $scope.currentRoom = null;
        $scope.messages = null;

        var home = this;
        home.rooms = Room.all;

        home.username = $cookies.get('blocChatCurrentUser');
        home.selectRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);
        };

        this.send = Message.send;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', '$cookies', HomeCtrl]);
})();