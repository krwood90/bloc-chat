(function() {
    function UserModalCtrl($scope, $cookies, $uibModalInstance) {
        $scope.username = '';
        $scope.save = function(username) {
            if (username === '') {
                alert('Please enter a valid username');
            } else {
                $cookies.put('blocChatCurrentUser', username);
                $uibModalInstance.close();
            }
        };
    }
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$scope', '$cookies',
            '$uibModalInstance', UserModalCtrl
        ]);
})();