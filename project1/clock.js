let input = prompt("Lütfen adınızı giriniz: ");
let userName = document.querySelector("#myName");
let time = document.querySelector(".text2");

userName.innerHTML = input;

function showTime(){
    let currentDate = new Date();
    let dateTime = currentDate.getDate() + "/"
    + currentDate.getMonth() + "/"
    + currentDate.getFullYear() + " "
    + (currentDate.getDay.toString() == 1 ? "Pazartesi" : 
    currentDate.getDay() == 2 ? "Salı" : 
    currentDate.getDay() == 3 ? "Çarşamba" : 
    currentDate.getDay() == 4 ? "Perşembe" : 
    currentDate.getDay() == 5 ? "Cuma" : 
    currentDate.getDay() == 6 ? "Cumartesi" : "Pazar")
    + currentDate.getHours() + ":"
    + currentDate.getMinutes() + ":"
    + currentDate.getSeconds() ;
    time.innerHTML = dateTime + time.innerHTML;
    console.log("<"+currentDate.getDay()+">");
}
showTime()