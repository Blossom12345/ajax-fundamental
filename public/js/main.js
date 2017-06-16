$(document).ready(function(){
  $.ajax({
  	type:'GET',
  	url:'http://swapi.co/api/people/',	
  })
  .done(function){
      console.log(data);
  })
  .fail(function(){
      alert("Hey man the server messed up...")
  })
  console.log("Heyy you guys")

});
//done promises it will return something if it doesn't console.log alert fail
// post man
