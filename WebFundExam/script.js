// console.log("hello!")

function removeCookieBox(id){
    // console.log("id of the box I want to remove is", id)
    let elementToRemove = document.querySelector("." + id);
    // console.log (elementToRemove);
    elementToRemove.remove();
}

function switchimage(imageElement){
    // console.log(imageElement.src)
    if(imageElement.src="http://127.0.0.1:5500/WebFundExam/images3/assets/succulents-1.jpg")
        imageElement.src= "./assets/succulents-2.jpg";
    // else
    //     imageElement.src = "./images 3/assets/succulents-1.jpg";
    }

