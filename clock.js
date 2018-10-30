
//Selectors
var ID = document.getElementById.bind(document);
var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);


this.addEventListener("DOMContentLoaded", initializeClock);


var sec, min, hr, clock, secondHand, minuteHand, hourHand, secDeg,
    minDeg, hrDeg, clockRadius, start, spanDeg, _top, right, clockIsPaused;


function initializeClock()
{
  //loading clock ----->
  function loadClock()
  {
    sec = new Date().getSeconds();
    min = new Date().getMinutes();
    hr = new Date().getHours();
    clock = ID("clock-wrapper");
    secondHand = ID("clock-second");
    minuteHand = ID("clock-minute");
    hourHand = ID("clock-hour");
    
    secDeg = (sec * 6);    
    minDeg = (min + (sec / 60)) * 6; 
    hrDeg = ((hr - 12) * 30) + ((min / 60) * 30);
  }
  document.addEventListener("visibilitychange", loadClock);
  loadClock();
  
  clockRadius = ((clock.offsetWidth - 20) / 2);
  
  
  
  //starting clock ----->
  function clockFunc()
  {
    secondHand.style.WebkitTransform = "rotate(" + secDeg + "deg)";
    minuteHand.style.WebkitTransform = "rotate(" + minDeg + "deg)";
    hourHand.style.WebkitTransform = "rotate(" + hrDeg + "deg)";
    secondHand.style.transform = "rotate(" + secDeg + "deg)";
    minuteHand.style.transform = "rotate(" + minDeg + "deg)";
    hourHand.style.transform = "rotate(" + hrDeg + "deg)";
   
    secDeg += 6;    minDeg += 0.1;    hrDeg += Number((0.1/60).toFixed(4));
    hr = new Date().getHours();
    min = new Date().getMinutes();
    sec = new Date().getSeconds();
    if (hr > 11)
      ID("am-pm").innerHTML = "PM";
    else
      ID("am-pm").innerHTML = "AM";
  }
  function startClock()
  { start = setInterval(clockFunc, 1000); }
  setTimeout(startClock, 600);

 

  //creating hours strokes (with the <span> tag) ----->
  for (let i = 0, spanDeg = 0, timeout = 400; i < 12; i++, spanDeg += 30, timeout += 100)
  {
    setTimeout(function() 
    {
      _top = (Math.cos(spanDeg * Math.PI/180) * (clockRadius - 10)).toFixed(6);
      right = (Math.sin(spanDeg * Math.PI/180) * (clockRadius - 10)).toFixed(6);
    
      clock.insertAdjacentHTML("beforeend", "<span class='digits d" + i + "'></span>");
      clock.getElementsByClassName("d"+i)[0].style.WebkitTransform = "rotate(" + spanDeg + "deg)";
      clock.getElementsByClassName("d"+i)[0].style.transform = "rotate(" + spanDeg + "deg)";
      clock.getElementsByClassName("d"+i)[0].style.top = ((clockRadius - 9.5) - _top) + "px";
      clock.getElementsByClassName("d"+i)[0].style.right = ((clockRadius - 1.5) - right) + "px";
      setTimeout(() => clock.getElementsByClassName("d"+i)[0].style.opacity = "1", 50);
    }, timeout)
  }
  
  
  
  //creating minutes strokes (with the <span> tag) ----->
  for (let i = 0, spanDeg = 0, timeout = 380; i < 60; i++, spanDeg += 6, timeout += 20)
  {
    if (spanDeg % 30 !== 0)
      setTimeout(function() 
      {
        _top = (Math.cos(spanDeg * Math.PI/180) * (clockRadius - 10)).toFixed(6);
        right = (Math.sin(spanDeg * Math.PI/180) * (clockRadius - 10)).toFixed(6);
      
        clock.insertAdjacentHTML("beforeend", "<span class='mini-digits md" + i + "'></span>");
        clock.getElementsByClassName("md"+i)[0].style.WebkitTransform = "rotate(" + spanDeg + "deg)";
        clock.getElementsByClassName("md"+i)[0].style.transform = "rotate(" + spanDeg + "deg)";
        clock.getElementsByClassName("md"+i)[0].style.top = ((clockRadius - 4) - _top) + "px";
        clock.getElementsByClassName("md"+i)[0].style.right = ((clockRadius - 0.5) - right) + "px";
        setTimeout(() => clock.getElementsByClassName("md"+i)[0].style.opacity = "1", 50);
      }, timeout);
    else continue;
  }
  
  
  
  //freeze/unfreeze time ----->
  ID("my-name").onclick = function()
  {
    if (clockIsPaused)
      clockIsPaused = false,
      loadClock(),
      setTimeout(startClock, 0);
    else
      clockIsPaused = true,
      toast("O! Man! You have just frozen time! *grins*<br />#TimeTraveller ;)");
      clearInterval(start);
  };
};




//END ----->
 
 
 
 





//alert("Hi, there! :) \n\nClick on my name to freeze time. ;)");

//alert("Waaaaooh!😮 Code Of The Day!😀 Thank you so much, SoloLearn, for this. What a great honour!🤗 \n\nAnd thanks, guys. You all did it!😊 \n\nWaoh! This is great!😊")
 
 
 
 
 
 
 
 





