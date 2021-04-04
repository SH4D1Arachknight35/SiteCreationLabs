function openModal() {;
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = "none";
        }
    });
}

function deleteModalText() {
    const modalText = document.querySelector(".modal-content .modal-text");
    modalText.remove();
    const modalTextNew = document.createElement('div');
    modalTextNew.classList.add('modal-text');
    document.querySelector(".modal-content").appendChild(modalTextNew);
}

function deleteModalTask() {
    const modalText = document.querySelector(".modal-content .modal-task");
    modalText.remove();
    const modalTextNew = document.createElement('div');
    modalTextNew.classList.add('modal-task');
    document.querySelector(".modal-content").appendChild(modalTextNew);
}

function deleteModalSeparate() {
    const modalText = document.querySelector(".modal-content .modal-separate");
    modalText.remove();
    const modalTextNew = document.createElement('div');
    modalTextNew.classList.add('modal-separate');
    document.querySelector(".modal-content").appendChild(modalTextNew);
}

function createButton() {
    const button = document.createElement('button');
    button.classList.add('btn-task1');
    document.querySelector(".modal-content .modal-task").appendChild(button);
    document.querySelector(".btn-task1").style.width = "100px";
    document.querySelector(".btn-task1").style.height = "50px";
}

function replyClick(clicked_id) {
    num = clicked_id.slice(-2);
    console.log('task' + num);
    const toolTipText = document.querySelector(`#btn${num} .tooltiptext`);
    document.querySelector(".modal-content .modal-text").appendChild(toolTipText.cloneNode(true));
}

function replyClick2(clicked_id) {
    num = clicked_id.slice(-4);
    console.log('task' + num);
    const toolTipText = document.querySelector(`#btn${num} .tooltiptext`);
    document.querySelector(".modal-content .modal-text").appendChild(toolTipText.cloneNode(true));
}

function setSeparate() {
    const separator = document.querySelector('.modal-content .modal-separate');
    separator.innerHTML = `
    <p>&nbsp;</p>
    <p style="border:1px solid orangered"></p>`;
}

function executeTask() {
    console.clear();
    deleteModalText();
    deleteModalSeparate();
    deleteModalTask();
    setSeparate();
}

function task_1() {
    executeTask();
    createButton();
    const button = document.querySelector('button');
    button.addEventListener('dblclick', () => {
        alert('double click')
    });

}

function task_2() {
    executeTask();

    createButton();
    const button = document.querySelector('button');
    button.addEventListener('mouseover', () => {
        alert('mouse over')
    });
}

function task_3() {
    executeTask();

    createButton();
    const button = document.querySelector('button');
    button.addEventListener('mouseout', () => {
        alert('mouse out')
    });
}

function task_4() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t4-button1" type="submit" value="button1">
    <input id="t4-button2" type="submit" value="button2">`;

    function func1() {
        alert(1);
    }

    function func2() {
        alert(2);
    }

    const button1 = document.getElementById('t4-button1');
    button1.addEventListener('click', () => {
        func1();
    });

    const button2 = document.getElementById('t4-button2');
    button2.addEventListener('click', () => {
        func2();
    });
}

function task_5() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input type="text" placeholder="Type some number" id = "t5-input1">
    <input type="text" placeholder="Type some number" id = "t5-input2">
    <input id="t5-button" type="submit" value="button">`;

    const button = document.getElementById('t5-button');

    button.addEventListener('click', () => {
        const num1 = parseInt(document.querySelector('#t5-input1').value);
        const num2 = parseInt(document.querySelector('#t5-input2').value);
        alert(num1 + num2);
    });
}

function task_6() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t6-button1" type="submit" value="button">
    <input id="t6-button2" type="submit" value="button">
    <p id = 't6-p1'>1) Lorem Ipsum Paragraph One</p>
    <p id = 't6-p2'>2) Ipsum Two Lorem Paragraph</p>`

    const button1 = document.getElementById('t6-button1');
    button1.addEventListener('click', () => {
        console.log(document.getElementById('t6-p1').textContent);
    });
    const button2 = document.getElementById('t6-button2');
    button2.addEventListener('click', () => {
        console.log(document.getElementById('t6-p2').textContent);
    });
}

function task_7() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t7-button1" type="submit" value="button">
    <input id="t7-button2" type="submit" value="button">
    <p id = 't7-p' style=overflow-wrap:break-word;></p>`
    const paragraph = document.getElementById("t7-p");

    const button1 = document.getElementById('t7-button1');
    button1.addEventListener('click', () => {
        const text = document.createTextNode("Hello");
        paragraph.appendChild(text);
    });
    const button2 = document.getElementById('t7-button2');
    button2.addEventListener('click', () => {
        const text = document.createTextNode("Bye");
        paragraph.appendChild(text);
    });
}

function task_8() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <p id = 't8-p1' style=overflow-wrap:break-word;>sometext</p>
    <p id = 't8-p2' style=overflow-wrap:break-word;>sometext</p>
    <p id = 't8-p3' style=overflow-wrap:break-word;>sometext</p>`

    const text1 = document.getElementById('t8-p1');
    text1.addEventListener('click', () => {
        const text = document.createTextNode("1");
        text1.appendChild(text);
    });
    const text2 = document.getElementById('t8-p2');
    text2.addEventListener('click', () => {
        const text = document.createTextNode("2");
        text2.appendChild(text);
    });
    const text3 = document.getElementById('t8-p3');
    text3.addEventListener('click', () => {
        const text = document.createTextNode("3");
        text3.appendChild(text);
    });
}

function task_9() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t9-button" type="submit" value="button">
    <p id = 't9-p' style=overflow-wrap:break-word;>5</p>`

    let number = document.getElementById("t9-p").textContent;

    const button1 = document.getElementById('t9-button');
    button1.addEventListener('click', () => {
        number = parseInt(number) ** 2;
        document.getElementById("t9-p").textContent = number;
    });
}

function task_10() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t10-button" type="submit" value="button">
    <p id = 't10-p' style=overflow-wrap:break-word;>text</p>`
    const paragraph = document.getElementById("t10-p");

    const button1 = document.getElementById('t10-button');
    button1.addEventListener('click', () => {
        const text = document.createTextNode("!");
        paragraph.appendChild(text);
    });
}

function task_11() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t11-button" type="submit" value="button">
    <p id = 't11-p' style=overflow-wrap:break-word;>text</p>`
    const paragraph = document.getElementById("t11-p");

    const button1 = document.getElementById('t11-button');
    button1.addEventListener('click', () => {
        const text = document.createTextNode("!");
        paragraph.prepend(text);
    });
}

function task_12() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t12-button" type="submit" value="button">
    <p id = 't12-p' style=overflow-wrap:break-word;></p>
    <style>
        i{
            font-style: italic;
        }
    </style>`
    const paragraph = document.getElementById("t12-p");

    const button1 = document.getElementById('t12-button');
    button1.addEventListener('click', () => {
        const iElem = document.createElement('i');
        const text = document.createTextNode("hello");

        paragraph.appendChild(iElem);
        iElem.appendChild(text);
    });
}

function task_13() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t13-elem" type="email">
    <input id="t13-button" type="submit" value="button">`

    const button1 = document.getElementById('t13-button');
    button1.addEventListener('click', () => {
        let elemType = document.querySelector('#t13-elem');
        alert(elemType.type);
    });
}

function task_14() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t14-elem" type="email">
    <input id="t14-button" type="submit" value="button">`

    const button1 = document.getElementById('t14-button');
    button1.addEventListener('click', () => {
        let elemType = document.querySelector('#t14-elem');
        elemType.type = 'button';
        alert(elemType.type);
    });
}

function task_15() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <a id="t15-a" style="color:white;text-decoration:none;" href="https://vk.com">vk</a>
    <input id="t15-button" type="submit" value="button">
    <p id = 't15-p' style=overflow-wrap:break-word;></p>`

    const paragraph = document.getElementById("t15-p");
    let t15_flag = 0;
    const button1 = document.getElementById('t15-button');
    button1.addEventListener('click', () => {
        if (t15_flag === 0) {
            let elemHref = document.querySelector('#t15-a');
            const text = document.createTextNode(elemHref.href);
            paragraph.appendChild(text);
            t15_flag = 1;
        }
    });
}

function task_16() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <div>
        <input id="t16-button" type="submit" value="button">
    </div>
    <img id="t16-img" src="img/sm.jpg" alt="sm">
    <p id = 't16-p' style=overflow-wrap:break-word;></p>`

    const paragraph = document.getElementById("t16-p");
    let t16_flag = 0;
    const button1 = document.getElementById('t16-button');
    button1.addEventListener('click', () => {
        if (t16_flag === 0) {
            let elemIMG = document.querySelector('#t16-img');
            const text = document.createTextNode(elemIMG.src);
            paragraph.appendChild(text);
            t16_flag = 1;
        }
    });
}

function task_17() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input type="text" value="img/sm.jpg" id = "t17-input1" >
    <input id="t17-button1" type="submit" value="button1">
    <input type="text" value="img/sm2.jpeg" id = "t17-input2">
    <input id="t17-button2" type="submit" value="button2">
    <div>
    <img src="" alt="sm">
    </div>`

    const button1 = document.getElementById('t17-button1');
    button1.addEventListener('click', () => {
        let elemIMG = document.querySelector('img');
        elemIMG.src = document.getElementById("t17-input1").value;
    });

    const button2 = document.getElementById('t17-button2');
    button2.addEventListener('click', () => {
        let elemIMG = document.querySelector('img');
        elemIMG.src = document.getElementById("t17-input2").value;
    });
}

function task_18() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input type="text" value="1" id = "t18-input1" >
    <input type="text" value="2" id = "t18-input2">
    <input type="text" value="3" id = "t18-input3">
    <input type="text" value="4" id = "t18-input4">
    <input type="text" value="5" id = "t18-input5">
    <p id = 't18-p' style=overflow-wrap:break-word;></p>
    <input id="t18-button" type="submit" value="button">`

    const button = document.getElementById('t18-button');
    button.addEventListener('click', () => {
        let sum =
            parseInt(document.getElementById("t18-input1").value) +
            parseInt(document.getElementById("t18-input2").value) +
            parseInt(document.getElementById("t18-input3").value) +
            parseInt(document.getElementById("t18-input4").value) +
            parseInt(document.getElementById("t18-input5").value);

        let avg = sum / 5;
        alert(avg);
    });
}

function task_19() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input type="text" value="some text here" id = "t19-input">`

    const inputElem = document.getElementById('t19-input');
    inputElem.addEventListener('focus', () => {
        document.getElementById("t19-input").value = ' ';
    });
}

function task_20() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t20-button" type="submit" value="1">`

    const button = document.getElementById('t20-button');
    let click_count = 1;

    function myClick(event) {
        click_count++;
        document.getElementById("t20-button").value = click_count;
        if (click_count === 10) {
            button.removeEventListener('click', myClick);
        }
    }
    button.addEventListener('click', myClick);
}

function task_21() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t21-button" type="submit" value="button">
    <input type="text" value="some text here" id = "t21-input">`

    let value1 = document.getElementById('t21-input').value;

    const button = document.getElementById('t21-button');
    button.addEventListener('click', () => {
        let value2 = document.getElementById('t21-input').value;
        if (value1 == value2) {
            alert('nothing has changed');
        } else {
            alert(`something's wrong, I can feel it`);
        }
    });
}

function task_22() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t22-button" type="submit" value="button">
    <input type="text" value="some text here" id = "t22-input">`

    let value1 = document.getElementById('t22-input').value;

    const button = document.getElementById('t22-button');
    button.addEventListener('click', () => {
        document.getElementById('t22-input').value = value1;
    });
}

function task_23() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <div id="t23-div" class=''><div>
    <input id="t23-button" type="submit" value="button">
    `

    const button = document.getElementById('t23-button');
    button.addEventListener('click', () => {
        if (document.getElementById('t23-div').classList.value === 'www') {
            document.getElementById('t23-div').classList.remove('www');
        } else {
            document.getElementById('t23-div').classList.add('www');
        }
        document.getElementById('t23-button').value = document.getElementById('t23-div').classList
    });
}

function task_24() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t24-button" type="submit" value="button">
    <div style="border:2px solid white;width:100px;height:100px" id="t24-div"></div>`

    let varElem = 100;
    let borderElem = 2;
    const button = document.getElementById('t24-button');
    button.addEventListener('click', () => {
        varElem += 5;
        borderElem += 3;
        document.getElementById('t24-div').style.width = `${varElem}px`;
        document.getElementById('t24-div').style.height = `${varElem}px`;
        document.getElementById('t24-div').style.border = `${borderElem}px solid white`;
    });
}

function task_25() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input id="t25-button" type="submit" value="button">
    <div id="t25-div">
        <p>there is some text</p>
    </div>`

    const button = document.getElementById('t25-button');
    button.addEventListener('click', () => {
        document.getElementById('t25-div').style.fontSize = `20px`;
        document.getElementById('t25-div').style.borderTop = `4px solid white`;
        document.getElementById('t25-div').style.background = `orangered`;

    });
}

function task_26() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input id="t26-button" type="submit" value="button">
    <style>
        .t26-div{
            display:none;
        }
        .active{
            display:block;
        }
    </style>
    <div class="t26-div">
        <p>there is some text</p>
    </div>
    
    <div>
	<ul>
		<li>text</li>
		<li>text</li>
		<li id="elem">text</li>
		<li>text</li>
		<li>text</li>
	</ul>
    </div>`

    const button = document.getElementById('t26-button');
    button.addEventListener('click', () => {
        let elem2 = document.querySelector('.t26-div');
        elem2.classList.toggle('active');
    });

    document.querySelector('#elem').parentElement.style.border = "2px solid red"
}

function task_27() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input id="t27-button" type="submit" value="button">
    <header>
	<div>
		<p>
			<span id="elem"></span>
		</p>
	</div>
    </header>
    <style>
        .active{
            border: 2px solid red;
        }
    </style>`

    const button = document.getElementById('t27-button');
    button.addEventListener('click', () => {
        document.querySelector('#elem').closest('div').classList.toggle('active');
    });
}

function task_28() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input id="t28-button" type="submit" value="button">
    <ul>
	    <li>text1</li>
	    <li>text2</li>
	    <li id="elem">text3</li>
	    <li>text4</li>
	    <li>text5</li>
    </ul>`

    const button = document.getElementById('t28-button');
    button.addEventListener('click', () => {
        nodelist1 = document.querySelectorAll('li');
        nodelistArray = Array.from(nodelist1);
        nodelistElemID = 0;
        for (let i = 0; i < nodelistArray.length; i++) {
            if (nodelist1[i].id === 'elem') {
                nodelistElemID = i;
            }
        }

        liElem = document.getElementsByTagName('li')

        text = liElem[nodelistElemID - 1].innerHTML;
        liElem[nodelistElemID - 1].innerHTML = liElem[nodelistElemID + 1].innerHTML;
        liElem[nodelistElemID + 1].innerHTML = text;
    });
}

function task_29() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <div id="parent">
	    <p class="www">text</p>
	    <p class="www">text</p>
	    <p class="www">text</p>
	    <p class="ggg">text</p>
	    <p class="ggg">text</p>
	    <p class="ggg">text</p>
    </div>`

    let parent = document.querySelector('#parent');
    elems1 = parent.querySelectorAll('.www');
    elems2 = parent.querySelectorAll('.ggg');

    console.log(elems1);
    console.log(elems2);
}

function task_30() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <div data-num="1">text</div>
    <div data-num="2">text</div>
    <div data-num="3">text</div>
    <div data-num="4">text</div>
    <div data-num="5">text</div>`

    const divElem = document.querySelectorAll('.modal-content .modal-task div');
    for (let i = 0; i < 5; i++) {
        divElemText = divElem[i].dataset.num;
        divElem[i].addEventListener('click', () => {
            divElemText = divElem[i].dataset.num;
            text = divElem[i].textContent;
            divElem[i].textContent = text + divElemText;
        });
    }
}

function task_31() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input id="t31-button" data-num="0" type="submit" value="button">
    <input id="t31-button-reset" type="submit" value="reset">`

    const button = document.getElementById('t31-button');
    const button2 = document.getElementById('t31-button-reset');

    button.addEventListener('click', () => {
        console.clear();
        console.log('task31');
        button.dataset.num++;
        console.log(button.dataset.num);
    });
    button.addEventListener('dblclick', () => {
        alert(button.dataset.num);
    });
    button2.addEventListener('click', () => {
        console.clear();
        console.log('task31');
        button.dataset.num = 0;
        console.log(button.dataset.num);
    });

}

function task_32() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input type="text" placeholder="Input Name" id = "t32-input1">
    <input type="text" placeholder="empty" id = "t32-input2">
    <input type="text" placeholder="empty" id = "t32-input3">
    <input type="text" placeholder="empty" id = "t32-input4">`;

    const input1 = document.getElementById('t32-input1');
    const input2 = document.getElementById('t32-input2');
    const input3 = document.getElementById('t32-input3');
    const input4 = document.getElementById('t32-input4');


    input1.addEventListener('focusout', () => {
        let words = input1.value.split(' ');
        //console.log(words);
        //console.log(input1.value);
        if (words.length === 3) {
            input2.value = words[0];
            input3.value = words[1];
            input4.value = words[2];
        } else if (words.length === 2) {
            input2.value = words[0];
            input3.value = words[1];
        } else if (words.length === 1) {
            input2.value = words[0];
        } else {
            alert('wrong input');
        }


    });

}

function task_33() {
    executeTask();

    const elem = document.querySelector('.modal-content .modal-task');
    elem.innerHTML = `
    <input type="text" placeholder="Input Name" id = "t33-input1">`;

    const input1 = document.getElementById('t33-input1');

    input1.addEventListener('focusout', () => {
        let words = input1.value.split(' ');

        if (words.length === 3) {

            words[0] = words[0][0].toUpperCase() + words[0].slice(1);
            words[1] = words[1][0].toUpperCase() + words[1].slice(1);
            words[2] = words[2][0].toUpperCase() + words[2].slice(1);

            input1.value = `${words[0]} ${words[1]} ${words[2]}`;
        } else if (words.length === 2) {
            words[0] = words[0][0].toUpperCase() + words[0].slice(1);
            words[1] = words[1][0].toUpperCase() + words[1].slice(1);

            input1.value = `${words[0]} ${words[1]}`;
        } else if (words.length === 1) {
            words[0] = words[0][0].toUpperCase() + words[0].slice(1);

            input1.value = `${words[0]}`;
        } else {
            alert('wrong input');
        }
    });

}

function task_34() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input id="t34-button1" type="submit" value="+">
    <input id="t34-button2" type="submit" value="-">
    <input type="text" value="0" id = "t34-input1">`

    const button = document.getElementById('t34-button1');
    const button2 = document.getElementById('t34-button2');
    const input1 = document.getElementById('t34-input1');

    button.addEventListener('click', () => {
        input1.value++;
    });

    button2.addEventListener('click', () => {
        if (input1.value > 0) {
            input1.value--;
        }
    });

}

function task_35() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="text" placeholder="n" id = "t35-input1">
    <input id="t35-button" type="submit" value="!n">
    <p id="t35-p"></p>`

    const button = document.getElementById('t35-button');
    button.addEventListener('click', () => {
        let numElem = document.querySelector('#t35-input1').value;
        if ((!isNaN(numElem)) && !(numElem === '')) {
            let factortialElem = 1;
            for (let i = 2; i <= numElem; i++) {
                factortialElem = factortialElem * i;
            }
            document.querySelector('#t35-p').textContent = factortialElem;
        } else {
            alert('wrong input')
        }
    });
}

function task_36() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="text" placeholder="n" id = "t36-input1">
    <input id="t36-button-on" type="submit" value="on">
    <input id="t36-button-off" type="submit" value="off">`

    input1 = document.querySelector('#t36-input1');
    const button1 = document.getElementById('t36-button-on');
    button1.addEventListener('click', () => {
        input1.removeAttribute('disabled', true);
    });

    const button2 = document.getElementById('t36-button-off');
    button2.addEventListener('click', () => {
        input1.setAttribute('disabled', true);
    });
}

function task_37() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="checkbox" id="t37-check" disabled="true">
    <input id="t37-button-on" type="submit" value="on">
    <input id="t37-button-off" type="submit" value="off">`

    input1 = document.querySelector('#t37-check');

    const button1 = document.getElementById('t37-button-on');
    button1.addEventListener('click', () => {
        input1.setAttribute('checked', true);
    });

    const button2 = document.getElementById('t37-button-off');
    button2.addEventListener('click', () => {
        input1.removeAttribute('checked', true);
    });
}

function task_38() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="radio" id="t38-radio1" value="1" name="t38">
    <input type="radio" id="t38-radio2" value="2" name="t38">
    <input type="radio" id="t38-radio3" value="3" name="t38">
    <input id="t38-button" type="submit" value="button">
    <p id="t38-p">&nbsp;</p>
    <style>
    .modal-task{
        display:flex;
    }
    </style>`

    const radio1 = document.querySelector("#t38-radio1");
    const radio2 = document.querySelector("#t38-radio2");
    const radio3 = document.querySelector("#t38-radio3");

    const button1 = document.getElementById('t38-button');
    button1.addEventListener('click', () => {
        if (radio1.checked) {
            document.querySelector('#t38-p').textContent = radio1.value;
        }
        if (radio2.checked) {
            document.querySelector('#t38-p').textContent = radio2.value;
        }
        if (radio3.checked) {
            document.querySelector('#t38-p').textContent = radio3.value;
        }
    });
}

function task_39() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="text" placeholder="input" id = "t39-input1">`

    const input1 = document.getElementById('t39-input1');
    input1.addEventListener('change', () => {
        if (input1.value.length < 5) {
            document.getElementById('t39-input1').style.border = "3px solid red";
        } else if (input1.value.length > 5) {
            input1.style.border = "3px solid green"
        } else {
            input1.style.border = "3px solid blue"
        }
    });
}

function task_40() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="text" placeholder="input" id = "t40-input1">
    <p id="t40-p">&nbsp;</p>`

    const input1 = document.getElementById('t40-input1');
    input1.addEventListener('input', () => {
        if (input1.value.length <= 5) {
            document.querySelector('#t40-p').textContent = `${5 - input1.value.length} symbols left`
        } else if (input1.value.length === 6) {
            document.querySelector('#t40-p').textContent = `You have 1 extra symbol`
        } else if (input1.value.length > 6) {
            document.querySelector('#t40-p').textContent = `You have ${-5 + input1.value.length} extra symbols`
        }
    });

}

function task_41() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <select name="years" id="t41-select">
        <option value="">--select--</option>
        <option value="0">2020</option>
        <option value="1">2021</option>
        <option value="2">2022</option>
        <option value="3">2023</option>
        <option value="4">2024</option>
        <option value="5">2025</option>
        <option value="6">2026</option>
        <option value="7">2027</option>
        <option value="8">2028</option>
        <option value="9">2029</option>
        <option value="10">2030</option>
    </select>`

    let yearArray = document.querySelectorAll('#t41-select option');
    let yearArray2 = [];

    for (let i = 1; i < yearArray.length; i++) {
        if (yearArray[i].value % 4 === 0) {
            yearArray2[i - 1] = `${yearArray[i].label} is a Leap Year`
        } else {
            yearArray2[i - 1] = `${yearArray[i].label} is not a Leap Year`
        }
    }

    const SelectElem = document.querySelector('#t41-select');
    SelectElem.addEventListener('change', () => {
        alert(yearArray2[SelectElem.value]);
    });
}

function task_42() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <select name="days" id="t42-select">
        <option value="0">--select--</option>
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
        <option value="7">Sunday</option>
    </select>`

    let daysArray = document.querySelectorAll('#t42-select option');
    let daysArray2 = [];

    //console.log(daysArray);

    for (let i = 1; i < daysArray.length; i++) {
        if (i > 5) {
            daysArray2[i] = `${daysArray[i].label} is a Weekend`
        } else {
            daysArray2[i] = `${daysArray[i].label} is a Weekday`
        }
        daysArray2[0] = `nothing is selected`
    }

    const SelectElem = document.querySelector('#t42-select');
    SelectElem.addEventListener('change', () => {
        alert(daysArray2[SelectElem.value]);
    });

    //console.log(daysArray2);

}

function task_43() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <select name="months" id="t43-select">
        <option value="0">--select--</option>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
    </select>`

    let currentDate = new Date();
    currentMonth = currentDate.getMonth() + 1;
    document.querySelectorAll('#t43-select option')[currentMonth].setAttribute('Selected', true);
}

function task_44() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <select name="text" id="t44-select">
        <option value="0">select</option>
    </select>
    <input type="text" placeholder="input" id = "t44-input1">
    <input id="t44-button" type="submit" value="button">`

    const button1 = document.getElementById('t44-button');
    const input1 = document.getElementById('t44-input1');
    const select1 = document.getElementById('t44-select');
    let i = 0;
    button1.addEventListener('click', () => {
        i++;
        if (input1.value === '') {
            alert('Wrong Input');
        } else {
            let option = document.createElement("option");
            option.text = input1.value;
            select1.add(option);
        }
    });
}

function task_45() {
    executeTask();

    let elem = document.querySelector('.modal-content .modal-task');

    window.addEventListener('mousemove', function(event) {
        elem.innerHTML = event.pageX + ':' + event.pageY;
    });

}

function task_46() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `<button id="elem">text</button>`
    let elem46 = document.querySelector('#elem');
    elem46.addEventListener('click', func);
    elem46.addEventListener('dblclick', func);

    function func(event) {
        if (event.type === 'click') {
            elem46.style.backgroundColor = "green";
        }
        if (event.type === 'dblclick') {
            elem46.style.backgroundColor = "red";
        }
    }

}

function task_47() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <style>
    ul {
        padding: 30px;
        border: 1px solid orangered;
    }
    li {
        list-style-type: none;
        margin-bottom: 20px;
        border: 1px dashed gray;
    }
    </style>

    <ul id="elem">
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
    </ul>`

    let elem47 = document.querySelector('#elem');
    elem47.addEventListener('click', func);

    function func(event) {
        if (event.target.tagName === 'LI') {
            event.target.textContent = event.target.textContent + '!';
        }
        if (event.target.tagName === 'UL') {
            let li47 = document.createElement("li");
            li47.appendChild(document.createTextNode("text"));
            event.target.appendChild(li47);
        }
    }
}

function task_48() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="text" id="t48-input">
    <p id ="t48-p" style=overflow-wrap:break-word;></p>
    `
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (document.querySelector('#t48-input').value === '') {
                console.log(document.querySelector('#t48-input').value);
                alert('Wrong Input');
            } else {

                let text = document.querySelector('#t48-input').value;
                document.querySelector('#t48-input').value = '';
                document.querySelector('#t48-p').textContent = document.querySelector('#t48-p').textContent + text;
            }
        }
    });
}

function task_49() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <p id = "t49-p" style=overflow-wrap:break-word; >text</p>
    `
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Alt') {
            const text1 = document.getElementById('t49-p');
            text1.addEventListener('click', () => {
                document.getElementById('t49-p').style.backgroundColor = 'red';
            });
        }
    });

}

function task_50() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <ul id="elem">
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
    </ul>`

    elem.addEventListener('click', function(event) {
        if (event.ctrlKey) {
            event.target.textContent = event.target.textContent + '1';
        }

        if (event.shiftKey) {
            event.target.textContent = event.target.textContent + '2';
        }
    });

}

function task_51() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <a id = "link51-1" href="https://vk.com">(link)</a>
    <a id = "link51-2" href="https://reddit.com">(link)</a>
    <style>
        a{
            text-decoration: none;
            color: white;
        }
    </style>
    `
    document.querySelector("#link51-1").addEventListener("click", function(event) {
        document.querySelector("#link51-1").textContent = document.querySelector("#link51-1").getAttribute('href');
        event.preventDefault()
    });

    document.querySelector("#link51-2").addEventListener("click", function(event) {
        document.querySelector("#link51-2").textContent = document.querySelector("#link51-2").getAttribute('href');
        event.preventDefault()
    });

}

function task_52() {
    executeTask();

    setInterval(function() {
        console.log("Hello");
    }, 3000);
}

function task_53() {
    executeTask();

    let someVar = 10;

    let timer = setInterval(function() {
        console.log(someVar);
        someVar--;

        if (someVar === 0) {
            clearInterval(timer);
            console.log(someVar);

        }
    }, 100);


}

function task_54() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="text" id="t54-input" value="10">
    `

    let timer = setInterval(function() {
        document.getElementById('t54-input').value--;
        //if(document.getElementById('t54-input').value == 0){
        //    clearInterval(idVar);
        //}
    }, 100);

}

function task_55() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="text" id="t54-input" value="10">
    `

    let timer = setInterval(function() {
        document.getElementById('t54-input').value--;
        if (document.getElementById('t54-input').value == 0) {
            clearInterval(timer);
        }
    }, 100);
}

function task_56() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <p id="t56-p">0</p>
    <input id = "t56-button-start" type="submit" value="start">
    `
    const button1 = document.getElementById('t56-button-start');
    button1.addEventListener('click', () => {
        let timer = setInterval(function() {
            let someVar = parseInt(document.getElementById('t56-p').textContent);
            someVar++;
            document.getElementById('t56-p').textContent++;
            if (someVar == 10) {
                clearInterval(timer);
            }
        }, 1000);
    });

}

function task_57() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <p id="t57-p">10</p>
    <input id = "t57-button-start" type="submit" value="start">
    `
    const button1 = document.getElementById('t57-button-start');
    button1.addEventListener('click', () => {
        let timer = setInterval(function() {
            let someVar = parseInt(document.getElementById('t57-p').textContent);
            someVar--;
            document.getElementById('t57-p').textContent--;
            if (someVar == 0) {
                clearInterval(timer);
            }
        }, 1000);
    });
}

function task_58() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="text" id="t58-input" value='2'>
    <input id = "t58-button-start" type="submit" value="button">
    `
        //let someVar2 = document.getElementById('t58-input').value;
        //someVar2 = parseInt(someVar2)**2;
        //console.log(someVar2);

    let someVar = 4;
    const button1 = document.getElementById('t58-button-start');
    button1.addEventListener('click', () => {
        let timer = setInterval(function() {
            let someVar2 = document.getElementById('t58-input').value;
            someVar--;
            someVar2 = parseInt(someVar2) ** 2;


            document.getElementById('t58-input').value = someVar2;
            if (someVar === 0) {
                clearInterval(timer);
            }

        }, 1000);
    });

}

function task_59() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="text" id="t59-input" placeholder='n'>
    <p id="t59-p"></p>
    `

    const input1 = document.getElementById('t59-input');
    input1.addEventListener('focusout', () => {
        let someVar = document.getElementById('t59-input').value;
        someVar++;
        let timer = setInterval(function() {
            someVar--;
            document.querySelector('#t59-p').textContent = someVar;
            if (someVar === 0) {
                clearInterval(timer);
            }

        }, 1000);
    });

}

function task_60() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="text" id="t60-input" placeholder='n'>
    <input type="submit" id="t60-button" value='button'>
    <p id="t60-p"></p>
    `

    const button1 = document.getElementById('t60-button');
    button1.addEventListener('click', () => {
        let someVar = document.getElementById('t60-input').value;
        someVar++;
        let timer = setInterval(function() {
            someVar--;
            document.querySelector('#t60-p').textContent = someVar;
            if (someVar === 0) {
                clearInterval(timer);
            }

        }, 1000);
    });

}

function task_61() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="submit" id="t61-button-start" value='start'>
    <input type="submit" id="t61-button-stop" value='stop'>
    <p id="t61-p"></p>
    `
    let someVar = 0;
    const button1 = document.getElementById('t61-button-start');
    button1.addEventListener('click', () => {
        let timer = setInterval(function() {
            someVar++;
            document.querySelector('#t61-p').textContent = someVar;
        }, 1000);
        const button2 = document.getElementById('t61-button-stop');
        button2.addEventListener('click', () => {
            clearInterval(timer);
        });
    });
}

function task_62() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <p id="t62-p">&nbsp;</p>
    `
    let someVar = 1;
    const paragraph1 = document.getElementById('t62-p');

    let timer = setInterval(function() {
        someVar++;
        if (someVar % 2 === 0) {
            paragraph1.style.backgroundColor = "red";
        } else {
            paragraph1.style.backgroundColor = "green"
        }
    }, 1000);


}

function task_63() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <p id="t63-p">&nbsp;</p>
    `
    let timer = setInterval(function() {
        d = new Date();
        document.querySelector('#t63-p').textContent = d.toLocaleTimeString();
    }, 1000);
}

function task_63_2() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input type="submit" value="start" id="t63-2button">
    `
    let someVar = 0;

    const button1 = document.getElementById('t63-2button');
    button1.addEventListener('click', () => {
        timer();
    });

    function timer() {
        console.log(someVar);
        someVar++;

        window.setTimeout(timer, 1000); //рекурсия
    }


}

function task_64() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <button id="button">click me</button>
    <ol id="elem"></ol>
    `
    const button1 = document.getElementById('button');
    button1.addEventListener('click', () => {
        liElem = document.createElement('li');
        liElem.appendChild(document.createTextNode("item"));
        document.getElementById('elem').appendChild(liElem);
    });


}

function task_65() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <ul id="t65-ul"></ul>
    `

    for (let i = 1; i < 11; i++) {
        liElem = document.createElement('li');
        liElem.appendChild(document.createTextNode(i));
        document.getElementById('t65-ul').appendChild(liElem);
    }
}

function task_66() {
    executeTask();
    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <div id="parent"></div>
    `


    let parent = document.querySelector('#parent');
    let arr = [1, 2, 3, 4, 5];
    for (let elem of arr) {
        let p = document.createElement('p');
        p.innerHTML = elem;
        parent.appendChild(p);
    }

    const numElem = document.querySelectorAll('#parent p');
    for (let elem of arr) {
        numElem[elem - 1].addEventListener('click', () => {
            numElem[elem - 1].textContent++;
        });
    }
}

function task_67() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <ul id="elem"></ul>
    `
    let arr = ['- Привет', '- Как дела?', '- Как дела?', '- Хорошо', '- Пока', '- Пока'];
    for (let elem of arr) {
        liElem = document.createElement('li');
        liElem.appendChild(document.createTextNode(elem));
        document.getElementById('elem').appendChild(liElem);
    }

}

function task_68() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <table style="width:25%;" id ="t68-table">
    
    </table>
    <style>
        td{
            padding:10px
        }
    </style>
    `

    for (let i = 0; i < 5; i++) {
        trElem = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            tdElem = document.createElement('td');
            tdElem.appendChild(document.createTextNode(j + 1));
            trElem.appendChild(tdElem);
        }
        document.getElementById('t68-table').appendChild(trElem);

    }

}

function task_68_2() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <table style="width:25%;" class ="t68-2-table">
    <input id ="t68-2-i" type="text" placeholder="i">
    <input id ="t68-2-j" type="text" placeholder="j">
    <input id ="t68-button" type="submit" value="create">

    
    </table>
    <style>
        td{
            padding:10px
        }
    </style>
    `

    const button1 = document.getElementById('t68-button');
    button1.addEventListener('click', () => {
        if (document.querySelector('#t68-2-i').value === '' || document.querySelector('#t68-2-i').value === '') {
            alert('Wrong Input');
        } else {
            let varI = document.querySelector('#t68-2-i').value;
            let varJ = document.querySelector('#t68-2-j').value;

            const table = document.querySelector(".modal-content .modal-task table");
            table.remove();
            const tableNew = document.createElement('table');
            tableNew.classList.add('t68-2-table');
            document.querySelector(".modal-task").appendChild(tableNew);

            for (let i = 0; i < varI; i++) {
                trElem = document.createElement('tr');
                for (let j = 0; j < varJ; j++) {
                    tdElem = document.createElement('td');
                    tdElem.appendChild(document.createTextNode(j + 1));
                    trElem.appendChild(tdElem);
                }
                document.querySelector('.t68-2-table').appendChild(trElem);
            }
        }

    });


}

function task_69() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <table style="width:25%;" id ="t69-table">
    
    </table>
    <style>
        td{
            padding:10px
        }
    </style>
    `
    count = 0;

    for (let i = 0; i < 5; i++) {
        trElem = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            count++
            tdElem = document.createElement('td');
            tdElem.appendChild(document.createTextNode(count));
            trElem.appendChild(tdElem);
        }
        document.getElementById('t69-table').appendChild(trElem);

    }

}

function task_70() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <table style="width:25%;" id ="t69-table">
    
    </table>
    <style>
        td{
            padding:10px
        }
    </style>
    `
    count1 = -1;
    let evenElems = [];

    for (let i = 2; i < 51; i++) {
        if (i % 2 === 0) {
            count1++;
            evenElems[count1] = i;
        }
    }

    count2 = -1;


    for (let i = 0; i < 5; i++) {
        trElem = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            count2++;
            tdElem = document.createElement('td');
            tdElem.appendChild(document.createTextNode(evenElems[count2]));
            trElem.appendChild(tdElem);
        }
        document.getElementById('t69-table').appendChild(trElem);

    }

}

function task_71() {
    executeTask();
    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <table style="width:25%;" id ="t71-table">
    
    </table>
    <style>
        td{
            padding:10px
        }
    </style>
    `

    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]
    ];

    for (let i = 0; i < arr.length; i++) {
        trElem = document.createElement('tr');
        for (let j = 0; j < arr[i].length; j++) {
            tdElem = document.createElement('td');
            tdElem.appendChild(document.createTextNode(arr[i][j]));
            trElem.appendChild(tdElem);
        }
        document.querySelector('#t71-table').appendChild(trElem);
    }


}

function task_72() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <table style="width:25%;" id ="t72-table">
    
    </table>
    <style>
        td{
            padding:10px
        }
    </style>
    `

    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]
    ];
    for (let i = 0; i < arr.length; i++) {
        trElem = document.createElement('tr');
        for (let j = 0; j < arr[i].length; j++) {
            tdElem = document.createElement('td');
            tdElem.appendChild(document.createTextNode(arr[i][j] ** 2));
            trElem.appendChild(tdElem);
        }
        document.querySelector('#t72-table').appendChild(trElem);
    }

}

function task_73() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <table style="width:25%;" id ="t73-table">
    
    </table>
    <style>
        td{
            padding:10px
        }
    </style>
    `

    let employees = [

        { name: 'employee1', age: 30, salary: 400 },

        { name: 'employee2', age: 31, salary: 500 },

        { name: 'employee3', age: 32, salary: 600 },

    ];

    for (let i = 0; i < employees.length; i++) {
        trElem = document.createElement('tr');

        tdElem1 = document.createElement('td');
        tdElem1.classList.add('name');
        tdElem1.appendChild(document.createTextNode(employees[i].name));
        trElem.appendChild(tdElem1);

        tdElem2 = document.createElement('td');
        tdElem2.classList.add('age');
        tdElem2.appendChild(document.createTextNode(employees[i].age));
        trElem.appendChild(tdElem2);

        tdElem3 = document.createElement('td');
        tdElem3.classList.add('salary');
        tdElem3.appendChild(document.createTextNode(employees[i].salary));
        trElem.appendChild(tdElem3);

        document.querySelector('#t73-table').appendChild(trElem);
    }

}

function task_74() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <table style="width:25%;" id ="t74-table">
    
    </table>
    <style>
        td{
            padding:10px
        }
    </style>
    `

    let employees = [

        { name: 'employee1', age: 30, salary: 400 },

        { name: 'employee2', age: 31, salary: 500 },

        { name: 'employee3', age: 32, salary: 600 },

    ];

    for (let i = 0; i < employees.length; i++) {
        trElem = document.createElement('tr');

        tdElem1 = document.createElement('td');
        tdElem1.classList.add('name');
        tdElem1.appendChild(document.createTextNode(employees[i].name));
        trElem.appendChild(tdElem1);

        tdElem2 = document.createElement('td');
        tdElem2.classList.add('age');
        tdElem2.appendChild(document.createTextNode(employees[i].age));
        trElem.appendChild(tdElem2);

        tdElem3 = document.createElement('td');
        tdElem3.classList.add('salary');
        tdElem3.appendChild(document.createTextNode(employees[i].salary));
        trElem.appendChild(tdElem3);

        document.querySelector('#t74-table').appendChild(trElem);
    }

    const age1 = document.querySelectorAll('.age');
    //console.log(age1);


    for (let i = 0; i < employees.length; i++) {
        age1[i].addEventListener('click', () => {
            age1[i].textContent++;
        });
    }


}

function task_75() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <table style="width:25%;" id ="t75-table">
    
    </table>
    <style>
        td{
            padding:10px
        }
    </style>
    `

    let employees = [

        { name: 'employee1', age: 30, salary: 400 },

        { name: 'employee2', age: 31, salary: 500 },

        { name: 'employee3', age: 32, salary: 600 },

    ];

    for (let i = 0; i < employees.length; i++) {
        trElem = document.createElement('tr');

        tdElem1 = document.createElement('td');
        tdElem1.classList.add('name');
        tdElem1.appendChild(document.createTextNode(employees[i].name));
        trElem.appendChild(tdElem1);

        tdElem2 = document.createElement('td');
        tdElem2.classList.add('age');
        tdElem2.appendChild(document.createTextNode(employees[i].age));
        trElem.appendChild(tdElem2);

        tdElem3 = document.createElement('td');
        tdElem3.classList.add('salary');
        tdElem3.appendChild(document.createTextNode(employees[i].salary));
        trElem.appendChild(tdElem3);

        document.querySelector('#t75-table').appendChild(trElem);
    }

    const age1 = document.querySelectorAll('.age');
    const salary1 = document.querySelectorAll('.salary');

    //console.log(age1);


    for (let i = 0; i < employees.length; i++) {
        age1[i].addEventListener('click', () => {
            age1[i].textContent++;
        });
        salary1[i].addEventListener('click', () => {
            salary1[i].textContent = Math.round(salary1[i].textContent * 1.1);
        });
    }
}

function task_76() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input id = "t76-button" type="submit" value="button">
    <table style="width:25%;" id ="t76-table">
    
    </table>
    <style>
        td{
            padding:10px
        }
    </style>
    `

    const button1 = document.getElementById('t76-button');
    button1.addEventListener('click', () => {
        trElem = document.createElement('tr');
        trElem.appendChild(document.createTextNode('text'));
        document.querySelector('#t76-table').appendChild(trElem);
    });

}

function task_77() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input id = "t77-button" type="submit" value="button">

    <table id="table">
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </table>


    <style>
        td {
            width: 50px;
            height: 50px;
            border: 1px solid gray;
        }
    </style>
    `

    function addRow() {
        let table = document.querySelector('#table tbody');
        let trElems = document.querySelectorAll('#table tr');
        let trCount = trElems.length;
        trElem = document.createElement('tr');
        table.appendChild(trElem);
        for (let i = 0; i < trElems.length; i++) {
            tdElem = document.createElement('td');
            trElem.appendChild(tdElem);
        }
        trElems = document.querySelectorAll('#table tr');
        trCount = trElems.length;
        console.log(trCount);


    }

    function addColumn() {
        let trElems = document.querySelectorAll('#table tr');
        for (let i = 0; i < trElems.length; i++) {
            tdElem = document.createElement('td');
            trElems[i].appendChild(tdElem);
        }
    }

    const button1 = document.getElementById('t77-button');
    button1.addEventListener('click', () => {
        addRow();
        addColumn();
    });

}

function task_78() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `

    <table id="t78-table">
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        
        <style>
            td {
                width: 50px;
                height: 50px;
                border: 1px solid gray;
                text-align:center;
                padding-top:12.5px;
            }
        </style>
    </table>`

    let tdElems = document.querySelectorAll('#t78-table td');

    for (let i = 0; i < tdElems.length; i++) {
        tdElems[i].addEventListener('click', () => {
            tdElems[i].textContent = i + 1;
        });
    }

}

function task_79() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input id="button" type="submit" value="button">
    <ul id="parent">
	    <li>1</li>
	    <li id="elem">2</li>
	    <li>3</li>
    </ul>

    `

    const button1 = document.getElementById('button');
    button1.addEventListener('click', () => {
        document.querySelector('#elem').remove();
    });
}

function task_80() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <ul id="parent">
	    <li>1</li>
	    <li id="elem">2</li>
	    <li>3</li>
    </ul>
    `

    const liElems = document.querySelectorAll('li');
    for (let i = 0; i < liElems.length; i++) {
        liElems[i].addEventListener('click', () => {
            liElems[i].remove();
        });
    }

}

function task_81() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <ul id="parent">
        <li>text</li>
        <li>text</li>
        <li id="elem">elem</li>
        <li>text</li>
        <li>text</li>
    </ul>
    `
    newElem = document.createElement('li');
    newElem.appendChild(document.createTextNode('new'));
    document.querySelector('#parent').insertBefore(newElem, document.querySelector('#elem'));

}

function task_82() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <div>
    <input id = 't82-button' type="submit" value='button'>
    <input class = 't82-input'type="text" placeholder="clone me">
    </div>
    `
    const button1 = document.getElementById('t82-button');
    button1.addEventListener('click', () => {
        let ogItem = document.querySelector('.t82-input');
        let clone = ogItem.cloneNode(true);
        elem1.appendChild(clone);
    });


}

function task_83() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
    `
    const liElem = document.querySelectorAll('li');
    let activeElems = 0;

    for (let i = 0; i < liElem.length; i++) {
        liElem[i].addEventListener('dblclick', () => {
            if (!liElem[i].classList.contains('active')) {
                newInput = document.createElement('input');
                newInput.setAttribute("class", "t83-input");
                newInputBtn = document.createElement('input');
                newInputBtn.setAttribute("type", "submit");
                newInputBtn.setAttribute("value", "ok");
                newInputBtn.setAttribute("class", "t83-button");
                liElem[i].appendChild(newInput);
                liElem[i].appendChild(newInputBtn);

                const button1 = document.querySelector('.t83-button');
                button1.addEventListener('click', () => {
                    if (document.querySelector('.t83-input').value === '') {
                        alert('wrong input');
                    } else {
                        liElem[i].textContent = `${document.querySelector('.t83-input').value}`
                    }
                });
            } else if (liElem[i].classList.contains('active')) {
                newInput.remove();
                newInputBtn.remove();
            }
        });

        liElem[i].addEventListener('dblclick', () => {
            if (activeElems < 2) {
                liElem[i].classList.toggle('active');
                activeElems = document.querySelectorAll('li.active').length;
            } else {
                if (liElem[i].hasAttribute('class', 'active')) {
                    liElem[i].classList.remove('active');
                    activeElems = document.querySelectorAll('li.active').length;
                }
            }
        });
    }
}

function task_84() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>`

    const liElem = document.querySelectorAll('li');
    for (let i = 0; i < liElem.length; i++) {
        liElem[i].addEventListener('click', () => {
            liElem[i].style.backgroundColor = 'red';

        });
    }
}

function task_85() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>

    <style>
        .coloredClass{
            background-color: red;
        }
</style>`

    const liElem = document.querySelectorAll('li');
    for (let i = 0; i < liElem.length; i++) {
        liElem[i].addEventListener('click', () => {
            liElem[i].classList.toggle('coloredClass');

        });
    }

}

function task_86() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `

    <table id="t86-table">
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        
        <style>
            td {
                width: 50px;
                height: 50px;
                border: 1px solid gray;
                text-align:center;
                padding-top:12.5px;
            }
            .active{
                background-color:green;
            }
        </style>
    </table>`

    let tdElems = document.querySelectorAll('#t86-table td');
    let activeElems = 0;
    //let flag = 1;

    for (let i = 0; i < tdElems.length; i++) {
        tdElems[i].addEventListener('click', () => {
            if (activeElems < 3) {
                tdElems[i].classList.toggle('active');
                activeElems = document.querySelectorAll('#t86-table td.active').length;
            } else {
                if (tdElems[i].hasAttribute('class', 'active')) {
                    tdElems[i].classList.remove('active');
                    activeElems = document.querySelectorAll('#t86-table td.active').length;
                }
            }
        });
    }
}

function task_87() {
    executeTask();

    const elem1 = document.querySelector('.modal-content .modal-task');
    elem1.innerHTML = `
    <input id='t87-nameInput' type="text" placeholder=name>
    <input id='t87-ageInput' type="text" placeholder=age>
    <input id='t87-salaryInput' type="text" placeholder=salary>
    <input id='t87-newEmp' type="submit" value="add">

    <table style="width:25%;" id ="t87-table">
    
    </table>
    <style>
        td{
            padding:10px;
            border: 2px dashed grey;
        }
    </style>
    `

    let employees = [

        { name: 'employee1', age: 30, salary: 400 },

        { name: 'employee2', age: 31, salary: 500 },

        { name: 'employee3', age: 32, salary: 600 },

    ];

    for (let i = 0; i < employees.length; i++) {
        trElem = document.createElement('tr');

        tdElem1 = document.createElement('td');
        tdElem1.classList.add('name');
        tdElem1.appendChild(document.createTextNode(employees[i].name));
        trElem.appendChild(tdElem1);

        tdElem2 = document.createElement('td');
        tdElem2.classList.add('age');
        tdElem2.appendChild(document.createTextNode(employees[i].age));
        trElem.appendChild(tdElem2);

        tdElem3 = document.createElement('td');
        tdElem3.classList.add('salary');
        tdElem3.appendChild(document.createTextNode(employees[i].salary));
        trElem.appendChild(tdElem3);

        tdElem4 = document.createElement('td');
        //tdElem4.classList.add('remove');

        delInput = document.createElement('input')
        delInput.setAttribute('type', 'submit');
        delInput.setAttribute('value', 'delRow');
        delInput.classList.add('remove');


        tdElem4.appendChild(delInput);
        trElem.appendChild(tdElem4);

        document.querySelector('#t87-table').appendChild(trElem);
    }

    //let age1 = document.querySelectorAll('.age');
    //let salary1 = document.querySelectorAll('.salary');


    let tdElems = document.querySelectorAll('td');
    let trElems = document.querySelectorAll('tr');
    //const addElem = document.querySelector('#t87-newEmp');
    let removeElems = document.querySelectorAll('.remove');

    let activeElems = 0;

    const button1 = document.getElementById('t87-newEmp');
    button1.addEventListener('click', () => {
        trElem = document.createElement('tr');

        tdElem1 = document.createElement('td');
        tdElem1.classList.add('name');
        let nameInput = document.querySelector('#t87-nameInput').value;
        tdElem1.appendChild(document.createTextNode(nameInput));
        trElem.appendChild(tdElem1);

        tdElem2 = document.createElement('td');
        tdElem2.classList.add('age');
        let ageInput = document.querySelector('#t87-ageInput').value;
        tdElem2.appendChild(document.createTextNode(ageInput));
        trElem.appendChild(tdElem2);

        tdElem3 = document.createElement('td');
        tdElem3.classList.add('salary');
        let salaryInput = document.querySelector('#t87-salaryInput').value;
        tdElem3.appendChild(document.createTextNode(salaryInput));
        trElem.appendChild(tdElem3);

        tdElem4 = document.createElement('td');
        //tdElem4.classList.add('remove');

        delInput = document.createElement('input')
        delInput.setAttribute('type', 'submit');
        delInput.setAttribute('value', 'delRow');
        delInput.classList.add('remove');


        tdElem4.appendChild(delInput);
        trElem.appendChild(tdElem4);
        tdElems = document.querySelectorAll('td');

        document.querySelector('#t87-table').appendChild(trElem);

        removeElems = document.querySelectorAll('.remove');
        trElems = document.querySelectorAll('tr');

        trElem.querySelectorAll('td').forEach(td => {
            td.addEventListener('dblclick', () => {

                if (!td.classList.contains('active')) {
                    newInput = document.createElement('input');
                    newInput.setAttribute("class", "t83-input");
                    newInputBtn = document.createElement('input');
                    newInputBtn.setAttribute("type", "submit");
                    newInputBtn.setAttribute("value", "ok");
                    newInputBtn.setAttribute("class", "t83-button");
                    td.appendChild(newInput);
                    td.appendChild(newInputBtn);

                    const button1 = document.querySelector('.t83-button');
                    button1.addEventListener('click', () => {
                        if (document.querySelector('.t83-input').value === '') {
                            alert('wrong input');
                        } else {
                            td.textContent = `${document.querySelector('.t83-input').value}`
                        }
                    });
                } else if (td.classList.contains('active')) {
                    newInput.remove();
                    newInputBtn.remove();
                }

                /*if (activeElems < 2) {
                    td.classList.toggle('active');
                    activeElems = document.querySelectorAll('td.active').length;
                } else {
                    if (td.hasAttribute('class', 'active')) {
                        td.classList.remove('active');
                        activeElems = document.querySelectorAll('td.active').length;
                    }
                }*/
            });
        })




        for (let j = 0; j < removeElems.length; j++) {
            for (let k = 0; k < trElems.length; k++) {
                removeElems[j].addEventListener('click', () => {
                    trElems[j].remove();
                });
            }
        }
    });


    for (let j = 0; j < removeElems.length; j++) {
        for (let k = 0; k < trElems.length; k++) {
            removeElems[j].addEventListener('click', () => {
                trElems[j].remove();
            });
        }
    }

    for (let i = 0; i < tdElems.length; i++) {
        tdElems[i].addEventListener('dblclick', () => {
            if (!tdElems[i].classList.contains('active')) {
                newInput = document.createElement('input');
                newInput.setAttribute("class", "t83-input");
                newInputBtn = document.createElement('input');
                newInputBtn.setAttribute("type", "submit");
                newInputBtn.setAttribute("value", "ok");
                newInputBtn.setAttribute("class", "t83-button");
                tdElems[i].appendChild(newInput);
                tdElems[i].appendChild(newInputBtn);

                const button1 = document.querySelector('.t83-button');
                button1.addEventListener('click', () => {
                    if (document.querySelector('.t83-input').value === '') {
                        alert('wrong input');
                    } else {
                        tdElems[i].textContent = `${document.querySelector('.t83-input').value}`
                    }
                });
            } else if (tdElems[i].classList.contains('active')) {
                newInput.remove();
                newInputBtn.remove();
            }
        });

        tdElems[i].addEventListener('dblclick', () => {
            if (activeElems < 2) {
                tdElems[i].classList.toggle('active');
                activeElems = document.querySelectorAll('td.active').length;
            } else {
                if (tdElems[i].hasAttribute('class', 'active')) {
                    tdElems[i].classList.remove('active');
                    activeElems = document.querySelectorAll('td.active').length;
                }
            }
        });
    }
}