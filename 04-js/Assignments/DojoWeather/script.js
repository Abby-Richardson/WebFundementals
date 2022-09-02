console.log ("Howdy")

function removeBox (element){
    console.log ("element of the cookie box I want to remove is", element)
    let elementToRemove = document.querySelector("#"+ element);
    console.log(elementToRemove);
    elementToRemove.remove();
}

function changeToFahrenheitTemp(element){
    console.log("changing to fahrenheit", element);
}