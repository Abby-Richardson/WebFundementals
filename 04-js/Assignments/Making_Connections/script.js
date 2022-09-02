console.log("Howdy")

function removeConnection (id){
    console.log('id of the box I want to remove is', id)
    let elementToRemove = document.querySelector("#" + id);
    console.log(elementToRemove);
    elementToRemove.remove();
}

function decreaseConnection (number){
    console.log("bye bye connection requests!", number);
    let elementToDecrease = document.querySelector ("#" + number)
    console.log(elementToDecrease.innerText);
    let currentCount = elementToDecrease.innerText;
    currentCount--;
    elementToDecrease.innerText = currentCount;

}

function changeName(name){
    console.log("You clicked on edit profile!", name);
    document.getElementById ("abby").innerHTML = 'Jane Doe';
}

function increaseConnections(connections){
    console.log("I am gaining so many friends!", connections);
    let elementToIncrease = document.querySelector ("#" + connections);
    console.log(elementToIncrease.innerText);
    let currentCount = elementToIncrease.innerText;
    currentCount++;
    elementToIncrease.innerText = currentCount;
}  