class Car { //a class is a structure or schema of the eventual object that is being created. Think of it as a blueprint anytime a car object needs to be created, 
			//instead of making 10 ojects with properties, you create one class and use the new keyword anytime you want to make a new object with the car blueprint.

	//a constructor is a method which is ran once when the object is being created. The constructor is called with the new keyword using the class name.
	constructor(color, model, style, year){
		this.color = color
		this.model = model
		this.style = style
		this.year = year
	}
	//company(){
	//	if(this.model === 'crv'){
 	//		return "is made by honda"
	//	} else{
	//		return "is made by Nissan"
	//	}
	//};

	//get carBrand(){ //FOR GETTERS IN CLASSES, IT ALLOWS YOU TO CALL METHODS WITHOUT USING PARENTHESES() LIKE SO -> console.log(car2.carBrand)
	//	if(this.model === 'crv'){
	//		return `Honda makes the CRV`
	//	}else{
	//		return `Nissan makes the Rogue`
	//	}
	//}

	get ageOfCarr(){
		let currentYear = 2018
		return currentYear - this.year
	}

	set ageOfCar(num){
		let currentYear = 2018
		this.year = currentYear - num
 
	}
}


let car1 = new Car('black', 'crv', 'suv', 2010)
let car2 = new Car('orange', 'rogue', 'suv', 2008)
console.log(`Before the setter, the Honda CRV is ${car1.ageOfCarr}`)


car1.ageOfCar = 2000	
console.log(`After the setter, the Honda CRV is ${car1.year}`)

