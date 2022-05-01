class Human {
    gender = 'male';
  
    printMyGender = () => {
      console.log(this.gender);
    }
   
  }
  
  class Person extends Human {
      name = 'Max';
      gender = 'female';
    
    printMyName = () => {
      console.log(this.name);
    }
    
  }
  
  const person = new Person();
  person.printMyName();
  person.printMyGender();
  
  // Next generation JS code using ES6
  // To run this code type on the terminal --> $ node [fileName]