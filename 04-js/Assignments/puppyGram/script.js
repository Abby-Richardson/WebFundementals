console.log ("Hello!")

function removeCookieBox(id){
    console.log("id of the box I want to remove is", id)
    document.querySelector("#" + id)
    let elementToRemove = document.querySelector("#" + id);
    console.log(elementToRemove);
    elementToRemove.remove();
}

function searchPuppy(){
    // console.log ("Searching for a puppy names Clifford!")
    let element=document.querySelector("#search-bar");
    // console.log (element.value)
    alert("you searched for " + element.value);
}