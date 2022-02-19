//create date object 
//there are four ways to create date object

first method
var d = new Date();
console.log(d)
var firstDay = new Date(0)
console.log(firstDay)
console.log(firstDay.getMonth())

//second method
var a = new Date(2135, 03, 12, 34, 34, 23, 0)
console.log(a)
console.log(a.getFullYear())

//third method
var b = new Date('February 18, 2022 12:34:34');
console.log(b)
console.log(b.getSeconds())
//one more example of third method
var b = new Date('April 24, 2022 13:53:54')
console.log(b)
console.log(b.getDay())

//fourth method
var c = new Date(1000994987409125);
console.log(c)
console.log(c.getDay())

//one more example of fourth method
var e = new Date(107469438724378)
console.log(e)
console.log(e.getHours())







//form validatin
function validate(){
    var x =document.forms['myForm']['name1'].value;
    var y =document.forms['myForm']['age'].value;
    var z =document.forms['myForm']['DOB'].value;
    
    if( x== ''){
        alert('Name can not be empty');
        return false;}
    else if( isNaN(y) || y== ''){
        alert('Age can not be empty');
        return false;
    }
   else if(z == ''){
        alert('Sorry, you should focus on space travel')
        return false;
    }
    else{
        let value = 'form submitted successfully'
        document.getElementById('root1').innerHTML = value
    }
}

//one more example of form validation
