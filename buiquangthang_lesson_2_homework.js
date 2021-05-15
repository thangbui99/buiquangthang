
// LESSON 2 HOMEWORK

// Exercise 1: Write a program to print out:

    // 1-a: 7 numbers, starting from 0 (no user input):
        for (let i = 0; i < 7; i++) {
            console.log(i);
        }

    // 1-b: n numbers, starting from 0, n entered by user:
        let n = Number(prompt('Enter a number?'));
        for (let i = 0; i < n; i++) {
            console.log(i);
        }

    // 1-c: A sequence of numbers, starting from 3, ending before n, n entered by user:
        let n = Number(prompt('Enter n'));
        for (let i = 3; i < n; i++) {
            console.log(i);
        }

    // 1-d: A sequence of numbers, starting from c, ending before n, c and n entered by user:
        let n = Number(prompt('Enter n'));
        let c = Number(prompt('Enter c'));
        for (; c < n; c++) {
            console.log(c);
        }

    // 1-e: A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user:
        let n = Number(prompt('Enter n'));
        let c = Number(prompt('Enter c'));
        for (;c < n; c+=3) {
            console.log(c);
        }

    // 1-f: A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user:
        let n = Number(prompt('Enter n'));
        let c = Number(prompt('Enter c'));
        let s = Number(prompt('Enter s'));
        for (;c < n; c+=s) {
            console.log(c);
        }

// -----------------------------------------------------------------------------------------------

// Exercise 2: Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user:

    let n = Number(prompt('Enter a number:'));
    let the_factorial = 1;
    for (let i = 1; i <= n; i++) {
        the_factorial*=i;
    }
    alert(`The factorial of ${n} is ${the_factorial}`);

// -----------------------------------------------------------------------------------------------

// Exercise 3: Write a program asking users their age, and then decide if they are old enough to view a 14+ content:

    let old_User = Number(prompt('How old are you?'));
    if (old_User <= 14) {
        alert('You are not enought to view this content');
    } else if (old_User > 14) {
        alert('Enjoy!!!');
    }

// -----------------------------------------------------------------------------------------------

// Exercise 4: Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range:

    let x = Number(prompt('Enter a number'));
    while (x >= 0 && x <= 9) {
        if(x >= 0 && x <= 4) {
            alert('Lower half of 9');
            break;
        } else if (x  >= 5 && x <= 9) {
            alert('Higher half of 9');
            break;
        }
    }

// -----------------------------------------------------------------------------------------------

// Exercise 5: Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n:

    let n = Number(prompt('n = '));
    let x = Number(prompt('x = '));
    let c = (n/2);
    if(x > c) {
        alert(`${x} is in higher half of ${n}`);
    } else if (x <= c) {
        alert(`${x} is in lower half of ${n}`);
    }

// -----------------------------------------------------------------------------------------------

// Exercise 6: Write a script to check if a number is even (divisible by 2) or odd number:

    let x = Number(prompt('x = '));
    if (x % 2 != 0) {
        alert(`${x} is an odd number`);
    } else {
        alert(`${x} is an even number`);
    }

// -----------------------------------------------------------------------------------------------

// Exercise 7: Write a program to print out:

    // 7-a: 6 L’s and H’s, half L’s, half H’s (L means low, H means high):
        let total_half = 6;
        let l_half = 0;
        let h_half = 0;
        l_half = h_half = total_half / 2;
        console.log(l_half);
        console.log(h_half);

    // 7-b: n L’s and H’s in total, n entered by user:
        let total_half = Number(prompt('Enter the total number:'));
        let l_half = 0;
        let h_half = 0;
        if (total_half % 2 == 0) {
            l_half = h_half = total_half / 2;
            console.log(l_half);
            console.log(h_half);
        } else {
            l_half = Math.floor(total_half / 2);
            h_half = total_half - l_half;
            console.log(l_half);
            console.log(h_half);
        }

    // 7_c: 8 1’s and 0’s in total, consecutively:
        for (let consecutively = 0; consecutively < 8/2; consecutively++) {
            console.log(0);
            console.log(1);
        }

    // 7-d: n 1’s and 0’s in total, consecutively, n entered by user:
        let n= Number(prompt ("Enter n"));
        for (let i=0; i<n; i++){
            if (i % 2 == 0) {
                console.log(0);
            } else {
                console.log(1);
            }
        }
// -----------------------------------------------------------------------------------------------

// Exercise 8: Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows:

    let weight = Number(prompt("Your weight in kg?"));
    let height = Number(prompt("Your height in m?"))
    let BMI = weight/(height*height);
    alert(`Your BMI is ${BMI}`);
    if (BMI < 16){
        alert('You are Severely underweight');
    }
    else if (BMI >= 16 && BMI < 18.5){
        alert('You are Underweight');
    }
    else if (BMI >= 18.5 && BMI < 25){
        alert('You are Nomarl');
    }
    else if (BMI >= 25 && BMI < 30){
        alert('You are Overweight');
    }
    else if (BMI >= 30){
        alert('You are Obese');
    }
