var app = angular.module('racingFrogs', []);
app.controller('MainController', MainController);
//No need to change anything above this line.

function MainController($timeout) {
    var vm = this; //instead of using this when refering to the controller, let's use vm. It will make things easier.
    
    vm.frogs = [new Frog('Kermit', 50), new Frog('Michigan J.', 10), new Frog('Mr. Toad', 0), new Frog('Hypnotoad', 14)];

    function Frog(name, posX) {
        this.name = name;
        this.posX = 0;
    }

    vm.addFrog = function (name) {
        //console.log("working")
        vm.frogs.push(new Frog(name, 0));
    }

    vm.start = function () {
        vm.reset();
        vm.racing = true;
        vm.race();
    }

    function _checkWin(){
        vm.frogs.forEach(function(frog){
         if (frog.posX >= 91) {
                    alert(frog.name + "," + "Wins!");
                    vm.racing = false;
                }   
        })
    }
    
    vm.race = function () {
        _checkWin();
        if (vm.racing) {
            vm.frogs.forEach(function (frog) {
                if (frog.posX < 100) {
                    frog.posX += Math.floor(Math.random() * 10);
                };

                // if (frog.posX >= 98) {
                //     alert(frog.name + "," + "Wins!");
                //     vm.racing = false;
                // }
            })
        $timeout(vm.race, 300);            
        }
         
        // vm.racing = true;
        // while(vm.racing)
        // vm.frogs.forEach(function(frog){
        //    if(frog.posX < 100){
        //    frog.posX += Math.floor(Math.random() * 10);
        //    };
          
        //    if(frog.posX >= 98){
        //        alert(frog.name + "," + "Wins!");  
        //        vm.racing = false;
        //    }
        // })
    }


    vm.reset = function () {
        // console.log("Working")
        vm.frogs.forEach(function (frog) {
            frog.posX = 0;
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
