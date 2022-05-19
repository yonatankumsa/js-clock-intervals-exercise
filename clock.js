const secondEl = document.getElementById("second");
const minuteEl = document.getElementById("minute");
const hourEl = document.getElementById("hour");
const clockEl = document.getElementById("face");

let second = 0;
let minute = 0;
let hour = 0;
let d = new Date();
function yoni(yoo) {
  setInterval(function () {
    d = new Date();
    second = d.getSeconds() *6;
    minuits = d.getMinutes() * 6;   
    hour = d.getHours() %12*30;

    secondEl.style.transform = "rotate(" + second + "deg)";
    minuteEl.style.transform = "rotate(" + minuits + "deg)";
    hourEl.style.transform = "rotate(" + hour + "deg)";
   
  }, 1000);
  
}      
yoni();
      
       

