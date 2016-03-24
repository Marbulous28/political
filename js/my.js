$(document).ready(function(){
  $("form#politics").submit(function(event){
    event.preventDefault();
    var abortion = parseInt($('#abortion').val());
    var militarySpending = parseInt($('#militarySpending').val());
    var gunControl = parseInt($('#gunControl').val());
    var marijuana = parseInt($('#marijuana').val());
    var immigration = parseInt($('#immigration').val());
    var politicalView = abortion + militarySpending + gunControl + marijuana + immigration;
    if (politicalView > 0) {
      alert("You are liberal");
    } else if (politicalView === 0) {
      alert("You are neutral");
    } else if (politicalView < 0){
      alert('You are conservative');
    }
  });
});
