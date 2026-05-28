//1.Write a JavaScript function named `isOddOrEven` that takes an integer
//  as input and returns `Odd` if the number is odd and `"Even"` if the number is even. 

// let num = 2;
// if (num%2==0){
//      console.log('The number is even');
// }
// else{
//  console.log('The number is odd');
// }

function isOddOrEven (num){
if (num%2==0){
     console.log('The number is even');
}
else{
 console.log('The number is odd');
}

}
isOddOrEven(1);
isOddOrEven(2);

//2.Create a JavaScript function that determines if a number 
// is positive, negative, or zero and returns a corresponding string indicating the type. 

function numbertype(num){
     if(num>0){
          console.log('The number is positive number');
     }
     else if(num<0){
          console.log('The number is negative number');
     }
     else {
       console.log('The number is zero');
     }
}
numbertype(100);
numbertype(-13);
numbertype(0);


//3.Create and call two JavaScript functions: `launchBrowser` with `if-else` 
// for browser launch messages, and `runTests` with `switch` for test type messages. 

function launchBrowser(browserName){
     if(browserName==='chrome'){
          console.log('Welcome, chrome browser is launched');
     }
     else{
          console.log('Its not a chrome browser');
     }
}

function runTests(testType){
    switch(testType){
       case 'smoke':
          console.log('This is smoke testing');
          break;
       case 'sanity':
          console.log('This is sanity testing');
          break;
       case 'regression': 
           console.log('This is regression testing');
           break;
       default:
          console.log('No testing is happening')    

    }

}

launchBrowser('chrome');
runTests('smoke');


//4.Create a JavaScript function that accepts a string, reverses it, and checks if the reversed 
// string is a palindrome, then test your function with various strings and print the results. 

