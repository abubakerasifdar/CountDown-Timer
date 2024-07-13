console.log("app.js");
// form getting Data selection
const counter_form = document.getElementById(`counter-forms`);
const counter_forms = document.getElementById(`counter-form`);
const counterDown_main = document.getElementById(`counterDown-main`);

// countdown selection data
const countDown_title = document.getElementById(`countDown-titles`);
const counterTimes = document.querySelectorAll(`h2`);
const counter_reset = document.getElementById(`counter-reset`);

// counter complete Selection
const counter_finished = document.getElementById(`counter-finished`);
const create_new_countdown = document.getElementById(`create-new-countdown`);
let counterdownactive;
// function for getting the data from the form
let counterdownvalue = Date;
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24; 
function updatedom (){
    counterdownactive =  setInterval (() => {
        let  nowtime = new Date().getTime();
        let  endtime = counterdownvalue - nowtime;
        console.log(endtime);
        let days = Math.floor(endtime/day);
        let hours = Math.floor(endtime % day/hour);
        let minutes = Math.floor(endtime % hour/ minute);
        let seconds = Math.floor(endtime % minute/second);
        console.log(days, hours, minutes, seconds);
        counterTimes[0].textContent = days;
        counterTimes[1].textContent = hours;
        counterTimes[2].textContent = minutes;
        counterTimes[3].textContent = seconds;
        countDown_title.textContent =  title;
        
    } , 1000)
  counter_forms.hidden = true;
  counterDown_main.hidden = false;
  

  
  

}

let title = "";
let date = "";
function counterupdate (e){
    // use it to prevent the pages load with cause the lose of the values
     e.preventDefault();
    //  get the data from the event src using the console log
      title = e.srcElement[0].value;
      date = e.srcElement[1].value;
     console.log(title,date);
    //  console log to get the data for form
    if(date === '')
    {
        alert("please write the correct date");
    }
    else{
         counterdownvalue = new Date(date).getTime();
        console.log(counterdownvalue);
    }
    console.log(e);
    updatedom();
}

counter_form.addEventListener("submit" , counterupdate );






