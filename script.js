console.log("Check me out... no seriously, check me out.");

$(document).ready(function(){
  var div = document.createElement("div");
  var foo = $.get('https://staging.yesboxx.com/retrieve_user_id');
  console.log(foo);
  div.innerHTML += foo;
  document.body.appendChild(div);
});

