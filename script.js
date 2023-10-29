// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  

  $('#container').children().eq(0).children().eq(2).click( function(event) {

    event.preventDefault();

    let savedNotes = $('#container').children().eq(0).children().eq(1).val();

    localStorage.removeItem('notes1');

    localStorage.setItem('notes1', savedNotes);
  } );


  $('#container').children().eq(1).children().eq(2).click( function(event) {

    event.preventDefault();

    let savedNotes = $('#container').children().eq(1).children().eq(1).val();

    localStorage.removeItem('notes2');

    localStorage.setItem('notes2', savedNotes);
  } );


  $('#container').children().eq(2).children().eq(2).click( function(event) {

    event.preventDefault();

    let savedNotes = $('#container').children().eq(2).children().eq(1).val();

    localStorage.removeItem('notes3');

    localStorage.setItem('notes3', savedNotes);
  } );


  $('#container').children().eq(3).children().eq(2).click( function(event) {

    event.preventDefault();

    let savedNotes = $('#container').children().eq(3).children().eq(1).val();

    localStorage.removeItem('notes4');

    localStorage.setItem('notes4', savedNotes);
  } );

  $('#container').children().eq(4).children().eq(2).click( function(event) {

    event.preventDefault();

    let savedNotes = $('#container').children().eq(4).children().eq(1).val();

    localStorage.removeItem('notes5');

    localStorage.setItem('notes5', savedNotes);
  } );

  $('#container').children().eq(5).children().eq(2).click( function(event) {

    event.preventDefault();

    let savedNotes = $('#container').children().eq(5).children().eq(1).val();

    localStorage.removeItem('notes6');

    localStorage.setItem('notes6', savedNotes);
  } );

  $('#container').children().eq(6).children().eq(2).click( function(event) {

    event.preventDefault();

    let savedNotes = $('#container').children().eq(6).children().eq(1).val();

    localStorage.removeItem('notes7');

    localStorage.setItem('notes7', savedNotes);
  } );
  $('#container').children().eq(7).children().eq(2).click( function(event) {

    event.preventDefault();

    let savedNotes = $('#container').children().eq(7).children().eq(1).val();

    localStorage.removeItem('notes8');

    localStorage.setItem('notes8', savedNotes);
  } );

  $('#container').children().eq(8).children().eq(2).click( function(event) {

    event.preventDefault();

    let savedNotes = $('#container').children().eq(8).children().eq(1).val();

    localStorage.removeItem('notes9');

    localStorage.setItem('notes9', savedNotes);
  } );

  //Local storage doesn't seem to work


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var now = dayjs();
  var nowHour = now.format('H');
  for (let i = 9; i <= 17; i++) {
    let h = "#hour-" + i;
    if (nowHour - i > 0) {
      $(h).addClass("past");
    } else if (nowHour - i == 0) {
      $(h).addClass("present");
    } else {
      $(h).addClass("future");
    }


  }

  $("#hour-9").addClass("past");



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  for (let i = 1; i <= 9; i++){
    $('#container').children().eq((i-1)).children().eq(1).value = localStorage.getItem('notes' + i);
  }

  //calls to local storage don't seem to be working for me, so I haven't been able to test this function.



  // TODO: Add code to display the current date in the header of the page.


  var nowEl = $('#currentDay');
  nowEl.text((now.format('dddd, MMMM D YYYY, h:mm a')));
});
