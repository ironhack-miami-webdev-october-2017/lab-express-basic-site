/****************************/
// MATERIALIZE INITIALIZERS //
/****************************/
$(() => {
  M.AutoInit();
  $('.carousel').carousel({
    dist: -200,
    shift: 50,
    numVisible: 5,
    // fullWidth: true,
    indicators: true
  });
});