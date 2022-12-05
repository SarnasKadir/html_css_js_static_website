$(document).ready(function() {
	$("#showMenu").click(function() {
		$("#showMenu").hide();
		$("#hideMenu").show();
		$(".top_banner").addClass("top_bannerB");
	});
	$("#hideMenu").click(function() {
		$("#hideMenu").hide();
		$("#showMenu").show();
		$(".top_banner").removeClass("top_bannerB");
	});
});