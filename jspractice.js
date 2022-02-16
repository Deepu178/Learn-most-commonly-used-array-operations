//Javascripta arrays operations

//Filter Method
var age = [12, 20, 33, 26, 19, 39, 40]
function checkEligibility(age){
    return age>=18;
}

var selected = age.filter(checkEligibility)
console.log('Ages of selected candidates are ' + selected)

// example of filter method
var students = [29, 58, 5, 38, 14, 48, 51]
function checkEligibility(students){
    return students>=14;
}
 
var selected = students.filter(checkEligibility)
console.log('All selected students are: ' + selected)

var space = [3, 56, 68, 28, 199, 583, 1]
function check(space){
    return space>=3;
}
var selected = space.filter(check)
console.log('Number of satellites by different ' + selected )

//map method
var chocolates = [32, 53, 63, 13, 53, 96, 39, 35]
function check(chocolates){
    return chocolates - 10;
}
var selected = chocolates.map(check)

console.log('Number of chocolates left: ' + selected)

// one more example of map method
var marks = [43, 48, 39, 50, 49]
function number(marks){
    return (marks - 2);
}
var last = marks.map(number)
console.log('Marks of a student last year: ' + last)



//concat method
var a = ['Deependra', 'Sachin', 'Maneesh', 'Pavitra', 'Ankit']
var b = [20, 19, 21, 24, 18]

var c = a.concat(b)
console.log('People ages: ' + c)

//one more example of concatenation
var p = [3, 5, 52, 59, 39, 30]
var q = [1, 58, 85, 9, 3]

var r = p.concat(q)
console.log('Concation of two arrays of natural number; ' + r)

//push method
var w = ['Varanasi', 'Mathura', 'Agra']
w.push('Fatehpur')

console.log('Tourists sites in Uttar Pradesh ' + w)
  

// one more example of push method

var universties = ['SLIET', 'MNIT', 'TEZPUR', 'DU', 'IIT KANPUR']
universties.push('IIT BOMBAY')
console.log('Top engineering college in India ' + universties)




//pop method
var friends =  ['Ankit', 'Atul', 'Mohit', 'Deepak']
friends.pop()
console.log('My childhood friends ' + friends)

//one more example of pop method
var contributor = ['Grandpa', ' Mother', ' Girlfriend', ' Teachers']
contributor.pop()
console.log('People who contributed to my journey ' + contributor)




//find method
var a = [3, 5, 19, 159, 593, 7]
function check(a){
    return a>=24;
}
var b = a.find(check)

console.log('first number greater than or equal to 24: ' + b)

//one more example of find method 

var c = [34, 59, 1, 5, 03, 53, 5, 29, 53]
function check(c){
    return c>5;
}
console.log(c.find(check))




//slice method
var a = [3, 5, 5, 53, 63, 36, 62]
var c = a.slice(0, 6 )
console.log(c)

//one more example of slice method
var city = ['Kanpur', 'Lucknow', ' Ghaziabad', 'Orai']

var places  = city.slice(1, 3)
console.log('famous cities in Uttar Pradesh ' + places)





//sort method
var sorting = [3, 1,  5, 3, 95, 10, 149, 38]
function check(a,b){
    return a - b;
}
var c = sorting.sort(check)
console.log(c)


//one more example of sort method
var a = [3, 5, 23,  6, 63, 64, 3, 53, 23]
function check(a, b){
    return a - b;
}
var b = a.sort(check)
console.log('numbers are arranged in ascending order: ' + b)
