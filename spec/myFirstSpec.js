/* global expect */

it("works", function(){
	expect(1).toBe(1);
});

describe("variables, and how they work", function(){
	var numberOfKittens;
	it("can be assigned a value", function(){
		numberOfKittens = 23;
		expect(numberOfKittens).toBe(23);
	});
	
	it("can be assigned a value from another variable", function(){
		var numberOfKittens = 23;
		var numberOfKittensThatAreCute;
		numberOfKittensThatAreCute = numberOfKittens;
		expect(numberOfKittensThatAreCute).toBe(23);
	});
	
	it("can contain text", function(){
		var ericsName = "Eric";
		expect(ericsName).toBe("Eric");
	});
});

describe("functions and how they work", function(){
	it("can return a value", function(){
		var getTheNumberOne = function(){
			return 1;
		};
		
		var theNumberOne = getTheNumberOne();
		expect(theNumberOne).toBe(1);
	});
	
	it("can return nothing at all", function(){
		var getUndefined = function(){};
		var result = getUndefined();
		expect(result).toBe(undefined);
	});
	
	it("can take arguments", function(){
		var doesMomThinkICanHaveACat = function(canIHaveACat){
			return canIHaveACat;	
		};
		var result = doesMomThinkICanHaveACat(true);
		expect(result).toBe(true);
	});
});

describe("objects and how they work!", function(){
	it("can have a property", function(){
		var cat = {
			legs: 4
		}; 
		expect(cat.legs).toBe(4);
		expect(cat["legs"]).toBe(4);
	});
	
	it("can have text as a property name", function(){
		var cat = {
			"some property": 123
		};
		expect(cat["some property"]).toBe(123);
	});
	
	it("can have another object as a property", function(){
		var cat = {
			face:{eyes: 2}
		}

		expect(cat.face).toEqual({eyes: 2});
	});
});

it("can add strings of text together", function(){
	var ericsFirstName = "Eric";
	var ericsLastName = "Smith";

	var ericsFullName = ericsFirstName + " " + ericsLastName;
	expect(ericsFullName).toBe("Eric Smith");
});

describe("doing things conditionally", function(){
	var eatOnlyWhenHungry, eat;
	beforeEach(function(){
			eat = jasmine.createSpy("eatFoodSpy");
			eatOnlyWhenHungry = function(hungry){
				if( hungry ){
					eat();
				}
			};
	});
	
	describe("eatOnlyWhenHungry", function(){
		describe("when hungry is true", function(){
			it("eats", function(){
				eatOnlyWhenHungry(true);
				expect(eat).toHaveBeenCalled();
			});
		});
		
		describe("when hungry is false", function(){
			it("does not eat", function() {
			  eatOnlyWhenHungry(false);
				expect(eat).not.toHaveBeenCalled();
			})
		})
	});
});

describe("doing things more than once", function(){
	describe("while loops", function(){
		
	});
});