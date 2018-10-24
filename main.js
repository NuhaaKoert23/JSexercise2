// declare variables
// var myName = 'Sally';
// var sayHello = 'Hi my name is ' + myName
// console.log(sayHello);

//basic function and onclick event 
document.getElementById('btn').onclick = function () {

    //grab input value
    var myName = document.getElementById('name').value;

    if (myName) {
        //create sentence
        var sayHello = 'Hi my name is ' + myName;


        // targeting an element in html
        document.getElementById('Hello').innerHTML= sayHello;

        } else {
            alert('Please enter your name.')
        }
        
    }