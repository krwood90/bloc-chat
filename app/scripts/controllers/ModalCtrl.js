(function() {
    function ModalCtrl($uibModal, Room) {
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modal'
            });

            modalInstance.result.then(function(name) {
                this.room = name;
                Room.add(this.room);
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);

})();