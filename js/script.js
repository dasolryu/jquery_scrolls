function scrollHandler(){
  let windowBtm = $(window).scrollTop() + $(window).height();
  $('.playlist').each(function(){
  	let playlist = $(this);
  	let playListHalf = playlist.position().top + playlist.outerHeight()/2;
    if(playListHalf < windowBtm){
      playlist.animate({'opacity': '1'}, 1500);
    }
  });

  if(windowBtm == $(document).height()){
	$('.to-top-btn').fadeIn();
  }else{
  	$('.to-top-btn').fadeOut();
  }
}

$(window).on('scroll', scrollHandler);
scrollHandler();

function arrivedBtm(){

}