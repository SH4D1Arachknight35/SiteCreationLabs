function task_1() {
    console.clear()
    let num = 123;
    console.log('task1');
    console.log(num);
    //alert(num);
}

function task_2() {
    console.clear()
    let Text_1 = "java";
    let Text_2 = "script";
    let TextSum = Text_1 + Text_2;
    console.log('task2');
    console.log(TextSum);
    //alert(TextSum);
}

function task_3() {
    console.clear()
    let name = "Shady"
    console.log('task3');
    console.log(`Hello, ${name}!`);
    //alert(`Hello, ${name}!`);
}

function task_4() {
    console.clear()
    let text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, illo."
    console.log('task4');
    console.log(`${text}

Length = ${text.length}`);
    //alert(`${text}

//Length = ${text.length}`);
}

function task_5() {
    console.clear()
    let str = `a
b
c`;
    console.log('task5');
    console.log(str);
    //alert(str);
}

function task_6() {
    console.clear()
    let radius = 10;
    let circleSQR = Math.PI * radius ** 2;
    console.log('task6');
    console.log(`Circle area is ${circleSQR}`);
    //alert(`Circle area is ${circleSQR}`);
}

function task_7() {
    console.clear()
    let pixelOne = "5px";
    let pixelTwo = "6px";
    console.log('task7');
    console.log(parseInt(pixelOne, 10) + parseInt(pixelTwo, 10) + "px");
    //alert(parseInt(pixelOne, 10) + parseInt(pixelTwo, 10) + "px");
}

function task_8() {
    console.clear()
    let pixelOne = "5.5px";
    let pixelTwo = "6.25px";
    console.log('task8');
    console.log(parseFloat(pixelOne) + parseFloat(pixelTwo) + "px");
    //alert(parseFloat(pixelOne) + parseFloat(pixelTwo) + "px");
}

function task_9() {
    console.clear()
    let squareSideSize = prompt('Input square side size', 0);
    let squareArea = squareSideSize ** 2;
    console.log('task9');
    console.log(`Area of a square is ${squareArea}`);
    //alert(`Area of a square is ${squareArea}`);
}

function task_10() {
    console.clear()
    let var1 = 3165848;
    let var2 = 6987651584968;
    console.log('task10');
    console.log(String(var1).length + String(var2).length);
    //alert(String(var1).length + String(var2).length);
}

function task_11() {
    console.clear()
    let text = "abcde";
    console.log('task11');
    console.log(`${text[0]} ${text[2]} ${text[4]}`);
    //alert(`${text[0]} ${text[2]} ${text[4]}`);
}

function task_12() {
    console.clear()
    let text = "abcde";
    let text2 = text[4]+text[3]+text[2]+text[1]+text[0];
    console.log('task12');
    console.log(text2);
    //alert(text2);
}

function task_13() {
    console.clear()
    let text = "abcde";
    let num = 3;
    console.log('task13');
    console.log(text[num]); 
    //alert(text[num]);
}

function task_14() {
    console.clear()
    let text = prompt('Input text', "Lorem");
    let last = text.length-1;
    console.log('task14');
    console.log(text[last]); 
    //alert(text[last]);
}

function task_15() {
    console.clear()
    let num = 47;
    num = num + 7;
    num = num - 18;
    num = num * 10;
    num = num / 15;
    console.log('task15');
    console.log(num);
    alert(num);
}

function task_16() {
    console.clear()
    let a = prompt('Input side "a" of the rectangle');
    let b = prompt('Input side "b" of the rectangle');
    console.log('task16');
    console.log(`Rectangle perimeter is ${a*2+b*2}`);
    //alert(`Rectangle perimeter is ${a*2+b*2}`);
}

function task_17() {
    console.clear()
    let text = "";
    let array = [1,2,3,4,5,6,7,8,9];
    for (let i = 0; i < array.length; i++) {
        text += array[i] + " ";
        array[i] += 3;
    }
    console.log('task17');
    console.log(`Original array - [ ${text}]
Modified array - [${array}]`);
    //alert(`Original array - [ ${text}]
//Modified array - [${array}]`);
}

function task_18() {
    console.clear()
    let text = "";
    let array = [1,2,3,4,5,6,7,8,9];
    for (let i = 0; i < array.length; i++) {
        text += array[i] + " ";
        array[i] += 3;
    }
    console.log('task18');
    console.log(`Original array - [ ${text}]
Modified array - [${array}]`);
    //alert(`Original array - [ ${text}]
//Modified array - [${array}]`);
}

function task_19() {
    console.clear()
    let text ="";
    let array = ['a', 'b', 'c'];
    for (let i = 0; i < array.length; i++) {
        text += array[i] + " ";
        array[i] = i+1;
    }
    console.log('task19');
    console.log(`Original array - [ ${text}]
Modified array - [${array}]`);
    //alert(`Original array - [ ${text}]
//Modified array - [${array}]`);
}

function task_20() {
    console.clear()
    let array1 = ['a', 'b', 'c'];
    let array2 = [1, 2, 3];
    let array3 = array1.concat(array2);
    console.log('task20');
    console.log(`Concatenated array - [${array3}]`);
    //alert(`Concatenated array - [${array3}]`);
}

function task_21() {
    console.clear()
    let array = ['a', 'b', 'c'];
    array.push(1, 2, 3);
    console.log('task21');
    console.log(`Pushed array - [${array}]`);
    //alert(`Pushed array - [${array}]`);
}

function task_22() {
    console.clear()
    let array = [1, 2, 3];
    array.reverse();
    console.log('task22');
    console.log(`Reversed array - [${array}]`);
    //alert(`Reversed array - [${array}]`);
}

function task_23() {
    console.clear()
    let array = [1, 2, 3];
    array.push(4, 5, 6);
    console.log('task23');
    console.log(`Pushed array - [${array}]`);
    //alert(`Pushed array - [${array}]`);
}

function task_24() {
    console.clear()
    let array = [1, 2, 3];
    array.unshift(4, 5, 6);
    console.log('task24');
    console.log(`Unshifted array - [${array}]`);
    //alert(`Unshifted array - [${array}]`);
}

function task_25() {
    console.clear()
    let array = ['js', 'css', 'jq'];
    console.log('task25');
    console.log(`First - '${array[0]}'`);
    //alert(`First - '${array[0]}'`);
}

function task_26() {
    console.clear()
    let array = ['js', 'css', 'jq'];
    console.log('task26');
    console.log(`Last - '${array[array.length-1]}'`);
    //alert(`Last - '${array[array.length-1]}'`);
}

function task_27() {
    console.clear()
    let array = [1,2,3,4,5];
    let array2 = array.slice(0,3);
    console.log('task27');
    console.log(`Sliced array - [${array2}]`);
    //alert(`Sliced array - [${array2}]`);
}

function task_28() {
    console.clear()
    let array = [1,2,3,4,5];
    let array2 = array.slice(3);
    console.log('task28');
    console.log(`Sliced array: the sequel - [${array2}]`);
    //alert(`Sliced array: the sequel - [${array2}]`);
}

function task_29() {
    console.clear()
    let array = [1,2,3,4,5];
    array.splice(1,2);
    console.log('task29');
    console.log(`Spliced array: part 1 - [${array}]`);
    //alert(`Spliced array: part 1 - [${array}]`);
}

function task_30() {
    console.clear()
    let array = [1,2,3,4,5];
    let array2 = array.splice(1,3);
    console.log('task30');
    console.log(`Spliced array: part 2 - [${array2}]`);
    //alert(`Spliced array: part 2 - [${array2}]`);
}

function task_31() {
    console.clear()
    let array = [1,2,3,4,5];
    array.splice(2,0, 'a','b','c');
    console.log('task31');
    console.log(`Spliced array: part 3 - [${array}]`);
    //alert(`Spliced array: part 3 - [${array}]`);
}

function task_32() {
    console.clear()
    let array = [1,2,3,4,5];
    array.splice(1,0, 'a','b');
    array.splice(6,0, 'c');
    array.splice(8,0, 'e');
    console.log('task32');
    console.log(`Spliced array: part 4 - [${array}]`);
    //alert(`Spliced array: part 4 - [${array}]`);
}

function task_33() {
    console.clear()
    let array = [3,4,1,2,7];
    array.sort();
    console.log('task33');
    console.log(`Sorted array - [${array}]`);
    //alert(`Sorted array - [${array}]`);
}

function task_34() {
    console.clear()
    let arr = {
        'ru':['голубой', 'красный', 'зеленый'],
        'en':['blue', 'red', 'green'],
    };
    console.log('task34');
    console.log(`Object word - '${arr.ru[0]}'`);
    //alert(`Object word - '${arr.ru[0]}'`);
}

function task_35() {
    console.clear()
    let user = {
        'name':['Ivan'],
        'surname':['Kamenov'],
        'patronymic':['Petrovich'],
    };
    console.log('task35');
    console.log(`User - '${user.surname} ${user.name} ${user.patronymic}'`);
    //alert(`User - '${user.surname} ${user.name} ${user.patronymic}'`);
}

function task_36() {
    console.clear()
    let date = {
        'year':['2021'],
        'month':['March'],
        'day':['18'],
    };
    console.log('task36');
    console.log(`Date - '${date.year} ${date.month} ${date.day}'`);
    //alert(`Date - '${date.year} ${date.month} ${date.day}'`);
}

function task_37() {
    console.clear()
    let array =[ [1, 2, 3], [4, 5, 6], [7,8,9] ];
    console.log('task37');
    console.log(`arrayInArray element - '${array[1][0]}'`);
    //alert(`arrayInArray element - '${array[1][0]}'`);
}

function task_38() {
    console.clear()
    let obj = {
        js:['jQuery', 'Angular'], 
        php: 'hello', 
        css: 'world',
    };
    console.log('task38');
    console.log(`Object element - '${obj.js[0]}'`);
    //alert(`Object element - '${obj.js[0]}'`);
}

function task_39() {
    console.clear()
    let arr = {
        'ru':['понедельник',
                'вторник',
                'среда',
                'четверг',
                'пятница',
                'суббота',
                'воскресенье'
            ],
        'en':['monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday',
                'sunday'
            ],
    };
    console.log('task39');
    console.log(`Object days - '${arr.ru[0]}, ${arr.en[2]}'`);
    //alert(`Object days - '${arr.ru[0]}, ${arr.en[2]}'`);
}

function task_40() {
    console.clear()
    console.log('task40');
    const lang = prompt('Input language (ru, en)','ru');
    const lang1='ru';
    const lang2='en';
    let alertFlag = 1;
    const arr = {
        'ru':['понедельник',
                'вторник',
                'среда',
                'четверг',
                'пятница',
                'суббота',
                'воскресенье'
            ],
        'en':['monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday',
                'sunday'
            ],
    };

    if (lang === lang1) {
        alertFlag = 0;
    } 
    else if (lang === lang2) {
        alertFlag = 0;
    }
    else{
        console.log('wrong input')
        alert("wrong input")
    }

    if (alertFlag === 0){
        let dayNum = prompt('Input day number (1-7)',1);
        if (dayNum > 7) {
            alertFlag = 1;
            console.log('wrong input')
            alert("wrong input");
            
        } 
        else if (dayNum < 1){
            alertFlag = 1;
            console.log('wrong input')
            alert("wrong input");
        }
        if(alertFlag===0){
            dayNum--;
            console.log(`You chose '${arr[lang][dayNum]}'`);
        }
    }
}

function task_41() {
    console.clear()
    console.log('task41');
    let obj = {
        js:'test', 
        jq: 'hello', 
        css: 'world'}
    console.log(Object.keys(obj));
}

function task_42() {
    console.clear()
    console.log('task42');
    const test1 = prompt('test1');
    const test2 = prompt('test2');
    console.log('');
    console.log(`test1 = ${test1}, test2 = ${test2}`);
    
    if (isNaN(test1) || isNaN(test2)){
        console.log('wrong input') 
    }
    else{
        if(test1>test2){
            console.log('test1 > test2');
        }
        else if(test1<test2){
            console.log('test1 < test2');
        }
        else if(test1==test2){
            console.log('test1 = test2');
        }
    }
}

function task_43() {
    console.clear()
    console.log('task43');
    const num = prompt('num');
    if (isNaN(num)){
        console.log('wrong input') 
    }
    else{
        if ((num >= 0) && (num <= 5)){
            console.log("True");
        }
        else{
            console.log("False");
        }
    }
}

function task_44() {
    console.clear()
    console.log('task44');
    const num1 = prompt('num1');
    const num2 = prompt('num2');
    if (isNaN(num1) || isNaN(num2)){
        console.log('wrong input') 
    }
    else{
        if ((num1 <= 1) || (num2 >= 3)){
            console.log("True");
        }
        else{
            console.log("False");
        }
    }

}

function task_45() {
    console.clear()
    console.log('task45');
    let num = prompt('num');
    if (isNaN(num)){
        console.log('wrong input') 
    }
    else{
        if ((num <= 10) || (num >= 99)){
            console.log("num <= 10 || num >= 99");
        }
        else{
            let sum = 0;
            while (num) {
                let digit = num % 10;
                sum += digit;
                num = (num - digit) / 10;
            }
            console.log(sum);
            if(sum <= 9){
                console.log('a sum is a 1-digit number');
            }
            else{
                console.log('a sum is a 2-digit number')
            }
        }
    }
}

function task_46() {
    console.clear()
    console.log('task46');
    let adult = false
    let age = prompt('age');
    if (isNaN(age)){
        console.log('wrong input') 
    }
    else{
        if (age >= 18) {
            adult = true;
        } 
        else {
            adult = false;
        }
        console.log(adult); 
    }
}

function task_47() {
    console.clear()
    console.log('task47');
    let num = prompt('num');
    if (isNaN(num)){
        console.log('wrong input') 
    }
    else{
        let lastDigit = num % 10;
        if(lastDigit === 0){
            console.log(`lastDigit = ${lastDigit}, true`)
        }
        else{
            console.log(`lastDigit = ${lastDigit}, false`)
        }
    }
}

function task_48() {
    console.clear()
    console.log('task48');
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    month = getRandomInt(1,13);
    console.log(month);
    const year = {
        'Winter':[12,1,2],
        'Spring':[3,4,5],
        'Summer':[6,7,8],
        'Autumn':[9,10,11]
    };
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 2; j++) {
            if (Object.values(year)[i][j] === month){
                let monthID = i;
                console.log(Object.getOwnPropertyNames(year)[monthID]);
            }
        }
    }
}

function task_49() {
    console.clear()
    console.log('task49');
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    num = getRandomInt(1,7);
    console.log(num);
    switch (num){
        case 1: 
            console.log('winter');
            break;
        case 2: 
            console.log('spring');
            break;
        case 3: 
            console.log('summer');
            break;
        case 4: 
            console.log('autumn');
            break;
        default: 
            console.log('wrong input');
            break;
    }
}

function task_50() {
    console.clear()
    console.log('task50');
    for (let index = 0; index <= 100; index++) {
        let num = index;
        if (num % 2 === 0){
            console.log(num);
        }        
    }
}

function task_51() {
    console.clear()
    console.log('task51');
    for (let index = 30; index >= 0; index--) {
        console.log(index);
    }
}

function task_52() {
    console.clear()
    console.log('task52');
    let answer = 1;
    for (let index = 1; index <= 20; index++) {
        answer *= index;
        //console.log(answer);
    }        
    console.log(answer);
}

function task_53() {
    console.clear()
    console.log('task53');
    let answer = 0;
    for (let index = 2; index <= 100; index++) {
        answer += index;
        //console.log(answer);
    }        
    console.log(answer);

}

function task_54() {
    console.clear()
    console.log('task54');
    const arr = [1,2,3,4,5];
    const arr2 = [];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 === 1){
            arr2.push(arr[index]);
        }
    }
    console.log(arr2);

}

function task_55() {
    console.clear()
    console.log('task55');
    const arr = [1,2,3,4,5];
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]**2;
    }
    console.log(sum);
}

function task_55_2() {
    console.clear()
    console.log('task55_2');
    const arr = [10,20,30,50,3000];
    const arr2 = [];
    for (let index = 0; index < arr.length; index++) {
        let digit = arr[index].toString()[0];
        if ((digit == 1) || (digit == 2) || (digit == 5)){
            arr2.push(arr[index]);
        }
    }
    console.log(arr2);
}

function task_56() {
    console.clear()
    console.log('task56');
    const arr = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    const arr2 =[];
    const day = 4;
    for (let index = 0; index < arr.length; index++) {
        if(index+1 === day){
            arr2.push(arr[index].toUpperCase());
        }
        else{
            arr2.push(arr[index]);
        }
    }
    console.log(arr2);
    
}

function task_56_1() {
    console.clear()
    console.log('task56_1');
    let d = new Date();
    //let n = d.getDay();
    console.log(d.getDay());
    console.log(d);

}