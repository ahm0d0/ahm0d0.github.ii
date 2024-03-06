let mycontan = document.querySelector(".thisWillBE-Hidden");

let thanksBage = document.querySelector(".thisWillBE-Block");

let myList = document.querySelectorAll("li");

let myRate = document.querySelector(".myNumber");

let sora = document.querySelector(".sora");

let btn = document.querySelector(".butt");

let myArray = Array.from(myList);

getTheRate();

function getTheRate(){
myArray.forEach((item) => {
    item.addEventListener("click", (e) => {
        let title = e.target.textContent;
    
        myRate.innerHTML = " " + title;
        if(title === ""){
            alert("Enter your rating");
        }else{
            switchThePage();
        }
    });
});
}

function switchThePage(){
    btn.addEventListener("click", () => {

    mycontan.classList.add("thisWillBE-Block");
    thanksBage.classList.remove("thisWillBE-Block");
});}


