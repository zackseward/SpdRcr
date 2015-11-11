$(document).ready(function() {
  var formData = getQueryStrings();
  console.log(formData['car']);
  console.log(formData['track']);
  console.log(formData['full-name']);
  console.log(formData['email-address']);
});

function getQueryStrings() {
  var assoc  = {};
  var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
  var queryString = location.search.substring(1);
  var keyValues = queryString.split('&');

  for(var i in keyValues) {
    var key = keyValues[i].split('=');
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  }

  return assoc;
}
