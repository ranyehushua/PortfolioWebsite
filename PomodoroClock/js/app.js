var timerOn = false; //set to true while the timer is running
var interval; //global variable that will be needed to store the setInterval callback in - needed to use the clearInterval method

//declaring audio sprite object as well as object to store time data for the sprite
var audioSprite = new Audio('audio/sprite.mp3');

var audioSpriteData = {
  work: {
    start: 0.0,
    length: 3000
  },
  takeBreak: {
    start: 5.5,
    length: 7000
  }
}

//Functions for the increment up and down events
$('.inc-down').click(function() {
  //only allow to change when the clock is not running and only allow if the item being incremented is greater than 1
  if (!timerOn && parseInt($(this).next().text()) > 1) {
    var time = $(this).next().text(); //since the times appears to the right of the inc-down buttons, the time itself is the 'next' sibling
    time = parseInt(time);
    $(this).next().text(time - 1);
    $("#seconds").hide(); //re-hide the seconds and colon when resetting clock time(s)
    $('#timerColon').hide();

    workTime(); //if a change is made while paused, clock reverts back to work time
  }
});

$('.inc-up').click(function() {
  //only allow changes if timer is not running
  if (!timerOn) {
    var time = $(this).prev().text(); //since the times appears to the left of the inc-up buttons, the time itself is the 'prev' sibling
    time = parseInt(time);
    $(this).prev().text(time + 1);
    $("#seconds").hide(); //re-hide the seconds and colon when resetting clock time(s)
    $('#timerColon').hide();

    workTime(); //if a change is made while paused, clock reverts back to work time
  }
});

//Clicking the clock will start and stop the clock
$('#clock').click(function() {
  prepSounds();
  $('#seconds').show(); //show colon and seconds once the clock starts
  $('#timerColon').show();
  if (timerOn) {
    clearInterval(interval); //if the timer is already running than this will stop the interval
    timerOn = false; //reset to show that timer is not running
  } else {
    timerOn = true;
    interval = setInterval(function() {
      countDown();
    }, 1000);
  }
});

//declare countDown function
function countDown() {
  if ($('#minutes').text() === "00" && $('#seconds').text() === "00") { //if clock has run down
    if ($('#clockMode').text() === "Session") {
      breakTime(); //if already in session mode, switch to break
      //Play sound for going back to work
      audioSprite.currentTime = audioSpriteData.takeBreak.start;
      audioSprite.play();
      console.log('Play break audio');
      setTimeout(function () {audioSprite.pause();}, audioSpriteData.takeBreak.length);
    } else {
      workTime(); //otherwise if already in break mode, switch to session
      //Play sound for going back to work
      audioSprite.currentTime = audioSpriteData.work.start;
      audioSprite.play();
      console.log('Play work audio');
      setTimeout(function () {audioSprite.pause();}, audioSpriteData.work.length);
    }
  } else if ($('#seconds').text() === "00") { //if seconds have bottomed out, reduce minutes by 1 and reset seconds to '59'
    var temp = parseInt($('#minutes').text());
    temp--;
    if (temp >= 10) $('#minutes').text(temp);
    else $('#minutes').text("0" + temp); //if minutes less than 10, add '0' before to make 2 digits long
    $('#seconds').text("59");
  } else {
    var temp = parseInt($('#seconds').text());
    temp--;
    if (temp >= 10) $('#seconds').text(temp);
    else $('#seconds').text("0" + temp); //if seconds less than 10, add '0' before to make 2 digits long
  }
}

function breakTime() {
  //Reset clock with specified break length and reset seconds to 00. Also change mode text to "Break!!!"
  $('#seconds').text('00');
  $('#minutes').text($('#breakLength').text());
  $('#clockMode').text('Break!!!');
  //change colors to green when on break
  $('#clockMode').css('color', '#00B200');
  $('#clock').css('border-color', '#00B200');
}

function workTime() {
  //Reset clock with specified session length and reset seconds to 00. Also change mode text to "Session"
  $('#seconds').text('00');
  $('#minutes').text($('#sessionLength').text());
  $('#clockMode').text('Session');
  //change colors back to white when in session
  $('#clockMode').css('color', 'white');
  $('#clock').css('border-color', 'white');
}

function prepSounds () {
  audioSprite.play();
  audioSprite.pause();
  console.log('Sounds prepped');
}
