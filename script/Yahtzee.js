// JavaScript source code
count = 0;
function placeHeading(element) {
    let SElement = document.createElement('h1');
    SElement.innerHTML = "Yahtzee";
    SElement.style.textAlign = "center";
    SElement.style.fontSize = '60px';
    document.getElementById(element).appendChild(SElement);
}
placeHeading('bdy');

function placeDice(element) {
    let tbelement = document.createElement('TABLE');
    tbelement.style.marginLeft = 'auto';
    tbelement.style.marginRight = 'auto';

    let trelement1 = document.createElement('tr');
    trelement1.id = "tr1"
    trelement1.style.marginLeft = 'auto';
    trelement1.style.marginRight = 'auto';
    for (let i = 1; i < 6; i++) {
        let tdelement = document.createElement('td');
        let imgelement = document.createElement('img')
        let num = Math.floor((Math.random() * 6)+1)
        imgelement.src = `images/${num}.png`
        imgelement.id = `img${i}`
        tdelement.style.textAlign = 'center';
        tdelement.appendChild(imgelement);
        trelement1.appendChild(tdelement);
    }
    let trelement2 = document.createElement('tr');
    for (let i = 1; i < 6; i++) {
        let tdelement = document.createElement('td');
        let inputelement = document.createElement('input');
        tdelement.style.textAlign = 'center';
        inputelement.type = "checkbox";
        inputelement.name = "HOLD"
        inputelement.id = `HOLD${i}`
        inputelement.innerText = "HOLD"
        inputelement.style.textAlign = 'center';
        let divelement = document.createElement('div');
        divelement.innerHTML = "HOLD"
        divelement.style.textAlign = 'center';
        tdelement.appendChild(inputelement);
        tdelement.appendChild(divelement);
        trelement2.appendChild(tdelement);



    }

    tbelement.appendChild(trelement1);
    tbelement.appendChild(trelement2);
    document.getElementById(element).appendChild(tbelement);

}
placeDice('bdy');


function placeControls(element) {
    let divelement = document.createElement('div');
    divelement.innerHTML = "You have 3 rolls";
    divelement.id = 'div1';
    divelement.style.textAlign = "center";
    document.getElementById(element).appendChild(divelement);

    let btelement = document.createElement("BUTTON");
    btelement.type = "button";
    btelement.style.display = 'block';
    btelement.innerHTML = "ROLL";
    btelement.id = 'bt1'
    btelement.style.marginLeft = 'auto';
    btelement.style.marginRight = 'auto';
    btelement.addEventListener("click", roll);
    document.getElementById(element).appendChild(btelement);
}

placeControls('bdy');

function roll() {
    for (let i = 1; i < 6; i++) {
        let ipelement = document.getElementById(`HOLD${i}`);
        if (ipelement.checked == false) {
            let num = parseInt(throwDice());
            document.getElementById(`img${i}`).src = `images/${num}.png`;

        }
    }
    rollsLeftMessage()
}

function throwDice() {
    return Math.floor((Math.random() * 6) + 1);
}

throwDice();
function rollsLeftMessage() {
    divelement1 = document.getElementById("div1")
    if (count == 0) {
        divelement1.innerHTML = "You have 2 rolls"
        count++;
    }
    else if (count == 1) {
        divelement1.innerHTML = "You have 1 roll"
        count++;
    }
    else if (count == 2) {
        divelement1.innerHTML = "You have 0 rolls"
        document.getElementById("bt1").disabled = true;

    }
}