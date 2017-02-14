$(document).ready(function(){

var owl=$(".owl-carousel");
owl.owlCarousel({
  loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
});
$.ajax({
  url:' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
   data: {
      format: 'json'
   },
  success: function (data){
    $('#euro>.buy').text(data[0].buy);
    $('#euro>.sale').text(data[0].sale);
    $('#rub>.buy').text(data[1].buy);
    $('#rub>.sale').text(data[1].sale);
    $('#dollar>.buy').text(data[2].buy);
    $('#dollar>.sale').text(data[2].sale);
},
type:'GET'
})

$('.like').click(function(){

    let counter=+$(this).find('.count').html();
    counter++;
    $(this).find('.count').html(counter);
  })
	
//accordion
  $(".down > .down_click").on("click", function(){
  if($(this).hasClass('active')){
      $(this).siblings('.content').slideUp(200);
      $(this).find("div").toggleClass("fa-minus");
    }else{
      $(this).find("div").toggleClass("fa-minus");
    $(this).siblings('.content').slideDown(200);
    }
    $(this).toggleClass("active");
     });
    

  //flickr -> scale image
  
  $('.div-for-img').click(function(){
    $(this).toggleClass('scale-img');
     $(this).siblings('.scale-img').toggleClass('scale-img');
  
  });

  //push subscribe-info into localStorage
  var mas=[];
  $('input#send-user').click(function(){
  var user={
    name: $('#userName2').val(),
    email: $('#userEmail2').val(),
  }
   mas.push(user);
localStorage.setItem(user.name.toString(), user.email)

  })
  
  $('.btn-tggl>div').click(function(){
    if(!$(this).hasClass('active')){
    $(this).toggleClass('active');
    $(this).siblings('div').toggleClass('active');
    if($('.popular').hasClass('active')){
      $('.active-popular').toggleClass('hide');
      $('.active-popular').siblings('div').toggleClass('hide');
    }
    if($('.recent').hasClass('active')){
      $('.active-recent').toggleClass('hide');
      $('.active-recent').siblings('div').toggleClass('hide');
    }
  }
  })
var lastPost=$('.blogs-blog-part4');
  $('.arrow>button').click(function(){
lastPost.next('article').toggleClass('hide-post');
lastPost=lastPost.next('article');
})
});
