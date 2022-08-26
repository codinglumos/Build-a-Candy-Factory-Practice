
//Create an object for the elements of creating a candy in a factory to be stored in the beginning

//Define a "buy chocolate" funtion that accepts no specfic parameters
//Add a chocolateType property with the value of "Milk Chocolate"
//Return chocolateType
const buyChocolate = () => {
    const chocolateType = {type:"Milk Chocolate"}
    return chocolateType
    }
let candy = buyChocolate ()

//Define a "add flavoring" funtion that accepts a flavor object as a parameter
//Add a flavor property with the value of "Mint"
//Return flavor
const addFlavoring = (chocolateType) => {
    chocolateType.flavor = "Mint"
    return chocolateType
}
let addFlavor = addFlavoring (candy)

//Define a "make bark mixture" funtion that accepts a barkmixture object as a parameter
//Add an if else statement about the mixture that includes if the flavor is mint or something else
    //if mint then bark mixture is true because that's the falovr we want to mix
    //if the flavor is not mint then the value of barkmixture is false because we are not going to mix that one
//Return barkmixture
const makeBarkMixture = (chocolateType) => {
    if (chocolateType.flavor === "Mint") {
        chocolateType.mixed = true
    } else {
        chocolateType.mixed = false
    }
    return chocolateType
}
let mixture = makeBarkMixture (addFlavor)

//Define a "bakedCandy" function that accepts bakedBark as a parameter
//Add an if else statement about the barkMixture that the output is true
    //if true the flavor of the barkMixture is true (mint)
        //then add a baked property to the object with the value of true
    //else the flavor is not mint 
        //then add a baked property to the object with the value of false
//Return barkmixture
const bakedCandy = (chocolateType) => {
    if (chocolateType.mixed === true) {
        chocolateType.baked = true
    } else {
        chocolateType.baked = false
    }
    return chocolateType
}
let bakeCandy = bakedCandy (mixture)

//Define a "breakBark" function that accepts -- as a parameter
//Add an if block reffering to the baked property above
    //If the baked property above is true
        //Then console.log("Mint Chocolate Bark Piece")
const breakCandy = (chocolateType) => {
    if (chocolateType.baked === true) {
        chocolateType.break = true
    }

  return chocolateType
}
let brokenCandy = breakCandy (bakeCandy)
//Call the functions above to create the candy

console.log(brokenCandy)

/*for (let currentAnimal of animals) {
    let randomNum = Math.ceil(Math.random() * 6);
    // Invoke function: Eventually, call func 1 here with parameters animal and holdingAreaNum
    let chosenAnimal = addHoldingArea(currentAnimal, randomNum);
    let weighedAnimal = addWeight(currentAnimal, randomNum)
    //console.log(weighedAnimal);
    let fedAnimal = addFood(currentAnimal)
    //console.log(fedAnimal)
    let tempedAnimal = addTemp(currentAnimal)
    //console.log(tempedAnimal)
    let animalStool = addStool(currentAnimal)
    console.log(animalStool)
   }
   */




   /*//Define a holding area function that accepts animal object and random holding area number as parameters
//Add a holdingArea property with the value equal to the random number
const addHoldingArea = (animal, holdingAreaNum) => {
    animal.holdingArea = holdingAreaNum;
    return animal;
   };*/

/* TRY THIS MONDAY!!!!:
function createChassis() {
    // Create a new object. No properties yet.
        const newChassisObject = {}
        newChassisObject.body = "Fever"
    //WHEELS- The addWheels() function should have a parameter for the incoming chassis object. It should add a new property to that object named wheels with a value of 4. The function should return the chassis object.
        newChassisObject.wheels = 4
    //ENGINE-The addEngine() function should have a parameter for the incoming chassis object. It should add a new property to that object named engine with a value of "4.8L". The function should return the chassis object.
        newChassisObject.engine = "4.8L"
    //STEEING WHEEL-The addSteeringWheel() function should have a parameter for the incoming chassis object. It should add a new property to that object named steeringWheel with a value of "Tilting". The function should return the chassis object.
        newChassisObject.steeringwheel = "Tilting"
    //DRIVETRAIN-The addDriveTrain() function should have a parameter for the incoming chassis object. It should add a new property to that object named driveTrain with a value of "Two wheel drive". The function should return the chassis object.
        newChassisObject.drivetrain = "Two wheel drive"
    
    
        return newChassisObject
    }
    console.log(createChassis())*/
