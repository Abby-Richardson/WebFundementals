console.log ("Hello!")

function togglelogin(buttonelement){
    console.log ("You clicked on Login button!", buttonelement);
    buttonelement.innerText = "Logout";
}
    // if(buttonelement.innerText === "login"){
    //     buttonelement.innerText = "Logout"; 
    
    // }else{
    //     buttonelement.innerText = "Login";
    // }

    // }

function removebutton(element){
    // console.log ("Button removed!", element);
    element.remove();
}