$(document).ready( function() {

  $('.instrument').on('click', 'button', function(event) {
    var classString = $(this).attr("class");
    var note = classString.charAt(5);
    playIt(note);
  });

  $('body').keydown(function(event) {
    if (event.key.match(/[a-gA-G]/)){
      playIt(event.key.toLowerCase());
    }
  });

});


var playIt = function(note) {
  var sound = $("#" + note + 'Audio');
  sound[0].load();
  sound[0].play();
};

// var embeds = ($('#audio_embeds').children("audio"));
// var clips = embeds.map(function() {
//   return $(this).attr("id");
// });
// console.log(clips);
