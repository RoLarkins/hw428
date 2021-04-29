function alphabeticalOrder(arr) {
   

  return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });

   
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);






  var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  

  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });

 
}
nonMutatingSort(globalArray);








function splitify(str) {
    
  
  return str.split(/\W/);

    
  }
  splitify("Hello World,I-am code");







  function sentensify(str) {
  
  
return str.split(/\W/).join(" ");

 
}
sentensify("May-the-force-be-with-you");







function urlSlug(title) {
    return title
      .split(" ")
      .filter(substr => substr !== "")
      .join("-")
      .toLowerCase();
  }
  
  



  
  
  
  
  
  
  function checkPositive(arr) {
    
  
    return arr.every(function(value) {
      return value > 0;
    });
  
    
  }
  checkPositive([1, 2, 3, -4, 5]);



  
  
  
  
  function checkPositive(arr) {
      
    return arr.some(elem => elem > 0);
  
   
  }
  checkPositive([1, 2, 3, -4, 5]);



  
  
  
  
  function add(x) {
   
  
    return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
  
    
    
  }
  add(10)(20)(30);