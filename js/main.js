$(function() {
	$(".checkbox").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("checked");
	});
});