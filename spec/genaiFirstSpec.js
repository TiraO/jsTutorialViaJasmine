describe("Genai learns stuff", function(){
  
  describe("functions", function(){
    it("can return a value", function(){
      var funstuff=function(){
        return 12;
      }
      
      expect(funstuff()).toEqual(12);
    });
    
    it("can take arguments", function(){
      var funstuff=function(thing1){
        return thing1+12;
      }
      expect(funstuff(0)).toEqual(12);
      expect(funstuff(12)).toEqual(24);
    });
    

  });
  
  describe("variables", function(){
    it("can be assigned a value");
    
    it("can be assigned a transformation of itself");
    
    
  });
  
  describe("hash objects", function(){
    var thing, alsoThing;
    beforeEach(function(){
      thing = {
        name: 'Genai',
        stuff: 'stuff 1'
      };
      alsoThing = thing;
    });
    
    it("can have things in it", function(){
      expect(thing.name).toEqual('Genai');
      expect(thing['stuff']).toEqual('stuff 1');
    });
    
    it('can change', function(){
      thing.stuff='banana'
    
      expect(thing.stuff).toEqual('banana');
      expect(alsoThing).toBe(thing);
    });
    
    it("can get new properties", function(){
      thing.happy='sad'
      expect(thing.happy).toEqual('sad')
    });
    
    it("can have properties that are objects", function(){
      var otherThing = {
          sad: 'ecstatic'
      };
      thing.otherThing = otherThing;
      expect(thing.otherThing).toBe(otherThing);
    });
    
    it("can have properties that are functions", function(){
      var love = function(affection,compatibility){
        return affection*compatibility;

      };
      thing.love = love;
      expect(thing.love(8,2)).toEqual(16)
    });
    
    it("can have functions that know about the object itself", function(){
      var getHappy = function(){
        return this.happy;
      };
      
      thing.job = getHappy;
      
      thing.happy='sad';
      expect(thing.job()).toEqual('sad');
      thing.happy='ok';
      expect(thing.job()).toEqual('ok');
    });
  });
  
  describe("truthiness", function(){
    
    it("can be true", function(){
      expect(true).toBe(true);
      expect(true).toBeTruthy();
    });
    
    it("is not truthy if it is undefined", function(){
      expect(undefined).not.toBeTruthy();
      expect(undefined).toBeFalsy();
    });
    
    describe("if", function(){
      it("can execute the block of code when the expression is truthy but not true", function(){
        var empathy = 0;
        var expression = 7;
        if(expression){
          empathy = 10;
        } else {
          empathy = 1;
        }
        expect(empathy).toEqual(10);
        expect(expression).not.toBe(true);
        expect(expression).toBeTruthy();
      });
    });
    
    describe("looping", function(){
      it("can do something three times", function(){
        var empathy = 1;
        expect(empathy).toEqual(1);
        for(var i = 0; i < 3; i = i +1){
          empathy = empathy + 1;
        }
        expect(empathy).toEqual(4);
      });
      
      xit("can put all the values on the object into one long string", function(){
        var cheese = {
          fingers: 3,
          mood: 'happy',
          taste: 'ok'
        };
        
        var stringThing = '';
        _.each(cheese, function(one){
          stringThing = stringThing + one;
        });
        expect(stringThing).toEqual('3happyok');
      });
    });
  });
  
});