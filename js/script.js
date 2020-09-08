



$(window).on('scroll', scrollevent);
scrollevent();

function scrollevent(){

	
	if ($(window).scrollTop() >= $('.about').position().top) {
		$('.menu-right button').css('color','#4A4A4A');

	$('.skill').each(function(){    //each문이 모든 skill을 한번씩 돌아서 
		var skill = $(this);		
		var percentage = skill.find('.percentage').text();  // 첫 skill의 percentage를 받아와서 두번째면 두번째 skill의 percentage받아옴 
		skill.find('.inner-bar').animate({width: percentage},1200);   //그 skill의 가로길이를 설정 

	});

	}else{
		$('.menu-right button').css('color','white');
	}
	//각 섹션을 보고
	//  현재 스크롤 위치가 그 섹션보다 아래에 있으면 
	//    그 섹션의 vertical-center를 찾고  animate 시켜라!

	$('section').each(function(){
		if ($(window).scrollTop() >= $(this).position().top) {
			$(this).find('.vertical-center').animate({top:'0', opacity:'1'},800);
		
		}
	});

} 


$('.menu-right button').on('click',function(){
	var id = $(this).attr('id');
	if (id == "about-btn") {
		$('html,body').animate({scrollTop : $('.about').position().top}, 800);
		
	}else if (id == "myskills-btn") {
		$('html,body').animate({scrollTop : $('.myskills').position().top}, 800);
	}else if (id == "project-btn") {
		$('html,body').animate({scrollTop : $('.project').position().top}, 800);
	}else if (id == "contact-btn") {
		$('html,body').animate({scrollTop : $('.contact').position().top}, 800);
	}
	
});


// $('.skill').each(function(){    //클래스가 skill인 항목 다 보기 위해서 반복문돌림 
// 	var skill = $(this);		// skill이라는 변수에 this 현재 요소 저장 
// 	var percentage = skill.find('.percentage').text();  //skill(현재요소)안에 .percentage인 요소의 text 저장 
// 	skill.find('.inner-bar').animate({width: percentage},1200);

// });

// $(window).on('scroll', function(){
// 	if ($(window).scrollTop()  >= $('.about').position().top && $(window).scrollTop() < $('.contact').position().top) {
		
// 		$('.about .vertical-center').animate({opacity : '1', top : '0px'},1000);
// 	}else if ($(window).scrollTop() >= $('.contact').position().top ) {
// 		$('.contact .vertical-center').animate({opacity : '1' , top: '0px'},1000);
// 	}else if($(window).scrollTop() >= $('.header').position().top && $(window).scrollTop() < $('.about').position().top){
// 		$('.header .vertical-center').animate({opacity : '1' , top: '0px'});
// 	}
// });

  






