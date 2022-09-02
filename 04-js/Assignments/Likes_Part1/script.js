function increaseLikes(element){
    // console.log ("I Like!", element);
    let spanElement=document.querySelector("#"+ element);
    // console.log(spanElement.innerText);

    let currentCount = spanElement.innerText;
    currentCount++;

    spanElement.innerText = currentCount;
}