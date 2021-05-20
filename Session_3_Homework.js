// Session 3 Homework:
// ====================================================================================================
    // sử dụng vòng lặp while.
    // tạo 1 chương trình cho người dùng nhập thêm bớt sửa và đọc phone number
    // khi hoàn thành 1 chức năng sẽ quay lại menu CRUD để người dùng chọn 
    // nếu người dùng  nhập "C" => tạo mới 1 element ==> quay lại menu
    // nếu người dùng  nhập "R" => Cho người dùng nhập chỉ số INDEX, in ra nó. ==> quay lại menu
    // nếu người dùng  nhập "U" => cập nhật 1 phần tử do người dùng nhập index ==> quay lại menu
    // nếu người dùng  nhập "D" => hỏi người dùng chỉ số index muốn xóa => xoa no ==> quay lại menu

    let phoneNumber = [11,22,33,44,55,66,77,88];
    let phoneSelection = true;
    while (phoneSelection) {
        let phoneNumber_selection = prompt('Lựa chọn của người dùng:\n \
                                                C: Tạo mới 1 element.\n \
                                                R: Nhập chỉ số INDEX, in ra nó.\n \
                                                U: Nhập index cập nhật 1 phần tử.\n \
                                                D: Chỉ số index muốn xóa.');

        if(phoneNumber_selection == 'C') {
            let newPhone = Number(prompt('Tạo mới 1 element:'));
            phoneNumber.push(newPhone);
            alert(`'phoneNumber' ${phoneNumber}`);
        } else if (phoneNumber_selection == 'D') {
            let dele = Number(prompt('Chỉ số index muốn xóa:'));
            delete phoneNumber[dele];
            alert(`'phoneNumber' ${phoneNumber}`);
        } else if (phoneNumber_selection == 'U') {
            let indexValue = Number(prompt('Nhập index cập nhật 1 phần tử:'));
            let newValue = Number(prompt('Nhập value:'));
            phoneNumber[indexValue]= newValue;
            alert(`'phoneNumber' ${phoneNumber}`);
        } else if (phoneNumber_selection == 'R') {
            let indexElement = Number(prompt('Nhập chỉ số INDEX:'));
            alert(`'phoneNumber' ${phoneNumber[indexElement]}`);
        }
    }

// ====================================================================================================

// Exercise 1: Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users:
    let userNumbers = prompt('Enter a sequence of numbers, separated by commas (,)');
    let arr_userNumbers = userNumbers.split(",");
    let sumNumbers = 0;
    for (let i = 0; i<arr_userNumbers.length; i++) {
        arr_userNumbers[i]=Number(arr_userNumbers[i]);
        sumNumbers += arr_userNumbers[i];
    }
    alert(`The sum of them is ${sumNumbers}`);

// ====================================================================================================

// Exercise 2: Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users:
    let userNumbers = prompt('Enter a sequence of numbers, separated by (,)');
    let arr_userNumbers = userNumbers.split(",");
    let smallestNumbers = arr_userNumbers[0];
    for (let i = 0; i<arr_userNumbers.length; i++) {
        arr_userNumbers[i]=Number(arr_userNumbers[i]);
        if (arr_userNumbers[i]<smallestNumbers) {
            smallestNumbers=arr_userNumbers[i];
        }
    }
    alert(`The smallest number is ${smallestNumbers}`);

// ====================================================================================================

// Exercise 3: Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so:
    const arr = [3, 4, 6, -9, 10, -88, 2];
    let userNumber = Number(prompt('Enter a number:'));
    let isloop = arr.includes(userNumber);

    if (isloop == true) {
        for (let i = 0; i<arr.length; i++) {
            if (userNumber == arr[i]) {
                alert(`${userNumber} is FOUND in my array at index ${i}`);
            }
        }
    } else {
        alert(`${userNumber} is NOT found in my array `);
    }

// ====================================================================================================

// Exercise 4: You are a shepherd who owns a flock of sheep. Each of your sheep of your flock has varied sizes:
    // 4.1: Create an array to represent the sizes of your flock, and log all of your flock size:
    const arr = [5, 7, 300, 90, 24, 50, 75];
    console.log(`Hello, my name is THANG DEP TRAI and here is my sheep sizes:\n${arr.join(" ")}`);

    // ------------------------------------------------------------------------------------------------
    // 4.2: At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
    let arrMax = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arrMax) {
            arrMax = arr[i];
        }
    }
    console.log(`\nNow my biggest sheep has size ${arrMax}, let's shave it!!!`);

    // ------------------------------------------------------------------------------------------------
    // 4.3: When your biggest sheer, its size will return to the default size, which is 8:
    arrDefault = arr.indexOf(arrMax);
    arr[arrDefault] = 8;
    console.log(`\nAfter shearing, here is my flock\n${arr.join(" ")}`);

    // ------------------------------------------------------------------------------------------------
    // 4.4: In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out:
    for (let i = 0; i < arr.length; i++) {
        arr[i]+=50;
    }
    console.log(`\nMONTH 1\nOne month has passed, my sheep have grown, here are their sizes\n${arr.join(" ")}`);

    // ------------------------------------------------------------------------------------------------
    // 4.5: Let’s do this for 4 months (or as long as you want)
    for (let arrMonths=1; arrMonths<=4; arrMonths++) {
        for (let i = 0; i < arr.length; i++) {
            arr[i]+=50;
        }
        console.log(`\nMONTH ${arrMonths+1}\nOne month has passed, my sheep have grown, here are their sizes\n${arr.join(" ")}`);
    }

    // ------------------------------------------------------------------------------------------------
    // 4.6: After day by day shearing sheep, you became bored. You want to sell your flock to travel the world. In order to have fair trade, you must now calculate the total size of your sheep and then the expected money you can get from selling your flock, before going to the market. Write a program to calculate the total size of your sheep as well as the money you would have. Expected console output:
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        arrSum = arrSum + arr[i];   
   }
   console.log(`My flock has size in total: ${arrSum} kilograms`);
   console.log(`I would get ${arrSum} * 20$ = ${arrSum*20} dolars`);

// ====================================================================================================

// Excercise 5: Write a script asking users to enter a sequence of names, separated by commas (,), Create a new array containing the names, each surrounded with <>. If you need hints, find them at the end of this homework:
    let userNumbers = prompt('Enter a sequence of numbers, separated by (,)'); 
    let arr_userNumbers = userNumbers.split(",");
    let arr = [];
    for (let i = 0; i<arr_userNumbers.length; i++) {
        arr.push(`<${arr_userNumbers[i]}>`);
    }
    alert(` ${arr_userNumbers} => ${arr} `);

// ====================================================================================================

// Excercise 6: Write a script asking users to enter a sequence of Numbers, separated by commas (,). Create a new array containing only the odd Numbers of the entered sequence.:
    let userNumbers = prompt('Enter a sequence number:');
    let arr_userNumbers = userNumbers.split(","); 
    let arr = [];
    for (let i = 0; i<arr_userNumbers.length; i++) {
        if(arr_userNumbers[i] % 2 != 0) {
            arr.push(arr_userNumbers[i]);
        }
    }
    alert(` ${arr_userNumbers} => ${arr} `);
