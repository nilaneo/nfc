$(function() {
	$(".checkbox").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("checked");
	});

	/*
	* SIMPLE PLACEHOLDERS
	*/

	$("input[type=text]").focus(function(){
		var t = $(this)
		if( t.val()==t.attr('def') ) t.val('')
	});

		$("input[type=text]").blur(function(){
		var t = $(this)
		if( t.val().length==0 ) t.val( t.attr('def') )
	});

	/*
	* SLIDER
	*/

	var slides = [$(".slide-1"), $(".slide-2"), $(".slide-3")],
		slideTimeoutId;

	function startSlideTimer() {
		clearTimeout(slideTimeoutId);
		slideTimeoutId = setTimeout(function(){
			slides[0].find(".btn-next").trigger("click");
		},6000);
	}

	$(".btn-next").on("click", function(e) {
		e.preventDefault();
		slides[0].addClass("is-maximized");
		slides[1].removeClass("is-minified");
		slides[2].removeClass("is-maximized").addClass("is-minified");
		slides.push(slides.shift());
		startSlideTimer();
	});
	
	startSlideTimer();

	/*
	* SCROLLING
	*/

	$(".btn-preorder").on("click", function() {
		$("html, body").animate({ scrollTop: $(document).height() }, 400);
	});


	/*
	* VALIDATE FORM
	*/
});

$(document).ready(function(){

	$('#order-form').on('submit', function(e){
		e.preventDefault();
	})

	$("#send").on("click", function (e) {
		e.preventDefault();
		$("#order-form").submit();
	});

	$("#order-form").validate({

		rules: {
			first_name: {required:true}
		},

		submitHandler: function(form) {

			send = {};
			send.fio  			= 	$("input[name=first_name]").val();
			send.sencond_name  			= 	$("input[name=second_name]").val();
			send.phone_model 	=	$("input[name=phone_model]").val();
			send.phone_number 	=	$("input[name=phone_number]").val();	
			send.email 			=	$("input[name=email]").val();
			send.is_client 		=	$('#is-client').hasClass("checked");
			send.token 			= 	$("#token").val();
			console.log(send);
		// 	$.ajax({
		// 		url: "validate.php",
		// 		data: send,
		// 		type: "POST",
		// 		success: function(data){
		// 			if(data==200){
		// 				$(".form").slideUp("fast",function(){
		// 					$(".form").html("<h2>Спасибо!</h2><p>Ваша заявка принята</p>");
		// 					$(".form").slideDown("fast");
		// 				})
		// 			}else if(data==101){
		// 				alert("Вы не указали контактные данные");
		// 			}else alert("Во время добавления заявки возникла ошибка. Пожалуйста, попробуйте ещё раз");
		// 		}
		// 	})
		// },
		// messages: {
  //           agreement: {
  //               required: "Для продолжения необходимо согласиться с правилами предоставления услуг"
  //           },
  //           phone_model: {
  //           	required: "Вы не указали модель Вашего телефона"
  //           }
  //       }
		} 
	});
})