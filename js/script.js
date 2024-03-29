$(document).ready(function() {

	$(".input").dblclick(function() {
		$(this).get(0).reset();
	});

	$(".drag").draggable({ 
		revert: "invalid", // when released to an incorrect area, artwork will return to its original position
		drag: function() {
			$(this).css({"opacity": "0.6"}); // opacity reduces to 20% when artwork is being dragged
		},
		stop: function() {
			$(this).css({"opacity": "1"}); // reverts opacity to 100% when artwork is released from user's control
		}
	});

	$(".drop_container").droppable(); // makes sure that images can be dropped in this specific area

	// overlay controls

	$(".one").click(function() { // content for lightbox (magnification) mode:
		$(".zoom_overlay").show();
		$(".zoom_image").css({"background" : "url(images/1.jpg) no-repeat center center / cover"});
		$(".description").html("Flood Tablet");
	});

	$(".two").click(function() {
		$(".zoom_overlay").show();
		$(".zoom_image").css({"background" : "url(images/2.jpg) no-repeat center center / cover"});
		$(".description").html("Going Forth by Day");
	});

	$(".three").click(function() {
		$(".zoom_overlay").show();
		$(".zoom_image").css({"background" : "url(images/3.jpg) no-repeat center center / cover"});
		$(".description").html("Humbaba");
	});

	$(".four").click(function() {
		$(".zoom_overlay").show();
		$(".zoom_image").css({"background" : "url(images/4.jpg) no-repeat center center / cover"});
		$(".description").html("Rhind");
	});

	$(".five").click(function() {
		$(".zoom_overlay").show();
		$(".zoom_image").css({"background" : "url(images/5.jpg) no-repeat center center / cover"});
		$(".description").html("Standard Inscription");
	});

	$(".six").click(function() {
		$(".zoom_overlay").show();
		$(".zoom_image").css({"background" : "url(images/6.jpg) no-repeat center center / cover"});
		$(".description").html("Thutmose III Stele");
	});
	
	$(".seven").click(function() {
		$(".zoom_overlay").show();
		$(".zoom_image").css({"background" : "url(images/7.jpg) no-repeat center center / cover"});
		$(".description").html("Aten Disk");
	});

	$(".close_btn, .zoom_overlay").click(function() {
		$(".zoom_overlay").hide(); // clicking on X icon closes lightbox mode
	});




});