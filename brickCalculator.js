function brickCalculator(floorNo) {
    if ( floorNo <= 10 && floorNo > 0 ) {
       var floorHeight = floorNo * 15; 
        var brickNo = floorHeight * 1000; 
        }
    else if ( floorNo <= 20 && floorNo > 10) {
         floorHeight = (floorNo - 10 )  * 12 + (15*10);
        var brickNo = floorHeight * 1000; 
        }
    else if (floorNo > 20) {
         floorHeight = (floorNo - 20 ) * 10 + (12*10) + ( 15*10 );
        var brickNo = floorHeight * 1000; 
        }
        else{
            brickNo = "Your input is invalid";
        }
    return brickNo;
}
var brick = brickCalculator(40);
console.log(brick);