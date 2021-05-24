// Session 4 Homework

// Exercise 1: Initialize a variable named products, containing an array of products, each product has a name, price, brand, category, and color:

let products = [
    {
        id: 1,
        Name: 'Xiaomi portable charger 20000mah',
        Brand: 'Xiaomi',
        Price: 428,
        Color: 'White',
        Category: 'Charger',
    },
    
    {
        id: 2,
        Name: 'VSmart Active 1',
        Brand: 'VSmart',
        Price: 5487,
        Color: 'Black',
        Category: 'Phone',
    },

    {
        id: 3,
        Name: 'IPhone X',
        Brand: 'Apple',
        Price: 21490,
        Color: 'Gray',
        Category: 'Phone',
    },

    {
        id: 4,
        Name: 'Samsung Galaxy A9',
        Brand: 'Samsung',
        Price: 8490,
        Color: 'Blue',
        Category: 'Phone'
    }
];

    // 1.1: Print/log name and price of all the products out:
        for (let i = 0; i<products.length; i++) {
            console.log(`*****T*****H*****A*****N*****G*****D*****E*****P*****T*****R*****A*****I*****\n
             Name: ${products[i].Name}\n
             Price: ${products[i].Price}\n`);
        }
    // 1.2"Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users:
    console.log(`**********T*****H*****A*****N*****G*****D*****E*****P*****T*****R*****A*****I**********\n`);

        for (let j = 0; j<products.length; j++) {
            console.log(`#${j+1}. ${products[j].Name}\n
    Price: ${products[j].Price}\n`);
        }
        let idProducts = Number(prompt('Enter product position:'));
        for (let i = 0; i<products.length; i++) {
            if (idProducts < 0 || idProducts >= products.length) {
                alert('thang rat dep trai!!!!!!!!!');
            } else {
                console.log(`Name: ${products[idProducts-1].Name}\n
Brand: ${products[idProducts-1].Brand}\n
Price: ${products[idProducts-1].Price}\n
Color: ${products[idProducts-1].Color}\n
Category: ${products[idProducts-1].Category}`)
            }
        }

    // 1.3: Write a script printing/logging out the products based on category input by users:
    console.log(`**********T*****H*****A*****N*****G*****D*****E*****P*****T*****R*****A*****I**********\n`);

        let categoryUser = prompt('Enter your category: ');
            for (let i = 0; i<products.length; i++) {
                if (categoryUser == products[i].Category){
                console.log(`*****T*****H*****A*****N*****G*****D*****E*****P*****T*****R*****A*****I*****\n
    Name: ${products[i].Name}\n
    Price: ${products[i].Price}\n`);
                }
            }

    // 1.4: Add providers to each product + And printing/logging out all of the products:
    console.log(`**********T*****H*****A*****N*****G*****D*****E*****P*****T*****R*****A*****I**********\n`);
        
        for (let i = 0; i < products.length; i++) {
            if (i == 0) {
                products[i].Providers = 'Phukienzero Dientuccc';
            } else {
                products[i].Providers = 'Tgdd';
            }
        console.log('*****T*****H*****A*****N*****G*****D*****E*****P*****T*****R*****A*****I*****\n')
        console.log(`# ${i+1}. ${products[i].Name}\n
    Price: ${products[i].Price}\n
    Providers: ${products[i].Providers}\n`)
    }

    // 1.5: Search the products based on the wanted provider entered by users, if you need more directions, find the hints at the end of this homework
    console.log(`**********T*****H*****A*****N*****G*****D*****E*****P*****T*****R*****A*****I**********\n`);
     
            let providersUser = prompt('Enter your Providers: ');
            for (let i = 0; i<products.length; i++) {
                if (providersUser == products[i].Providers){
                    console.log(`*****T*****H*****A*****N*****G*****D*****E*****P*****T*****R*****A*****I*****\n
    Name: ${products[i].Name}\n
    Brand: ${products[i].Brand}\n
    Price: ${products[i].Price}\n
    Color: ${products[i].Color}\n
    Category: ${products[i].Category}\n
    Providers: ${products[i].Providers}\n`);
                }
            }

// Exercise 2: Write a script to store and process the learning tasks to become a front-end developer
    let feDev = [
        {
            id : 1,
            Name : 'HTML',
            Complete : false,
        },

        {
            id : 2,
            Name : 'CSS',
            Complete : false,
        },

        {
            id : 3,
            Name : 'Javascript',
            Complete : false,
        },

        {
            id : 4,
            Name : 'Node Package Manger (npm)',
            Complete : false,
        },

        {
            id : 5,
            Name : 'Git',
            Complete : false,
        }
    ];

    // 2.1: Print it out
    console.log('Hi there, this is your learning tasks to front-end developer career');
        for (let i = 0; i < feDev.length; i++) {
            console.log(`${i+1}. ${feDev[i].Name}\n
    Complete: ${feDev[i].Complete}`)
        }

    // 2.2: Let users add new task
    // 2.3: Let users update task
    // 2.4: Let users complete task
    // 2.5: Let users delete task

    let isloop = true;
    while (isloop) {
        let userTask = prompt('Enter your command (New, Delete, Update, Complete)');
        if (userTask == 'New') {
            let Name = prompt('Enter your name: ');
            let Complete = prompt('Enter your complete: ');
            let id = feDev.length + 1;

            let newfeDev = {
                id: id,
                Name: Name,
                Complete: Complete
            }
            feDev.push(newfeDev);
            for (let i = 0; i < feDev.length; i++) {
                console.log(`${feDev[i].id}. ${feDev[i].Name}`);
                console.log(`complete: ${feDev[i].Complete}`);
            }
        } else if (userTask == 'Delete') {
            let idUsertask = Number(prompt('Enter id:'));
            if(idUsertask<0 || idUsertask >= feDev.length) {
                alert('thang dep trai');
            } else {
                feDev.splice(idUsertask,1);
                for (let i = 0; i < feDev.length; i++) {
                    console.log(`${feDev[i].id}. ${feDev[i].Name}`);
                    console.log(`complete: ${feDev[i].Complete}`);
                }
            }
        } else if (userTask == 'Update') {
            let idUsertask = Number(prompt('Enter id:'));
            if(idUsertask<0 || idUsertask >= feDev.length) {
                alert('thang dep trai');
            } else {
                let newName = prompt('Enter newname: ');
                let newComplete = prompt('Enter newComplete:');
                feDev[idUsertask].Name = newName;
                feDev[idUsertask].Complete = newComplete;
            for (let i = 0; i < feDev.length; i++) {
                console.log(`${feDev[i].id}. ${feDev[i].Name}`);
                console.log(`complete: ${feDev[i].Complete}`);
            }
        }
        } else if (userTask == 'Complete') {
            let idUsertask = Number(prompt('Enter id:'));
            if(idUsertask<0 || idUsertask >= feDev.length) {
                alert('thang dep trai');
            } else {
                feDev[idUsertask].Complete = true;
                for (let i = 0; i < feDev.length; i++) {
                    console.log(`${feDev[i].id}. ${feDev[i].Name}`);
                    console.log(`complete: ${feDev[i].Complete}`);
                }
            }
        } else if('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa') {
            alert('thang dep trai:::::');
            isloop = false;
        } else {
            alert('Enter your command (New, Delete, Update, Complete)');
        }
    }
