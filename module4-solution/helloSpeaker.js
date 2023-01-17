(function () {
  var helloSpeaker = {};
  helloSpeaker.speakWord = 'Hello';
  helloSpeaker.speak = function (name) {
    console.log(helloSpeaker.speakWord + ' ' + name);
  };
  global.helloSpeaker = helloSpeaker;
})();

(function () {
  var byeSpeaker = {};
  var speakWord = 'Good Bye';
  byeSpeaker.speak = function (name) {
    console.log(speakWord + ' ' + name);
  };
  global.byeSpeaker = byeSpeaker;
})();
