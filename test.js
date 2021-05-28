# buiquangthang
// THANG DEP TRAI

// Exercise 1:

    function str_input(str) {
        let newStr_input = '';
        for (let i = str.length-1; i >= 0; i--) {
            newStr_input += str[i];
        }
        return newStr_input;
    }
    console.log(str_input('thang'));

// Exercise 2:

    function nameUser(str) {
    let nameUserSplit = str.toLowerCase().split(' ');
    let newname = '';
    for(let i = 0; i<nameUserSplit.length; i++) {
        newname += nameUserSplit[i].charAt(0).toUpperCase() + nameUserSplit[i].slice(1) + " ";
    }
    return newname;
}

console.log(nameUser('thang rat dep trai nha'));

// Exercise 3:

    function deleStr(arr) {
        let newArr = [];
        for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
        }
        return newArr;
    }
    console.log(deleStr([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));

// Exercise 4:

    let objMindx = [
        {
            id: 1,
            name: 'thang',
            age: 21,
            wage: 1000000000,
            position: manager,    
        },

        {
            id: 2,
            name: 'long',
            age: 20,
            wage: 100000,
            position: staff,    
        },

        {
            id: 3,
            name: 'cuong',
            age: 19,
            wage: 100000,
            position: staff,    
        }
    ];

    let isloop = true;
    while (isloop) {
        let input = prompt('Enter Create, Read, Update, Delete');
        if (input === 'c') {
            let name = prompt('Enter your name: ');
            let age = prompt('Enter your age: ');
            let wage = prompt('Enter your wage: ');
            let position = prompt('Enter your position: ');
            let id = objMindx.length + 1;

            let newobjMindx = {
                id: id,
                name: name,
                phone: phone
            }
            objMindx.push(newobjMindx);
        } else if (input === 'r') {
            for (let i=0; i<objMindx.length; i++) {
                alert(`${objMindx[i].id} --- ${objMindx[i].name} --- ${objMindx[i].age}\n
                ${objMindx[i].wage} --- ${objMindx[i].position}`);
            }
        } else if (input ==='u') {
            let idInput = Number(prompt('Enter id: '));
            if (idInput < 0 && idInput >= objMindx.length) {
                alert('NOT FOUND');
            } else {
                let newName = prompt('Enter your new name: ');
                let newAge = prompt('Enter your new age: ');
                let newWage = prompt('Enter your new wage: ');
                let newPosition = prompt('Enter your new position: ');
                objMindx[idInput].name = newName;
                objMindx[idInput].age = newAge;
                objMindx[idInput].wage = newWage;
                objMindx[idInput].position = newPosition;
            }
        } else if ('d') {
            let idInput = Number(prompt('Enter id: '));
            if (idInput < 0 && idInput >= objMindx.length) {
                alert('NOT FOUND');
            } else {
                objMindx.splice(idInput,1);
            }
        } else if('e') {
            isloop = false;
        } else {
            console.log('C/R/U/d ??????????');
        }
    }
    
// Exercise 5:
    function boleanYear(year) {
        if((year % 4 == 0 && year % 100 != 0) || year % 400==0){
            return true;
        }else return false;
    }

    function day_Month_Year(day, month, year) {
        if((year < 1 && year > 100000) && (month < 1 && month > 12)){
            alert('thang rat dep trai::::::');
        }
        switch(month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                day=31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                day=30;
                break;
            case 2:
                if(boleanYear(year) == true){
                    day=29;
                }else {
                    day=28;
                }
                break;
            default:
                alert('thang rat dep trai::::::');
                break;
        }
        return day;

        console.log(`${day}/${month}/${year}`);
        console.log(`${day + 1}/${month + 1}/${year}`);
    }
    let day = Number(prompt('day:'));
    let month = Number(prompt('month:'));
    let year = Number(prompt('year:'));
    console.log(day_Month_Year(day, month, year));
    
