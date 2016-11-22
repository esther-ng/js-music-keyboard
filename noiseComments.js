$(document).ready( function() {
  // your code here
  // $('#cAudio').play();
  // console.log(cAudio);
  // console.log(cNote);
  // var playIt = playAudio();
  // cNote.click(playIt(cAudio));
  // var cAudio = ($('#cAudio'));
  // var cNote = $('.c');
  // cNote.click(playAudio(cAudio));

  var embeds = ($('#audio_embeds').children("audio"));
  // var clips = embeds.map(function() {
  //   return $(this).attr("id");
  // });
  console.log(embeds[0]);
  // console.log(clips[0].includes("c"));

  // $('.instrument').on('click', 'button', function(event) {
  //   var noteArray = $(this).attr("class");
  //   var note = noteArray[5];
  //   play
  //   // var sound = $("#" + note + 'Audio');
  //   // sound[0].play();
  // });
  //
  // $('body').keydown(function(event) {
  //   var note = event.key;
  //   playIt(note);
  //   // var sound = $("#" + note + 'Audio');
  //   // sound[0].play();
  // });

});
// 
// var playIt = function(note) {
//   var sound = $("#" + note + 'Audio');
//   sound[0].play();
// };

// function playAudio(clip) {
//   clip.play();
// }

// function playAudio() {
//   var playThis = function(audio) {
//     audio.play();
//   };
//   return playThis;
// }
