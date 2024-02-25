
/*$( function() {
if( $('#review input[type="radio"]').length == 1 && $('#review input[type="radio"]').prop('checked') ) {
$('#review input[type="radio"]').hide();
}
if ($('.review').animatedBlock) {
$('.review').animatedBlock();
}
} 
); */


$(document).ready(function() {
    $("#review").review__list({
      items :4,
      navigation: true,
      navigationText:  [
      "<div class='prev'></div>",
      "<div class='next'></div>"
      ],
      pagination: true,
      responsive :true,
     autoPlay: true,
    });
  });
