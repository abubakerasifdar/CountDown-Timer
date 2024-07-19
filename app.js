console.log("app.js");
// form getting Data selection
date_picker = document.getElementById(`datepicker`);
const Timer_completes = document.getElementById(`Timer-completes`);
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
// milisecond to days, hour, second, and minutes 
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let today = new Date().toISOString().split("T")[0];
date_picker.setAttribute("min", today);
function updatedom() {
    // set interval use call the function every mili second
  counterdownactive = setInterval(() => {
    let nowtime = new Date().getTime();
    let endtime = counterdownvalue - nowtime;
    console.log(endtime);
    // Date to timer conversion logics
    let days = Math.floor(endtime / day);
    let hours = Math.floor((endtime % day) / hour);
    let minutes = Math.floor((endtime % hour) / minute);
    let seconds = Math.floor((endtime % minute) / second);
    console.log(days, hours, minutes, seconds);
    if (endtime < 0) {
      Timer_completes.hidden = false;
      counter_forms.hidden = true;
      counterDown_main.hidden = true;
      clearInterval(counterdownactive);
      counter_finished.textContent = `${title} is Finished on ${date}`;
    } else {
      counterTimes[0].textContent = days;
      counterTimes[1].textContent = hours;
      counterTimes[2].textContent = minutes;
      counterTimes[3].textContent = seconds;
      countDown_title.textContent = title;
      counter_forms.hidden = true;
      counterDown_main.hidden = false;
    }
  }, 1000);
}
let title = "";
let date = "";
function counterupdate(e) {
  // use it to prevent the pages load with cause the lose of the values
  e.preventDefault();
  //  get the data from the event src using the console log
  title = e.srcElement[0].value;
  date = e.srcElement[1].value;

   const savedCountDown = {
    title:title,
    date:date
   };
    
   localStorage.setItem('countdown' , JSON.stringify(savedCountDown));





  console.log(title, date);

  //  console log to get the data for form
  if (date === "") {
    alert("please write the correct date");
  } else {
    counterdownvalue = new Date(date).getTime();
    console.log(counterdownvalue);
  }
  console.log(e);
  updatedom();
}
function createnewcountdown() {
   localStorage.removeItem('countdown');
  console.log("create_new_countdown");
  clearInterval(counterdownactive);
  Timer_completes.hidden = true;
  title = "";
  date = "";
  counter_forms.hidden = false;
  counterDown_main.hidden = true;
}
function counterreset() {
  localStorage.removeItem('countdown');
  console.log("create_new_countdown");
  clearInterval(counterdownactive);
  Timer_completes.hidden = true;
  title = "";
  date = "";
  counter_forms.hidden = false;
  counterDown_main.hidden = true;
}
function restoreCountdown () {
  
  if (localStorage.getItem('countdown')){
  let countdownData = JSON.parse(localStorage.getItem('countdown'));
  let title = countdownData.title;
  let date = countdownData.date;
  if (date === "") {
    alert("please write the correct date");
  } else {
    counterdownvalue = new Date(date).getTime();
    console.log(counterdownvalue);
  }
  updatedom();
  counter_forms.hidden = true;

  }
  

}
counter_form.addEventListener("submit", counterupdate);
create_new_countdown.addEventListener("click", createnewcountdown);
counter_reset.addEventListener("click", counterreset);
restoreCountdown();