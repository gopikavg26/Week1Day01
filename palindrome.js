//4.Create a JavaScript function that accepts a string, reverses it, and checks if the reversed 
// string is a palindrome, then test your function with various strings and print the results. 

// let name='Gopika';
// console.log(name.split('').reverse());


// function reverseName(){
//     let object='UMBRELLA';
//     console.log(object.split('').reverse().join(''));
// }
// reverseName();

// function reverseName(name){
//     let reversed= name.split('').reverse().join('');
//     console .log(reversed);
// }
// reverseName('Tree');


function palindrome(name){
    let reversed="";
    for(let i= name.length-1;i>=0;i--){
        reversed = reversed+name[i];
    }

if(name===reversed){
    console.log('The word is palindrome');
}
else{
    console.log('The word is not palindrome');
}
}
palindrome('level');
palindrome('tree');