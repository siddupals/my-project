
$(document).ready(function () {

  var root = "http://localhost:3000";

  $.ajax({
    url: root ,
    method : 'GET'
  }).getJSON("sample.json", function (data) {
    console.log(data);
  })
})
