(function() {
    'use strict';

    angular
        .module('jhipsterSampleGatewayApp')
        .controller('BankAccountDeleteController',BankAccountDeleteController);

    BankAccountDeleteController.$inject = ['$uibModalInstance', 'entity', 'BankAccount'];

    function BankAccountDeleteController($uibModalInstance, entity, BankAccount) {
        var vm = this;

        vm.bankAccount = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            BankAccount.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
