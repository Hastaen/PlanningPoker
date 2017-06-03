angular.module('planningPokerApp', [])
  .controller('pokerController', function() {
    var ctrl = this;
    var stateSelectPhase = true;
    var stateWaitingPhase = false;
    var stateRevealPhase = false;
    
    ctrl.cards = [
        {label: '0', value: 0},
        {label: '1/2', value: 0.5},
        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '3', value: 3},
        {label: '5', value: 5},
        {label: '8', value: 8},
        {label: '13', value: 13},
        {label: '20', value: 20},
        {label: '40', value: 40},
        {label: '100', value: 100},
        {label: '?', value: null},
        {label: 'Coffee', value: null},
    ];
  });