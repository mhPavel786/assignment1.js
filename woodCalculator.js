function woodCalculator( chair, table, bed) {
    
    if (chair < 0 || table < 0 || bed < 0 ) {
       var totalWood = "Your input is invaild";
    }
    else{
        var woodChair = chair * 1;
        var woodTable = table * 3;
        var woodBed = bed * 5;
        totalWood = woodChair + woodTable + woodBed;
    }
    return totalWood;
    
}
var result = woodCalculator(0,2,2);
console.log(result);