
function hideHeading(){
    let randomNum = Math.random();
    if (randomNum <= 0.5) {
        // var welcomeHeading = document.getElementsByClassName(".heading");
        // document.querySelector(".heading").hidden = true;
        document.body.innerHTML = document.body.innerHTML.replace('Welcome', 'Greetings');
        console.log(randomNum);
    } else {
        console.log("Welcome, guests! " + randomNum);
    }
}
hideHeading();