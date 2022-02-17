//looping statements
//there are two types of looping statements: for loop and while loop


//for loop : number of times the loop is to be executed is known beforehand

// var count;
// document.write('Starting loop' + '<br>')
// for(count=20; count<30; count++){
//     document.write('current count' + count);
//     document.write('<br>')
// }
// document.write('loop stopped' + '<br>')

// //one more example of for loop

// var b;
// document.write('starting loop' + '<br>')
// for(b = -15; b<0; b++){
//     document.write('current count' + b)
//     document.write('<br>')
// }
// document.write('loop stopped')
// document.write('<br>')
// //one more example of for loop

// var c;
// document.write('new counting' + '<br>')
// for(c=100; c<129; c++ ){
//     document.write('current counting' + c)
//     document.write('<br>')
// }
// document.write('loop stopped')
// document.write('<br>')



//while loop: when you don't know how many times a loop will execute at runtime


// var count = 100;
// document.write('starting loop');
// document.write('<br>')
// while(count < 110){
//     document.write('current count ' +count+ '<br>');
//     count++;
// }
// document.write('loop stopped');
// document.write('<br>')


// //one more example of while loop
// var d = 10;
// document.write('starting loop')
// document.write('<br>')
// while(d<20){
//     document.write('current count ' +d+ '<br>')
//     d++;
// }
// document.write('loop stopped')
// document.write('<br>')


// //one more example of while loop
// var e = -15;
// document.write('startin loop' + '<br>')
// while(e<0){
//     document.write('current counting' +e+ '<br>')
//     e++;
// }
// document.write(' loop stopped')



//conditional statements 
//there are three types of conditional statements: if, if else, switch


//if conditional statement


var age = 38;
if(age>18){
   document.write('person is eligible for driving license')
}
document.write('<br>')
//one more example of if statement

var person = 19;
if(person>1){
    document.write('person has more than one girlfriend')
}
document.write('<br>')

// if else statement
var countries = 193;
if(countries>199){
    document.write('total countries in the world are more than 199')
} else{
    document.write('total number of countries in the world: ' + countries)
}
document.write('<br>')
//one more example of if else statement

var friends = 10;
if(friends>5){
    document.write('total number of friends are more than 5')
}else{
    document.write('total number of friends are less than 5')
}

document.write('<br>')
//switch statement

var x = 5;
switch(x%2){
    case 0: document.write('number is completely divisible by 2')
    break;
    case 1: document.write('number is divisible by 2 but leaves remainder 1')
    break;
    default:
        document.write('this is default case')
}
document.write('<br>')
//one more example of switch statement
var a = 34;
switch(a%5){
    case 0: document.write('this case 0 is true')
    break;
    case 4: document.write('this case 4 is true')
    break;
    default:
        document.write('this default case is true')
}