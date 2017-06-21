angular.module('PlanningPokerApp', [])
  .controller('pokerController',['$anchorScroll','$location',
   function( $anchorScroll, $location) {
    var ctrl = this;
    //Scope vars
    ctrl.SelectedCard;
    //State 
    var _SelectState = 'SelectState';
    var _WaitState = 'WaitState';
    var _RevealState = 'RevealState';
    
    ctrl.Cards = [
        {label: '0'},
        {label: '1/2'},
        {label: '1'},
        {label: '2'},
        {label: '3'},
        {label: '5'},
        {label: '8'},
        {label: '13'},
        {label: '20'},
        {label: '40'},
        {label: '100'},
        {label: '?'},
        {label: 'Coffee'},
    ];

    //Will take the cardId and save it. Trigger next state(WaitingPhase)
   ctrl.SelectCard = function (cardId){
    ctrl.SelectedCard = ctrl.Cards[cardId];
    ChangeState(_WaitState);
   }

   //Will reveal the card for the user/s. Triggers next state()
   ctrl.ShowSelectedCard = function() {
       ChangeState(_RevealState);
   }

   //Will restart and let user choose a new estimation card.
   ctrl.Restart = function() {
    ChangeState(_SelectState);
   }

   //Handles state change and animation for the view.
   function ChangeState(state){
       var animationSpeed = 300;
       //Will use jquery to animate transitions between the states.
       switch(state){
           case _SelectState:
            var revealState = $('#RevealState')
            var restartButton = $('#RestartButtonID');
            var flexParent = $('#FlexParentID');
            var selectState = $('#SelectState');
            revealState.fadeOut(animationSpeed);
            restartButton.fadeOut(animationSpeed, function() {
                flexParent.fadeIn(animationSpeed);
                selectState.fadeIn(animationSpeed);
            });
           break;
           case _WaitState:
            var flexParent = $('#FlexParentID');
            var selectState = $('#SelectState');
            selectState.fadeOut(animationSpeed);
            flexParent.fadeOut(animationSpeed, function() {
                var waitingState = $('#WaitingState');
                waitingState.fadeIn(animationSpeed);
            });
            ScrollToTop();
           break;
           case _RevealState:
            var revealState = $('#RevealState')
            var restartButton = $('#RestartButtonID');
            var waitingState = $('#WaitingState');
            waitingState.fadeOut(animationSpeed, function() {
                revealState.fadeIn(200,function() {
                    restartButton.fadeIn(500);
                });
            });
           break;
           default:
           console.log('ChangeState: undefined state')
           break;
       }
   }
   function ScrollToTop(){
            //On mobile/ipad the page will have a more vertical layout. This will scroll the user to the top.
            $location.hash('top');
            $anchorScroll.yOffset = 150;
            $anchorScroll();
   }
  }]);