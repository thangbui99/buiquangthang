//Homework:
// 1 Write a script to ask user about their name, and then say hi to them, say something nice to them if you want :)
    let userName = prompt("Hi there, your name please?");
    alert(`Bạn có người yêu chưa, ${userName}?`);

// 2 Write a script that ask 2 things from users, their first name and last name, then greet them with their full name
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    alert(`Tôi yêu bạn ${lastName} ${firstName}`);
    
// 3 Write a script that calculates the area of a square
    let square = prompt("Enter side length of the square:");
    alert(`The square area is ${square*square}`);

// 4 Write a script that calculates the area of a circle
    let circle = prompt('Enter radius of the circle');
    alert(`The circle area is ${circle*3.14}`);

// 5 Write a script that converts Celsius (0C) into Fahrenheit (0F)
    let  converts = prompt('Enter the temperature in Celcius');
    alert(`${converts} (C) = ${((converts*9/5)+32)} (F)`);
