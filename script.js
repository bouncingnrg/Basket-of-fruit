// calories of each indervidual fruit
var orange = 87;
var banana = 121;
var apple = 116;

// number of fruit in each basket - converted into total calories.
/*
var basketOne = 4*orange + 2*banana + 4*apple;
var basketTwo = 6*orange + 1*banana + 3*apple;
var basketThree = 2*orange + 6*banana + 2*apple;
*/

function totalNumberOfruit(totalOrange, TotalBanana, TotalApple) {
    totalCalories = totalOrange*orange + TotalBanana*banana + TotalApple*apple;
    return totalCalories;   
    
}

var totalCalories;

var basketOne = totalNumberOfruit(4, 2, 4); // 1054 Calories, average 105.4
var basketTwo = totalNumberOfruit(6, 1, 3); // 991 Calories, average 99.1
var basketThree = totalNumberOfruit(2, 6, 2); // 1132 Calories, average 113.2



function averageFruitCalories (BasketName, totalCaloriesInBasket){
    var averageCalories = totalCaloriesInBasket/10;
        console.log(BasketName + ' has a total of ' + totalCaloriesInBasket + ' calories in the basket, and an average of ' + averageCalories + ' calories per item.');
   }

averageFruitCalories('Basket 1', basketOne);
averageFruitCalories('Basket 2', basketTwo);
averageFruitCalories('Basket 3', basketThree);
