console.log("Giving you the business");

document.addEventListener('DOMContentLoaded', function () {

  console.log("foo");

  document.getElementById("main").innerHTML = "";

  var div = document.createElement('div');

  $(div).append("<br>");
  $(div).append("FOO BAR");
  $(div).append("<br>");

  var link = document.createElement('a');
  link.href = "http://www.prototyperobotics.com";
  $(div).append(link);

});

