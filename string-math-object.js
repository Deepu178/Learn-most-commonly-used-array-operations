//most commonly used string object


//charAt() string object

var Greet = 'Welcome to edureka internship'
console.log(Greet.charAt(5))

//one more example of charAt
var city = 'Welocme to Delhi'
console.log(city.charAt(1))


//concat string object
var greet = 'Welcome to my sweet home '
var city = 'Welocme to Kanpur'
var str1 = greet.concat(city)
var str2 = greet + city
console.log(str1)
console.log(str2)


//one more example of concat string object
 var job = 'I am working at Google India. '
 var home = 'I am currently living in bay area'
 var str1 = job.concat(home)
 var str2 = job + home
 console.log(str1)
 console.log(str2)


 //split method

var str = 'Welcome to Europa, sattelite of Sattern'
var spl = str.split(" ")
console.log(spl)
console.log(str)

//one more example of split method

var state = 'Welcome to Uttar Pradesh'
var spl = state.split(" ")
console.log(spl)
console.log(state)



//example of slice method
var city = 'I live in Kanpur city'
var slic = city.slice(0, 6)
console.log(slic)
console.log(city)

//one more example of slice method

var movie = 'I love Iron man and Captain America series'
var slic = movie.slice(0, 13)
console.log(slic)
console.log(movie)





//Math object
var x = 2.4
var ceil = Math.ceil(x)
var floor = Math.floor(x)
var sqrt = Math.sqrt(x)

console.log('ceil of ' + x + '=' + ceil)
console.log('floor of' + x + '=' + floor)
console.log('sqrt of ' + x + '=' + sqrt)

//one more example of math object
var a = 6.25
var ceil = Math.ceil(a)
var floor = Math.floor(a)
var sqrt = Math.sqrt(a)

console.log('ceil of '+ a + '=' + ceil)
console.log('floor of ' + a + '=' + floor)
console.log('square root of ' + a + '=' + sqrt)


//more example of math object

var radius = 10
var Area = (Math.PI)*(Math.pow(radius, 2))

console.log('Area of given cirle ' + Area)

//area rectangle
var length = 10
var width = 12
var Area = (Math.pow(length, 1))*(Math.pow(width, 1))
console.log('Area of given rectangle ' + Area)

//area of square
var a = 23
var Area = (Math.pow(a, 2))
console.log('Area of given square ' + Area)

//Total surface area of sphere
var radius = 10
var Area = 4*(Math.PI)*(Math.pow(radius, 2))
console.log('Area of give sphere ' + Area)


