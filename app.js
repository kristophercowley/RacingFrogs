var app = angular.module('racingFrogs', []);
app.controller('MainController', MainController);
//No need to change anything above this line.

function MainController() {
    var vm = this; //instead of using this when refering to the controller, let's use vm. It will make things easier.
    
    vm.frogs = [new Frog('Kermit', 50),new Frog('Freddy', 10),new Frog('Fraggle',0),new Frog('Dread',14)];
    
    function Frog(name, posX) {
        this.name = name;
        this.posX = 0;
       
    }
    
    vm.race = function(){
       // console.log("Working")
       vm.frogs.forEach(function(frog){
           frog.posX += Math.floor(Math.random() * 10)
           if(frog.posX >= 100){
               alert(frog.name + "Wins");  
           }
       })
        
    }
    
    vm.joe = new Guy("Joe", 100);
    vm.bob = new Guy("Bob", 150);
    vm.bank = 200;

    function Guy(name, startingCash) {
        this.name = name;
        this.cash = startingCash;
        this.giveCash = function (amount) {
            if (amount <= this.cash && amount > 0) {
                this.cash -= amount;
                return amount;
            } else {
                alert("I don't have enough cash to give you! " + this.name + " says..................");
                return 0;
            }

        }
        this.receiveCash = function (amount) {
            if (amount > 0) {
                this.cash += amount;
                return amount;

            } else {
                alert("Not so fast there, that numbers negative!" + this.name + " says.............");
                return 0;


            }
        };
    };
    vm.giveMoneyToJoe = function () {
        if (vm.bank >= 10) {
            vm.bank -= vm.joe.receiveCash(10);
        } else {
            alert("BANKRUPTCY!! The bank is out of money!!!!!")
        }
    }
    vm.receiveMoneyFromBob = function () {
        vm.bank += vm.bob.giveCash(5);
    }
}
