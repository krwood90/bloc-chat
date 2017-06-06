(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/userName.html',
                controller: 'UserModalCtrl',
                controllerAs: 'user',
                size: 'sm',
                backdrop: 'static',
                keyboard: false
            });

        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();