(function(){
  'use strict';

  /* Or you can select items using a CSS style selector */
  // var mouseHovering;
  // var hours = document.querySelector('.clock .hours');
  // var minutes = document.querySelector('.clock .minutes');
  // var seconds = document.querySelector('.clock .seconds');
  //
  // var container = document.querySelector('.container');
  //
  // function formatTime(time){
  //   var paddedTime = [];
  //
  //   paddedTime[0] = ("0" + time[0]).slice(-2);
  //   paddedTime[1] = ("0" + time[1]).slice(-2);
  //   paddedTime[2] = ("0" + time[2]).slice(-2);
  //
  //   return paddedTime;
  // }
  //
  // function updateDisplay(time){
  //     var formattedTime = formatTime(time);
  //
  //     hours.textContent = formattedTime[0];
  //     minutes.textContent = formattedTime[1];
  //     seconds.textContent = formattedTime[2];
  // }
  //
  // function updateProgressBar(seconds){
  //   var progressBar = document.getElementById('progress-bar');
  //   var width = (seconds / 60) * 100;
  //
  //   progressBar.style.width = width + '%';
  // }
  //
  // function updateBackgroundColor(time){
  //   var red = (time[0] * 21).toString(16);
  //   var green = (time[1] * 21).toString(16);
  //   var blue = (time[2] * 4).toString(16);
  //
  //   var backgroundColor = formatTime([red, green, blue]);
  //
  //   container.style.backgroundColor = '#' + backgroundColor.join('');
  //
  //   return backgroundColor;
  // }
  //
  // function runClock(){
  //   var currentTime = new Date();
  //
  //   var hours = currentTime.getHours();
  //   var minutes = currentTime.getMinutes();
  //   var seconds = currentTime.getSeconds();
  //
  //   var clockTime = [hours, minutes, seconds];
  //
  //   var newBackgroundColor = updateBackgroundColor(clockTime);
  //
  //   if(mouseHovering){
  //     updateDisplay(newBackgroundColor);
  //   }else{
  //     updateDisplay(clockTime);
  //   }
  //
  //   updateProgressBar(seconds);
  // }
  //
  // function trackMouse(event){
  //   if(event.type == 'mouseenter'){
  //     mouseHovering = true;
  //   }else{
  //     mouseHovering = false;
  //   }
  // }
  //
  // window.setInterval(runClock, 1000);
  //
  // container.addEventListener('mouseenter', trackMouse);
  // container.addEventListener('mouseleave', trackMouse);
  //

  var thingsILike = ['airplanes', 'computers', 'puppies'];

  console.log(thingsILike.length);

  for(var i=0; i<thingsILike.length; i++){
    console.log('fast' + ' ' + thingsILike[i]);
  }

  console.log('Things I like:', thingsILike.join(''));

  var months = 'Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec';

  console.log('months', months);
  //console.log('reverse', months.reverse());

  var monthArray = months.split(' / ');
  monthArray.reverse();
  console.log('monthArray', monthArray);

  months = monthArray.join(' / ');
  console.log('months', months);

  console.log('Done!!');


function sum(numbersToAdd){
  var total = 0;

   for(var counter=0; counter<numbersToAdd.length; counter++){
     total += numbersToAdd[i];
   }

  return total;
}

console.log(10);
console.log(sum([2, 3, 10]));
console.log(sum([8, 10, 20]));


function print(word, punctuation){
  console.log(word + punctuation);
}

print('hello', '...'); //hello

print('goodbye', ' so soon?'); //goodbye

print('this is really cool', "!");


}());
