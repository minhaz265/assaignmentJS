
// function for converting feet to mile

function feetToMile(feet) {
        if (feet <= 0) {
            return "invalid or negative input"
    } else {
        return feet/5280;
    }
   }
console.log(feetToMile(5280));

// woodCalculator function requires at least 3 parameter, from 0 to upword.

function woodCalculator(numberOfChair, numberOfTable, numberOfBed) {

    if (numberOfChair <0 || numberOfTable <0 || numberOfBed <0 ) {
        return "invalid input // give at least 3 parameter from 0 to upword";
    }else{
    return (numberOfChair *1 ) + (numberOfTable * 3) + (numberOfBed * 5);

    }
}

 console.log(woodCalculator(4,1,2));


// brickCalculator function 

function brickCalculator(numberOfBuildingFloor) {

    if (numberOfBuildingFloor <= 0) {
               return "invalid input"; 

    } else if (numberOfBuildingFloor >= 20){
        return (10*15*1000) + (10 * 12 * 1000) + (numberOfBuildingFloor -20) * 10 * 1000;

    } else if(numberOfBuildingFloor > 10 && numberOfBuildingFloor < 20){
        return (10*15*1000) + (numberOfBuildingFloor -10) * 12 * 1000;
    } 
    else if(numberOfBuildingFloor <= 10){
        return numberOfBuildingFloor * 15 * 1000;
    }
 }
  console.log(brickCalculator(15));


// tinyFriend Function 
function tinyFriend(friendNameList) {

  if (Array.isArray(friendNameList)){
    let tinyName = friendNameList[0];
    for (let i = 0; i < friendNameList.length; i++) {
        
             if(tinyName.length > friendNameList[i].length){
           tinyName = friendNameList[i];
       }
          } 
    return tinyName;

  }
  else{
    return "please call tinyFriend function passing a array"

  }


}

let myFriendsName = ["Mohammad", "Abu", "Hanif", "Alamgir", "Jahangir"];

console.log(tinyFriend(myFriendsName));
