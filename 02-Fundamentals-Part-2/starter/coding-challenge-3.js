const Mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function() {
        //creating a property inside the function of the object
        this.BMIValue = this.mass / (this.height * this.height)  
        return this.BMIValue;
    },
}

const John = {
    firstName : 'John',
    lastName : 'Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function() {
        //creating a property inside the function of the object
        this.BMIValue = this.mass / (this.height * this.height)  
        return this.BMIValue;
    },   
}

//without using this keyword
// John.BMIValue = John.calcBMI(John.mass, John.height);
// Mark.BMIValue = Mark.calcBMI(Mark.mass, Mark.height);

//with this keyword and creating explicit property on Object
// John.BMIValue = John.calcBMI();
// Mark.BMIValue = Mark.calcBMI();

//calling the calcBMI methods
John.calcBMI();
Mark.calcBMI();

//printing the values
John.BMIValue > Mark.BMIValue ? console.log(`${John.firstName}'s BMI is (${John.BMIValue}) is higher than ${Mark.firstName}'s (${Mark.BMIValue})`) : console.log(`${Mark.firstName}'s BMI is (${Mark.BMIValue}) is higher than ${John.firstName}'s (${John.BMIValue})`) 